import { useHistory } from 'react-router-dom';
import { DropdownItem } from 'reactstrap';

const ProspectorNav = () => {
  const history = useHistory();
  return (
    <>
      {/* <DropdownItem>Ajouter Bien</DropdownItem> */}
      <DropdownItem
        onClick={() => {
          history.push('/prospector');
        }}
      >
        Prospect Royal
      </DropdownItem>
      <DropdownItem divider />
    </>
  );
};

export default ProspectorNav;
