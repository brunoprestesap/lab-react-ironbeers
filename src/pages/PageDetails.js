import { useParams } from "react-router-dom";
import Header from "../components/Header";

function PageDetails({ beers }){

    const { beerId } = useParams();

    const beerDetail = beers.find((beer) => {
        return beer._id === beerId;
    });

    return (
        <div className="div-detail">
            <Header/>

            <div key={beerDetail._id} className="container-detail">
                <div className="container-img">
                    <img src={beerDetail.image_url} alt={beerDetail.name}/>
                </div>
                <div className="title">
                    <h1>{beerDetail.name}</h1>
                    <h2>{beerDetail.attenuation_level}</h2>
                </div>
                <div className="subtitle">
                    <h3>{beerDetail.tagline}</h3>
                    <h3>{beerDetail.first_brewed}</h3>
                </div>
                <div className="detail">
                    <p className="description">{beerDetail.description}</p>
                    <p className="contributed">{beerDetail.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}

export default PageDetails;