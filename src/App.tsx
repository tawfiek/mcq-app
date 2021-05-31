import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Exam  from './app/components/Exam';
import { Result } from './app/components/Result';
import StartExam from './app/components/StartExam';
import { Container, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="#000000" >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="./quiz-logo.png"
              width="99"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
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
    </div>

  );
}

export default App;
