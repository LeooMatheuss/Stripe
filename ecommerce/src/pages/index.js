import ProductCard from '../components/ProductCard';

export default function Home() {
    const products = [
        { name: 'Produto A', price: 'R$ 100', image: '/product-a.jpg' },
        { name: 'Produto B', price: 'R$ 200', image: '/product-b.jpg' },
    ];

    return (
        <div>
            <header>
                <h1>Minha Loja Online</h1>
            </header>
            <main>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </main>
        </div>
    );
}
