import { useHistory } from "react-router-dom";
import { Button, Row } from "reactstrap";
import Caroussel from "../components/carousel/Caroussel";

const Home = () => {
  const history = useHistory();
  
  return (
    <>
    <Caroussel />
    <Row>
      <Button onClick={} >Map</Button>
      <Button >Famille royale</Button>
      <Button >Patrimoine</Button>
    </Row>
    </>
  );
}

export default Home;