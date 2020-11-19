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
} from 'screens';

const App = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/" component={HomeScreen} exact />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/cart/:id?" component={CartScreen} />
                    <Route path="/login" component={LoginScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/profile" component={ProfileScreen} />
                    <Route path="/shipping" component={ShippingScreen} />
                    <Route path="/payment" component={PaymentScreen} />
                    <Route path="/place-order" component={PlaceOrderScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
