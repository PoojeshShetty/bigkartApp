import './App.css';
import Navbar from './component/navbar/Navbar';
import { Switch, Route} from 'react-router-dom'
import Login from './page/login/Login'
import Signup from './page/signup/Signup'
import Products from './page/products/Products'
import ViewProductPage from './page/viewproduct/ViewProductPage';
import ViewCartPage from './page/viewcart/ViewCartPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App__container">
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/products" >
          <Products />
        </Route>
        <Route path="/viewproduct" >
          <ViewProductPage />
        </Route>

        <Route path="/cart" >
          <ViewCartPage />
        </Route>

        <Route path="/" >
          Home
        </Route>
        
      </Switch>
      </div>
    </div>
  );
}

export default App;
