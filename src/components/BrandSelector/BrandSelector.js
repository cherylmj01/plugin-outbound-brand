import React from "react";

import { StyledSelect, Caption } from "./BrandSelector.Styles";

import MenuItem from "@material-ui/core/MenuItem";
// import * as Flex from "@twilio/flex-ui";

class BrandSelector extends React.Component {

    constructor(props){        
        super(props);
        this.props.getNumbers();
    }

    componentDidMount() {
        this.props.getNumbers();
    }

    render() {
        let callerIds = this.props.numberList;

        console.log('TestHello10',this.props);

        let callerIdsArray = []
        for (let m in callerIds) {
            callerIdsArray.push(m)
        }

        return(
            <div>
                <Caption
                key="queue-select-caption"
                className="Twilio-OutboundDialerPanel-QueueSelect-Caption">
                Brand
                </Caption>

                <StyledSelect
                value={String(this.props.selectedBrand) || callerIdsArray[0]}
                onChange={(e) => this.props.updateBrand(e.target.value)}>

                    <MenuItem key="placeholder" value="placeholder" disabled>
                    Select Brand
                    </MenuItem>

                    {callerIdsArray.map( (element) => ( 
                        <MenuItem key={element} value={callerIds[element]}>
                        {element}
                        </MenuItem>
                    ))}

                </StyledSelect>
            </div>
        );
    }

};    

export default BrandSelector;

