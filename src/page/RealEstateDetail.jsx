import { useParams } from 'react-router-dom';

const realEstateDetail = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default FamilyDetail;
