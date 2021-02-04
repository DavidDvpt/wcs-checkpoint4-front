import { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const FamilyDetail = () => {
  const [person, setPerson] = useState();
  const { id } = useParams();
  const familys = useSelector((state) => state.family.familyList);

  useEffect(() => {
    setPerson(familys.filter((f) => f.id === parseInt(id, 10))[0]);
  }, [familys]);

  return (
    <>
      {person ? (
        <Card key={person.lastname} className="row align">
          <CardImg
            className="w-75 m-auto"
            src={`/static/media/${person.imageName}`}
            alt={person.lastname}
          />
          <CardBody>
            <CardTitle tag="h2">
              {`${person.lastname} ${person.firstname}`}
            </CardTitle>
            <CardTitle tag="h4">{`${person.kingdomRole}`}</CardTitle>
            <CardTitle>{`Résidence : ${person.realEstate.name}`}</CardTitle>

            <CardText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              esse nesciunt fugiat veniam iure, libero laborum sed eligendi!
              Ducimus, eaque quam! Saepe dolorum eos facilis cupiditate quasi
              nesciunt repellat quo?
            </CardText>
          </CardBody>
        </Card>
      ) : (
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      )}
    </>
  );
};

export default FamilyDetail;
