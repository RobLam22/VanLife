import { useEffect, useState } from 'react';

export function Vans() {
    const [vansData, setVansData] = useState(null);

    useEffect(() => {
        async function apiCall() {
            const response = await fetch('/api/vans');
            const data = await response.json();
            console.log(data);
            setVansData(data);
        }
        apiCall();
    }, []);

    return <h1>Vans page goes here</h1>;
}
