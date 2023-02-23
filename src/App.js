import "./App.css";
import TvLinks from "../src/components/TvLinks/TvLinks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPlayer from "../src/components/VideoPlayer/VideoPlayer";

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
