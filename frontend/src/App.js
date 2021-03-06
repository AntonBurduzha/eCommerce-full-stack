import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Header, Footer } from 'components';
import {
    HomeScreen,
    ProductScreen,
    CartScreen,
    LoginScreen,
    RegisterScreen,
    ProfileScreen,
    ShippingScreen,
    PaymentScreen,
    PlaceOrderScreen,
    OrderScreen,
    UserListScreen,
    UserEditScreen,
    ProductListScreen,
    ProductEditScreen,
    OrderListScreen,
} from 'screens';

const App = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/" component={HomeScreen} exact />
                    <Route path="/search/:keyword" component={HomeScreen} exact />
                    <Route path="/page/:pageNumber" component={HomeScreen} exact />
                    <Route path="/search/:keyword/page/:pageNumber" component={HomeScreen} exact />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/cart/:id?" component={CartScreen} />
                    <Route path="/login" component={LoginScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/profile" component={ProfileScreen} />
                    <Route path="/shipping" component={ShippingScreen} />
                    <Route path="/payment" component={PaymentScreen} />
                    <Route path="/place-order" component={PlaceOrderScreen} />
                    <Route path="/order/:id" component={OrderScreen} />
                    <Route path="/admin/userList" component={UserListScreen} />
                    <Route path="/admin/user/:id/edit" component={UserEditScreen} />
                    <Route path="/admin/productList" component={ProductListScreen} exact />
                    <Route path="/admin/productList/:pageNumber" component={ProductListScreen} exact />
                    <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
                    <Route path="/admin/orderList" component={OrderListScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
