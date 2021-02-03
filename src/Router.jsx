import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Map from './page/Map';
import Layout from './layout/Layout';
import Home from './page/Home';
import FamilyList from './page/FamilyList';
import CastleList from './page/CastleList';
import Login from './page/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/map" component={Map} />
          <Route path="/login" component={Login} />
          <Route path="/family" component={FamilyList} />
          <Route path="/realState" component={CastleList} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
