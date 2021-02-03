import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from "./layout/Layout"
import Home from './page/Home';

const Router = () => {
  return (  
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
  )
}

export default Router