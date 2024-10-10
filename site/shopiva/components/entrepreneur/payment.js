export default function handlePaystackPayment(config,onSuccess,onClose) {
    import('react-paystack').then(({ usePaystackPayment }) => {
        console.log(config)
        usePaystackPayment(config)(onSuccess, onClose);
    });
}