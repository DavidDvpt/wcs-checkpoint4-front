import { useHistory } from 'react-router-dom';
import { Row } from 'reactstrap';
import Caroussel from '../components/carousel/Caroussel';

const Home = () => {
  const history = useHistory();

  return (
    <>
      <Caroussel />
      <Row className="justify-content-between mt-3">
        <button
          type="button"
          className="col-xs-12 col-sm-3 m-1 btn btn-primary"
          onClick={() => {
            history.push('/map');
          }}
        >
          Map
        </button>
        <button
          type="button"
          className="col-xs-12 col-sm-3 m-1 btn btn-primary"
          onClick={() => {
            history.push('/family');
          }}
        >
          Famille royale
        </button>
        <button
          type="button"
          className="col-xs-12 col-sm-3 m-1 btn btn-primary"
          onClick={() => {
            history.push('/realEstate');
          }}
        >
          Patrimoine
        </button>
      </Row>
    </>
  );
};

export default Home;
