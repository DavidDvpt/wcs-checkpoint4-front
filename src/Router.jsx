import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Map from './page/Map';
import Layout from './layout/Layout';
import Home from './page/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/map" component={Map} />
          <Route path="/family" component={FamilyList} />
          <Route path="/realState" component={CastleList} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
