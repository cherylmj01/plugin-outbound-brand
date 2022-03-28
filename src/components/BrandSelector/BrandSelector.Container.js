// Import redux methods
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import the Redux Actions and Component
import { Actions } from '../../states/BrandNumberState';
import BrandSelector from './BrandSelector';


// Define mapping functions
const mapStateToProps = (state) => {
  console.log("TEST123123123123123123 STATE", state)
  return {
    selectedBrand: state["outbound-brand"].BrandSelector.brandsNumber,
    numberList: state["outbound-brand"].BrandSelector.brandNumberList
  }
};
  
const mapDispatchToProps = (dispatch) => ({
    updateBrand: bindActionCreators(Actions.updateBrand, dispatch),
    getNumbers: bindActionCreators(Actions.getPhoneNumbers, dispatch)
});

// Connect presentational component to Redux
export default connect(mapStateToProps,mapDispatchToProps)(BrandSelector);