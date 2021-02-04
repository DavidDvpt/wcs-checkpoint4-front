import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import AdminNavigation from '../components/navigation/AdminNavigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Mon Royaume</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/family">Famille</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/realEstate">Chateaux</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/goldBook">Livre d&aposor</NavLink>
            </NavItem>
            <AdminNavigation />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
