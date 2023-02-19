import "./App.css";
import TvLinks from "./components/TvLinks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="bg-full">
            <TvLinks />
          </div>
        </Route>
        <Route path="/VideoPlayer">
          <div>
            <VideoPlayer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
