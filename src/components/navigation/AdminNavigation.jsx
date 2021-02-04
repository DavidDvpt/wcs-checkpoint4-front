import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { tokencheck } from '../../apiBack';
import { logoutAction } from '../../store/admin/actionCreator';
import CommercialNav from './CommercialNav';
import ProspectorNav from './ProspectorNav';
import RoiNav from './RoiNav';

function adminOptions(role) {
  switch (role) {
    case 'Prospector':
      return <ProspectorNav />;
    case 'Commercial':
      return <CommercialNav />;
    case 'Roi':
      return <RoiNav />;
    default:
      return null;
  }
}

const AdminNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const admin = useSelector((state) => state.admin.admin);
  const token = useSelector((state) => state.admin.token);
  const dispatch = useDispatch();
  const [role, setRole] = useState('');

  const tokenVerifSucces = (results) => {
    console.log(admin, results);
    setIsVisible(true);
    setRole(results.role);
  };

  const disconnect = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    dispatch(logoutAction());
    setRole('');
    setIsVisible(false);
  };

  useEffect(() => {
    if (token != null) {
      tokencheck(token).then((results) => tokenVerifSucces(results.data));
    }
  }, [token]);

  return (
    <>
      {isVisible ? (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            {role}
          </DropdownToggle>
          <DropdownMenu right>
            {adminOptions(role)}
            <DropdownItem onClick={disconnect}>Déconnexion</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ) : (
        ''
      )}
    </>
  );
};

export default AdminNavigation;
