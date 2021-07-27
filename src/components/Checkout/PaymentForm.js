import React, { Fragment, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './checkoutStyles';
import axios from 'axios';
import { API } from '../../config';

const memberships = [
    // { name: 'Starter', desc: 'This is Starter membership', price: '$8.99' },
    // { name: 'Gold', desc: 'This is Gold membership', price: '$29.99' },
    { name: 'Diamond', desc: 'This is Diamond membership', price: '$99.99' },
];

const PaymentForm = () => {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (!error) {
            try {
                const { id } = paymentMethod;
                const response = await axios.post(`${API}/api/payment`, {
                    amount: 99.99,
                    id,
                });
                if (response.data.success) {
                    console.log('Successful payment');
                    setSuccess(true);
                }
            } catch (error) {
                console.log('Error', error);
            }
        } else {
            console.log(error.message);
        }
    };

    return (
        <Fragment>
            <Typography variant='h6' gutterBottom>
                Purchase Summary
            </Typography>
            <List disablePadding>
                {memberships.map((membership) => (
                    <ListItem className={classes.listItem} key={membership.name}>
                        <ListItemText
                            primary={membership.name}
                            secondary={membership.desc}
                        />
                        <Typography variant='body2'>{membership.price}</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary='Total' />
                    <Typography variant='subtitle1' className={classes.total}>
                        $99.99
                    </Typography>
                </ListItem>
            </List>
            <Typography variant='h6' gutterBottom>
                Payment method
            </Typography>
            {!success ? (
                <form onSubmit={handleSubmit}>
                    <CardElement hidePostalCode='false' />
                    <br />
                    <br />
                    <div>
                        <Button
                            fullwidth
                            type='submit'
                            variant='outlined'
                            disabled={!stripe}
                            className={classes.button}
                            style={{ width: '95%' }}
                        >
                            Pay
                        </Button>
                    </div>
                </form>
            ) : (
                <div>
                    <h2>
                        You just bought a membership. This is the best decision of you're
                        life
                    </h2>
                </div>
            )}
        </Fragment>
    );
};

export default PaymentForm;
