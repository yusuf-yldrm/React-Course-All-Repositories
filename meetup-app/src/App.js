import {Route, Switch} from "react-router-dom"
import Layout from "./components/ui/Layout"
import AllMeetupsPage from "./pages/AllMeetups"
import FavoritesPage from "./pages/Favorites"
import NewMeetupsPage from "./pages/NewMeeetup"


function App() {
    return(
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage/>
          </Route>
          <Route path="/new-meetup">
            <NewMeetupsPage />
          </Route>
        </Switch>
      </Layout>
    )
}

export default App;
