import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Exam } from './app/components/Exam';
import { Result } from './app/components/Result';
import StartExam from './app/components/StartExam';

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
