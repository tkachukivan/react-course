import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from './ContactData';

class Checkout extends Component {
    constructor(props) {
        super(props);

        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        query.forEach((value, key) => {
            if (key === 'price') {
                price = +value;
            } else {
                ingredients[key] = +value;
            }
        });

        this.state = { ingredients, price,}
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />}
                />
            </div>
        );
    }
}

export default Checkout;