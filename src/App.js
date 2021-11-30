import Login from "./components/Login"
import Register from "./components/Register";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Recover from "./components/Recover";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/recover">
                    <Recover/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
