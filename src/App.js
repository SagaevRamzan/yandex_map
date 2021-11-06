import Header from "./Head/Header";
import Footer from "./Footer/Footer";
import Home from "./Home";
import Features from "./Features";
import Contacts from "./Contacts";
import {Route, Redirect, Switch, NavLink} from "react-router-dom";
import Yandex_map from "./Yandex_map";
import NotFound from "./NotFound";
function App() {
  return (
    <div >
        <div>
          <Header/>
            <NavLink to="" >

            </NavLink>
            <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/features">
                  <Features/>
              </Route>
              <Route path="/contacts">
                  <Contacts/>
              </Route>
              <Route path="/yandex_map" >
                    <Yandex_map/>
              </Route>
              <Route>
                    <NotFound/>
              </Route>
            </Switch>
        </div>
     <div className="footer">
         <Footer/></div>
    </div>
  );
}

export default App;
