import React from "react";

import { StyledSelect, Caption } from "./BrandSelector.Styles";

import MenuItem from "@material-ui/core/MenuItem";
// import * as Flex from "@twilio/flex-ui";

const BrandSelector = (props) => {
    let callerIds = {
        "GreenDot":"123",
        "Walmart":"567",
        "Test":"+19382010447"
    };

    // console.log('TestHello',props);

    let callerIdsArray = []
    for (let m in callerIds) {
        callerIdsArray.push(m)
    }

    // console.log('TestHello6565',callerIdsArray);
    // console.log('CheryltestHeloo',String(props.brandsNumber) );
    // console.log('TestHello7879',callerIds["GreenDot"]);

    
    return(
        <div>
            <Caption
            key="queue-select-caption"
            className="Twilio-OutboundDialerPanel-QueueSelect-Caption">
             Caller Id
            </Caption>

            <StyledSelect
            value={String(props.brandsNumber) || callerIdsArray[0]}
            onChange={(e) => props.updateBrand(e.target.value)}>

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





};

export default BrandSelector;












// import React from 'react';
// import PropTypes from 'prop-types';

// // const OutboundCaller = () => {
// //     return (
// //         <div onload={props.dismissBar}>Hi!</div>
// //     )
// // }

// class OutboundCaller extends React.Component {
//     data = null;

//     constructor(props){
//         super(props);
//         this.dismissBar = props.dismissBar
//         props.dismissBar
//     }

//     get_data() {
//         var xhr = new XMLHttpRequest();
//         xhr.onload = function() {
            
//             if(xhr.status === 200){
//                 this.data = JSON.parse(xhr.responseText);
//                 console.log('cheryl300', this.data);
//             }
//         };
//         xhr.open('GET','https://scarlet-salmon-5915.twil.io/assets/Caller_ID.json', true);
//         xhr.send(null);
//     };

//     render(){
//         if (this.data === null) {
//             this.get_data();
//         }
//         console.log("TestPeter501","Hi");
//         return(            
//             <div>Hi!</div>
//         );
//     }
// }



// OutboundCaller.propTypes = {
//   brand: PropTypes.object.isRequired,
//   dismissBar: PropTypes.func.isRequired,
// };



// export default OutboundCaller;