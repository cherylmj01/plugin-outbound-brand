import BrandSelector from './BrandSelector';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from '../../states/BrandNumberState';



// const mapStateToProps = (state) => ({
//     brand: state['outbound-brand'].OutboundCaller.brand,
//   });

const mapStateToProps = (state) => ({
  brandsNumber: state["outbound-brand"].BrandSelector.brandsNumber,
});
  
  const mapDispatchToProps = (dispatch) => ({
    updateBrand: bindActionCreators(Actions.updateBrand, dispatch),
  });
  
export default connect(mapStateToProps,mapDispatchToProps)(BrandSelector);

//export default connect(mapDispatchToProps)(BrandSelector);
// export default BrandSelector;