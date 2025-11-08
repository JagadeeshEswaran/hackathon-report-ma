import 'bootstrap/dist/css/bootstrap.min.css';
import GoalProgressForm from './client/Component/Goals/index';
import SignUp from './client/Component/Signup/signup';
import Navbar from './client/Component/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {


  return (
    <Router>
    <Navbar/>
    <div className="container mt-5">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/dashboard" element={()=>{<>add your component</>}} />
          <Route path="/goals" element={<GoalProgressForm />} />
          <Route path="/trackgoals" element={()=>{<>add your component</>}} />
          <Route path="/profile" element={()=>{<>add your component</>}} />
        </Routes>
      </div>
    </Router>
  )
}

export default App



