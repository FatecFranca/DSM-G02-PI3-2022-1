import { Switch, Route } from "react-router"
import Dashboard from "../pages/Dashboard"
import GroupQ from "../pages/GroupQuestion"
import Home from "../pages/Home"
import NovaAvaliacao from "../pages/NovaAvaliacao"
import Questoes from "../pages/Questoes"

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/dashboard'>
        <Dashboard />
      </Route>

      <Route exact path='/nova-avaliacao'>
        <NovaAvaliacao />
      </Route>

      <Route exact path='/groupquestion'>
        <GroupQ />
      </Route>

      <Route exact path='/questao'>
        <Questoes />
      </Route>

    </Switch>
  )
}

export default Routes