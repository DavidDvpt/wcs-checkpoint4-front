import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Map from './page/Map';
import Layout from './layout/Layout';
import Home from './page/Home';
import FamilyList from './page/FamilyList';
import Login from './page/Login';
import FamilyDetail from './page/FamilyDetail';
import realEstateDetail from './page/RealEstateDetail';
import Reservation from './page/Reservation';
import AdminCommercial from './page/AdminCommercial';
import RealEstateList from './page/RealEstateList';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/map" component={Map} />
          <Route path="/login" component={Login} />
          <Route path="/family" component={FamilyList} />
          <Route path="/familyDetail/:id" component={FamilyDetail} />
          <Route path="/realEstate" component={RealEstateList} />
          <Route path="/commercial" component={AdminCommercial} />
          <Route path="/realEstateDetail/:id" component={realEstateDetail} />
          <Route path="/reservation/:id/:name" component={Reservation} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
