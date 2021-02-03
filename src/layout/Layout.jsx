import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container className="mt-5">{children}</Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
