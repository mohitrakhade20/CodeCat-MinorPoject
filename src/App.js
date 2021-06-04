import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
import SignIn from './components/Registration/SignIn';
import SignUp from './components/Registration/SignUp';
import Sign from './components/Registration/Sign';
import Reg from './components/Registration/Reg';

function App() {
  return (
    <Router>
      <Route path="/login" exact component={Sign}/>
      <Route path="/register" exact component={Reg}/>
      {/* <Route path="/register" exact component={SignUp}/> */}
      <Route path="/play/instructions" exact component={QuizInstructions} />
      <Route path="/play/quiz" exact component={Play} />
      <Route path="/play/quizSummary" exact component={QuizSummary} />
      <Route path="/" exact component={Home}/>
      <Route path="/test" exact component={SignIn}/>
    </Router>
  );
}

export default App;