import { useHistory } from 'react-router-dom';
import { DropdownItem } from 'reactstrap';

const CommercialNav = () => {
  const history = useHistory();

  return (
    <>
      <DropdownItem
        onClick={() => {
          history.push('/commercial');
        }}
      >
        Commerce Royal
      </DropdownItem>
      <DropdownItem divider />
    </>
  );
};

export default CommercialNav;
