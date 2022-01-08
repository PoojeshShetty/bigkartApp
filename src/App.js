import './App.css';
import Navbar from './component/navbar/Navbar';
import { Switch, Route} from 'react-router-dom'
import Login from './page/login/Login'
import Signup from './page/signup/Signup'
import Products from './page/products/Products'
import ViewProductPage from './page/viewproduct/ViewProductPage';
import ViewCartPage from './page/viewcart/ViewCartPage';
import CheckoutPage from './page/checkout/CheckoutPage';
import WishlistPage from './page/wishlist/WishlistPage';
import AddProductPage from './page/admin/addproduct/AddProductPage';
import AdmProductsPage from './page/admin/products/AdmProductsPage';
import AdmEditProductPage from './page/admin/editproduct/AdmEditProductPage';
import { useCartContext } from './hooks/useCartContext';
import { useLoading } from './hooks/useLoading';
import Loading from './component/loading/Loading';

function App() {

  const context = useCartContext()

  const {loading} = useLoading()

  console.log({...context})

  return (
    <div className="App">
      {loading && <Loading />}
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

          <Route path="/checkout" >
            <CheckoutPage />
          </Route>

          <Route path="/wishlist" >
            <WishlistPage />
          </Route>

          <Route path="/admin/products" >
            <AdmProductsPage />
          </Route>

          <Route path="/admin/editproduct" >
            <AdmEditProductPage />
          </Route>

          <Route path="/admin/addproduct" >
            <AddProductPage />
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
