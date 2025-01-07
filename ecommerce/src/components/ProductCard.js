import { useState } from 'react';
import axios from 'axios';

export default function ProductCard({ name, price, image }) {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);
        try {
            const response = await axios.post('/api/checkout-session', {
                items: [{ name, price: Number(price.replace('R$', '').trim()), quantity: 1 }],
            });
            const { id } = response.data;
            window.location.href = `https://checkout.stripe.com/pay/${id}`;
        } catch (error) {
            console.error('Erro ao iniciar o checkout:', error.message);
            setLoading(false);
        }
    };

    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h3>{name}</h3>
            <p>{price}</p>
            <button onClick={handleCheckout} disabled={loading}>
                {loading ? 'Processando...' : 'Comprar'}
            </button>
        </div>
    );
}
