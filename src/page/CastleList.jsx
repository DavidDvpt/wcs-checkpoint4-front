import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import CustomCard from '../components/CustomCard';

const CastleList = () => {
  const realEstates = useSelector((state) => state.realEstate.realEstateList);

  return (
    <>
      <h1>Mon Patrimoine</h1>
      <Container>
        {realEstates.map((f) => (
          <CustomCard imageName={`chateaux/${f.imageName}`} subtitle={f.name} />
        ))}
      </Container>
    </>
  );
};

export default CastleList;
