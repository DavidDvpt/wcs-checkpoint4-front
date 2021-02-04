import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'reactstrap';
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
          key={f.imageName}
          id={f.id}
          child="Family"
          imageName={f.imageName}
          subtitle={`${f.firstname} ${f.lastname}`}
        />
      ))}
    </>
  );
};

export default FamilyList;
