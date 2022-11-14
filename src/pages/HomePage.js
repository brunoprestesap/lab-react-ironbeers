import AllBeers from '../assets/beers.png';
import RandomBeer from '../assets/random-beer.png';
import NewBeer from '../assets/new-beer.png';
import { Link } from 'react-router-dom';

function HomePage(){
    return (
        <div>
            <div>
                <Link to={'/beers'}>
                    
                    <img src={AllBeers} alt="All Beers"/>
                    <h1>All Beers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus pellentesque cursus. Proin sed vestibulum nunc, vitae euismod mauris. In non fermentum arcu. Aliquam eget sodales turpis, nec consectetur dolor. Nunc nulla massa, faucibus sed enim ac, vestibulum aliquet tortor. Maecenas ac ipsum odio. Morbi congue eget diam sit amet aliquam. Donec et erat vitae nibh facilisis laoreet. Morbi in magna non risus faucibus porttitor a et libero.</p>
                
                </Link>
            </div>
            <div>
                <Link to={'/random-beer'}>
                    <img src={RandomBeer} alt="Random beer"/>
                    <h1>Random Beers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus pellentesque cursus. Proin sed vestibulum nunc, vitae euismod mauris. In non fermentum arcu. Aliquam eget sodales turpis, nec consectetur dolor. Nunc nulla massa, faucibus sed enim ac, vestibulum aliquet tortor. Maecenas ac ipsum odio. Morbi congue eget diam sit amet aliquam. Donec et erat vitae nibh facilisis laoreet. Morbi in magna non risus faucibus porttitor a et libero.</p>
                </Link>
            </div>
            <div>
                <img src={NewBeer} alt="New Beer"/>
                <h1>New Beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus pellentesque cursus. Proin sed vestibulum nunc, vitae euismod mauris. In non fermentum arcu. Aliquam eget sodales turpis, nec consectetur dolor. Nunc nulla massa, faucibus sed enim ac, vestibulum aliquet tortor. Maecenas ac ipsum odio. Morbi congue eget diam sit amet aliquam. Donec et erat vitae nibh facilisis laoreet. Morbi in magna non risus faucibus porttitor a et libero.</p>
            </div>
        </div>
    )
}

export default HomePage;