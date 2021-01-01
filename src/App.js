import logo from './logo.svg';
import { connect } from "react-redux";
import { toggleCartHidden } from "./redux/cart/cart-action";
import './App.css';

function App({toggleCartHidden,hidden}) {
  return (
    <div className="App">
      <header className="App-header">
       { 
          hidden ? null : "Showing"
       }
        <div  onClick={toggleCartHidden}> <img src={logo} className="App-logo" alt="logo" />
       </div>

       
      </header>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
 
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
