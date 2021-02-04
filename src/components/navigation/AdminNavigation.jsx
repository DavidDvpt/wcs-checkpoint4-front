import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { tokencheck } from '../../apiBack';

const AdminNavigation = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const admin = useSelector((state) => state.admin.admin);
  const token = useSelector((state) => state.admin.token);
  const [role, setRole] = useState('');

  const tokenVerifSucces = (results) => {
    console.log(admin, results);
    setRole(results.role);
  };

  useEffect(() => {
    if (token != null) {
      tokencheck(token).then((results) => tokenVerifSucces(results.data));
    }
  }, [token]);

  switch (role) {
    case 'Prospector':
    case 'Commercial':
    case 'Roi':
    default:
      return null;
  }
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Options
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Reset</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default AdminNavigation;
