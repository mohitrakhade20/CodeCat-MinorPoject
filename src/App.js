import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
// import Test from './components/quiz/Test';
// import SignIn from './components/Registration/SignIn';
import SignUp from './components/Registration/SignUp';
import Sign from './components/Registration/Sign';
import Reg from './components/Registration/Reg';
// import FileUpload from './components/quiz/FileUpload';
import Subjective from './components/quiz/Subjective';
import EndTest from './components/quiz/EndTest';
import AdminAddQuestion from './components/admin/AdminAddQuestion';

function App() {
  return (
    <Router>
      <Route path="/login" exact component={Sign}/>
      <Route path="/register" exact component={Reg}/>
      <Route path="/endTest" exact component={EndTest}/>
      <Route path="/ct" exact component={Subjective}/>
      <Route path="/admin/add" exact component={AdminAddQuestion}/>
      {/* <Route path="/uploadAns" exact component={FileUpload}/> */}
      <Route path="/play/instructions" exact component={QuizInstructions} />
      <Route path="/play/quiz" exact component={Play} />
      <Route path="/play/quizSummary" exact component={QuizSummary} />
      <Route path="/" exact component={Home}/>
      {/* <Route path="/test" exact component={SignIn}/> */}
    </Router>
  );
}

export default App;