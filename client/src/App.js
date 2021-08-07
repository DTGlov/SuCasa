import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import house from "./assets/house.svg";

import * as ROUTES from "./constants/routes";
import Header from "./components/Header";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://sucasa-home.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

const HomePage = lazy(() => import('./Pages/HomePage'));
const ApartmentDetail = lazy(() => import('./Pages/ApartmentDetail'));
const LocationDetail = lazy(() => import('./Pages/LocationDetail'));

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <Suspense
            fallback={
              <div className="h-screen flex justify-center items-center">
                {/* <h1 className="animate-pulse text-5xl">Loading....</h1> */}
                <img src={house} alt="house svg" className="animate-pulse h-20"  />
              </div>
            }
          >
            <Header />
            <Switch>
              <Route exact path={ROUTES.HOMEPAGE}>
                <HomePage />
              </Route>
              <Route path={ROUTES.APARTMENT_DETAIL}>
                <ApartmentDetail />
              </Route>
              <Route path={ROUTES.LOCATION_DETAIL}>
               <LocationDetail/>
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
