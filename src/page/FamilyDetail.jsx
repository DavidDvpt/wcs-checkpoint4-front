import { useParams } from 'react-router-dom';

const FamilyDetail = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default FamilyDetail;
