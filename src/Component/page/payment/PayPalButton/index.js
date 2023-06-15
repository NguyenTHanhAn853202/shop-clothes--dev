import { PayPalButtons } from '@paypal/react-paypal-js';
import { useEffect, useMemo, useRef, useState } from 'react';

function PaypalButton({ products, typePayment }) {
    const [isAfter, setIsAfter] = useState(false);
    const [price, description] = useMemo(() => {
        return products.reduce(
            (first, item, index) => {
                return [first[0] + item.price * item.number, `${first[1]} ${item.idProduct.name} - ${item.color},`];
            },
            [0, ''],
        );
    }, [JSON.stringify(products)]);

    useEffect(() => {
        if (isAfter) {
            console.log('change: ');
            typePayment('after');
        }
        console.log('change: ' + isAfter);

        setIsAfter(true);
    }, [price]);

    const create = (data, actions) => {
        const _price = price;
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: _price,
                    },
                    description: description,
                },
            ],
        });
    };

    return (
        <PayPalButtons
            style={{
                color: 'silver',
                shape: 'pill',
                tagline: false,
                width: 200,
                height: 45,
                layout: 'horizontal',
            }}
            createOrder={(data, actions) => {
                return create(data, actions);
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                    console.log('successfully');
                    console.log(details);
                });
            }}
            onError={(error) => {
                // Xử lý lỗi trong quá trình thanh toán
                console.log('Có lỗi xảy ra trong quá trình thanh toán PayPal.');
                console.log(error);
            }}
        />
    );
}

export default PaypalButton;
