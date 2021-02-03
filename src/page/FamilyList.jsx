import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardImg, CardSubtitle, Container } from 'reactstrap';
import { getFamilyList } from '../apiBack';
import CustomCard from '../components/CustomCard';
import setFamilyList from '../store/family/actionCreator';

const FamilyList = () => {
  const [familys, setFamilys] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getFamilyList().then((results) => {
      setFamilys(results.data);
      dispatch(setFamilyList(results.data));
    });
  }, []);
  return (
    <>
      <h1>Famille royale</h1>
      <Container />
      {familys.map((f) => (
        <CustomCard
          imageName={f.imageName}
          subtitle={`${f.firstname} ${f.lastname}`}
        />
      ))}
      {familys.map((f) => (
        <Card key={f.firstname} className="row align">
          <CardImg
            className="w-25"
            src={`/static/media/${f.imageName}`}
            alt={f.lastname}
          />
          <CardSubtitle>{`${f.firstname} ${f.lastname}`}</CardSubtitle>
        </Card>
      ))}
    </>
  );
};

export default FamilyList;
