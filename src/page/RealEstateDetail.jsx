import { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const realEstateDetail = () => {
  const [castle, setCastle] = useState();
  const { id } = useParams();
  const castles = useSelector((state) => state.realEstate.realEstateList);
  const history = useHistory();

  useEffect(() => {
    setCastle(castles.filter((f) => f.id === parseInt(id, 10))[0]);
  }, [castles]);

  return (
    <>
      {castle ? (
        <>
          <Card key={castle.name} className="row align">
            <CardImg
              className="w-75 m-auto"
              src={`/static/media/chateaux/${castle.imageName}`}
              alt={castle.name}
            />
            <CardBody>
              <CardTitle tag="h2">{`${castle.name}`}</CardTitle>
              <CardText>
                <h5 className="font-weight-bold">Résidents :</h5>
                {castle.family.map((f) => `${f.lastname} ${f.firstname}, `)}
              </CardText>
              <CardText>
                <h5 className="font-weight-bold">Description :</h5>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                esse nesciunt fugiat veniam iure, libero laborum sed eligendi!
                Ducimus, eaque quam! Saepe dolorum eos facilis cupiditate quasi
                nesciunt repellat quo?
              </CardText>
              <button
                type="button"
                className="btn btn-primary w-50 m-auto d-block"
                onClick={() => {
                  history.push(`/reservation/${id}/${castle.name}`);
                }}
              >
                Visiter
              </button>
            </CardBody>
          </Card>
        </>
      ) : (
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      )}
    </>
  );
};

export default realEstateDetail;
