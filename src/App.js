import "./App.css";
import TvLinks from "./components/TvLinks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <Router>
      <div className="bg-full">
        <Switch>
          <Route exact path="/">
            <TvLinks />
          </Route>
          <Route path="/VideoPlayer">
            <VideoPlayer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
