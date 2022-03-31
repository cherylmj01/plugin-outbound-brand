import React from "react";

import { StyledSelect, Caption } from "./BrandSelector.Styles";

import MenuItem from "@material-ui/core/MenuItem";
import { Notifications } from '@twilio/flex-ui';
import { CustomNotifications } from '../../notifications';

// import * as Flex from "@twilio/flex-ui";

class BrandSelector extends React.Component {

    constructor(props){        
        super(props);
    }

    render() {        
        const { response_status } = this.props;

        // The choices of brands converted to a list
        let callerIds = this.props.numberList;
        let callerIdsArray = []
        for (let m in callerIds) {
            callerIdsArray.push(m)
        }

        // For errors, display a notification
        if (response_status === 'Error'){
            Notifications.showNotification(CustomNotifications.BrandLoadNotification, null)
            return <div></div>;
        }
        // Populate the choices of brands as a select tag
        else {
            return(
                <div>
                    <Caption
                    key="queue-select-caption"
                    className="Twilio-OutboundDialerPanel-QueueSelect-Caption">
                    Brand
                    </Caption>

                    <StyledSelect value={String(this.props.selectedBrand) || callerIdsArray[0]}
                                  onChange={(e) => this.props.updateBrand(e.target.value)}>
                            <MenuItem key="placeholder" value="placeholder" disabled>Select Brand</MenuItem>
                            
                            {callerIdsArray.map( (element) => ( 
                            <MenuItem key={element} value={callerIds[element]}>
                            {element}
                            </MenuItem>
                            ))}
                    </StyledSelect>
                </div>
            );
        }
    }
};    

export default BrandSelector;

