import { useHistory } from 'react-router-dom';
import { Button, Row } from 'reactstrap';
import Caroussel from '../components/carousel/Caroussel';

const Home = () => {
  const history = useHistory();

  return (
    <>
      <Caroussel />
      <Row className="justify-content-between">
        <Button
          className="col-xs-12 col-sm-3 m-1"
          onClick={() => {
            history.push('/map');
          }}
        >
          Map
        </Button>
        <Button
          className="col-xs-12 col-sm-3 m-1"
          onClick={() => {
            history.push('/family');
          }}
        >
          Famille royale
        </Button>
        <Button
          className="col-xs-12 col-sm-3 m-1"
          onClick={() => {
            history.push('/realEstate');
          }}
        >
          Patrimoine
        </Button>
      </Row>
    </>
  );
};

export default Home;
