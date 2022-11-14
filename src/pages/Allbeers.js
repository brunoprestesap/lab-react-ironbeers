import { Link } from "react-router-dom";
import Header from "../components/Header";

function Allbeers({beers}){
    

    return (
        <div>
            <Header/>

            {beers.map((beer) => {
                return (
                    <Link to={`/beers/${beer._id}`}>
                        <div key={beer._id} className="divBeer">
                            <div className="divImg">
                                <img src={beer.image_url} alt={beers.name} className="imgBeer"/>
                            </div>
                            <div className="divDetail">
                                <h1>{beer.name}</h1>
                                <h3>{beer.tagline}</h3>
                                <p>Created by: {beer.contributed_by}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}

        </div>
    )
}

export default Allbeers;