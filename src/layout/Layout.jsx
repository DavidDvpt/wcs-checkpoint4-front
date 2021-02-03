import { Container } from "reactstrap";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children}) => {
  return (<>
<Navigation />
<Container className="mt-5">{children}</Container>
<Footer/>
</>)
}

export default Layout