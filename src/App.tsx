import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StartExam } from './app/components/StartExam';
import { Exam } from './app/components/Exam';
import { Result } from './app/components/Result';

function App() {
  return (
   <Router>
     <Switch>
        <Route path="/exam">
          <Exam/>
        </Route>

        <Route path="/result">
            <Result/>
        </Route>

        <Route path="/">
          <StartExam />
        </Route>

     </Switch>
   </Router>
  );
}

export default App;
