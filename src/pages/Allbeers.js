import Header from "../components/Header";
import Cardbeer from "../components/Cardbeer";

function Allbeers({ beers }) {
  return (
    <div>
      <Header />
      
      <Cardbeer beers={beers}/>
    </div>
  );
}

export default Allbeers;
