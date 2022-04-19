import React from 'react'
import GlobalStyle from './styles/GlobalStyles'
import { Home, AboutUs, Contacts, PageNotFound } from './pages'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const Routes = () => {
    return (
      <>
        <GlobalStyle/>
        <Router>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/sobre-nos" component={AboutUs} />
              <Route path="/contactos" component={Contacts} />
              <Route path="/*" component={PageNotFound} />
            </Switch>
        </Router>
      </>
    );
  };
  
  export default Routes;