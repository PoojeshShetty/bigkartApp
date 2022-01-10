import './App.css';
import Navbar from './component/navbar/Navbar';
import { Switch, Route, Redirect} from 'react-router-dom'
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
import { useAuth } from './hooks/useAuth';
import HomePage from './page/home/HomePage';

function App() {

  const context = useCartContext()
  const {loading} = useLoading()
  const {isAuthReady,user} = useAuth()

  console.log(context)
  console.log({isAuthReady,user})

  if(!isAuthReady)
  return (
    <Loading />
  )

  return (
    <div className="App">

      {loading && <Loading />}

      <Navbar />
      <div className="App__container">
        <Switch>


          <Route path="/login" exact>
            {user && <Redirect to="/products" />}
            {!user && <Login />}
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

          <Route path="/admin/editproduct/:id" exact>
            <AdmEditProductPage />
          </Route>

          <Route path="/admin/addproduct" exact>
            <AddProductPage />
          </Route>

          <Route path="/home">
            <HomePage />
          </Route>
          
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>

          <Route path="*">
            Page not found 404
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
