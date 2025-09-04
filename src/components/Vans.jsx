import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Vans() {
    const [vansData, setVansData] = useState([]);

    useEffect(() => {
        async function apiCall() {
            const response = await fetch('/api/vans');
            const data = await response.json();
            setVansData(data.vans);
        }
        apiCall();
    }, []);

    const vansArr = vansData.map((van) => (
        <div className="van-card" key={van.name}>
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt={van.name} className="van-image" />
                <div className="van-info">
                    <h3 className="van-name">{van.name}</h3>
                    <p className="van-price">
                        ${van.price} <span>/day</span>
                    </p>
                </div>
                <span className="van-tag">{van.type}</span>
            </Link>
        </div>
    ));

    return (
        <>
            <section>
                <h1>Explore our van options</h1>
                <button>Simple</button>
                <button>Luxury</button>
                <button>Rugged</button>
            </section>
            <div className="van-grid">{vansArr}</div>
        </>
    );
}
