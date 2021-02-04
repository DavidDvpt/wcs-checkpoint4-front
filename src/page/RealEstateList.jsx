import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import CustomCard from '../components/CustomCard';

const RealEstateList = () => {
  const realEstates = useSelector((state) => state.realEstate.realEstateList);

  return (
    <>
      <h1>Mon Patrimoine</h1>
      <Container>
        {realEstates.map((f) => (
          <CustomCard
            key={f.imageName}
            id={f.id}
            child="realEstate"
            imageName={`chateaux/${f.imageName}`}
            subtitle={f.name}
          />
        ))}
      </Container>
    </>
  );
};

export default RealEstateList;
