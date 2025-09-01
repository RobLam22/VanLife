import { Link } from 'react-router-dom';

export function About() {
    return (
        <>
            <img src="src/assets/about.png" alt="van" className="about-img" />
            <div className="about">
                <section>
                    <h1>
                        Don’t squeeze in a sedan when you could relax in a van.
                    </h1>
                    <p>
                        Our mission is to enliven your road trip with the
                        perfect travel van rental. Our vans are recertified
                        before each trip to ensure your travel plans can go off
                        without a hitch. (Hitch costs extra 😉)
                    </p>
                    <p>
                        Our team is full of vanlife enthusiasts who know
                        firsthand the magic of touring the world on 4 wheels.
                    </p>
                </section>
                <div className="action-div">
                    <p>Your destination is waiting.</p>
                    <p>Your van is ready.</p>
                    <button>Explore our vans</button>
                    {/* change to links */}
                </div>
            </div>
        </>
    );
}
