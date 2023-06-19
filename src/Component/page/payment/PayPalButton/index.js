import { PayPalButtons } from '@paypal/react-paypal-js';
import { useEffect, useMemo, useState } from 'react';
import { banking } from '~/api-server/payment';
import NotifyContainer, { notify } from '~/utils/notification';

function PaypalButton({ products, typePayment }) {
    const [isAfter, setIsAfter] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
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
            typePayment('after');
        }
        setIsAfter(true);
    }, [price]);

    const create = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: price,
                    },
                    description: description,
                },
            ],
        });
    };

    return (
        <>
            <NotifyContainer />

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
                    return actions.order.capture().then(async (details) => {
                        const success = await banking(products);
                        if (success) {
                            notify('success', 'Thanh toán thành công');
                        } else {
                            notify('warning', 'Đã xãy ra lỗi! Vui lòng kiểm tra lại');
                        }
                    });
                }}
                onError={(error) => {
                    // Xử lý lỗi trong quá trình thanh toán
                    notify('error', 'Thanh toán không thành công');
                    console.log('payment error');
                }}
            />
        </>
    );
}

export default PaypalButton;
