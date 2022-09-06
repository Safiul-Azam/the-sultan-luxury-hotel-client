
import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setError(error.message || '')
    };

    return (
        <div className='w-full p-2'>
            <h2 className='my-2'>Credit Card</h2>
            <p className='my-4'>Safe money transfer using your bank account. Visa, Maestro, Discover, American Express</p>
            <form onSubmit={handleSubmit} className='p-10 border-2'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#ff5200',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe} className='mt-10 bg-[#222222] text-white rounded-lg border- px-5 py-1'>
                    Pay
                </button>
                {error && <p className='text-lg mt-3 text-red-500'>{error}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;