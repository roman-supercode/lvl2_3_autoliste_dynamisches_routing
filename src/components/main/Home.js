import { Link } from "react-router-dom";
import Data from "../../Data";

function Home() {
    return (
        <section className="grid">
            {[...Data].map((item, index) => {
                return (
                    <div className="grid-item" key={index}>
                        <h2>{item.CarMake}</h2>
                        <Link to={`/info/${index}`} className="button">Read more</Link>
                    </div>
                );
            })}
        </section>
    );
}

export default Home;