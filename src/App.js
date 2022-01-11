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
import { useLoading } from './hooks/useLoading';
import Loading from './component/loading/Loading';
import { useAuth } from './hooks/useAuth';
import HomePage from './page/home/HomePage';

function App() {

  const {loading} = useLoading()
  const {isAuthReady,user} = useAuth()

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
          {user && <Redirect to="/products" />}
          {!user && <Signup />}
          </Route>

          <Route path="/products" >
            <Products />
          </Route>

          <Route path="/viewproduct/:id" exact>
            <ViewProductPage />
          </Route>

          <Route path="/cart" >
          {user && <ViewCartPage />}
          {!user && <Login />}
          </Route>

          <Route path="/checkout" >
          {user && <CheckoutPage />}
          {!user && <Login />}
          </Route>

          <Route path="/wishlist" >
          {user && <WishlistPage />}
          {!user && <Login />}
          </Route>

          <Route path="/admin/products" >
            {!user && <Login />}
            {user && user.type === 'user' && <Redirect to="/products" />}
            {user && user.type === 'admin' && <AdmProductsPage />}
          </Route>

          <Route path="/admin/editproduct/:id" exact>
            {!user && <Login />}
            {user && user.type === 'user' && <Redirect to="/products" />}
            {user && user.type === 'admin' && <AdmEditProductPage />}
          </Route>

          <Route path="/admin/addproduct" exact>
            {!user && <Login />}
            {user && user.type === 'user' && <Redirect to="/products" />}
            {user && user.type === 'admin' && <AddProductPage />}
          </Route>

          <Route path="/home">
            <HomePage />
          </Route>
          
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>

          <Route path="*">
            <div className="page--info">
             404 Page not found.
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
