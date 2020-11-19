import { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FormContainer, CheckoutSteps } from 'components';
import { savePaymentMethod } from 'actions/cartActions';

const PaymentScreen = ({ history }) => {
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    if (!shippingAddress) {
        history.push('/shipping');
    }

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        history.push('/place-order');
    };

    return (
        <FormContainer>
            <CheckoutSteps step1={!userInfo} step2 step3 />
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as="legend">Select Method</Form.Label>
                    <Col>
                        <Form.Check
                            type="radio"
                            label="PayPal or Credit Card"
                            id="PayPal"
                            name="paymentMethod"
                            value="PayPal"
                            checked
                            onChange={e => setPaymentMethod(e.target.value)}
                        ></Form.Check>
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Continue
                </Button>
            </Form>
        </FormContainer>
    );
};

export default PaymentScreen;
