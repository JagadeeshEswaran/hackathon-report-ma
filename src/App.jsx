// import 'bootstrap/dist/css/bootstrap.min.css';
// import GoalProgressForm from './client/Component/Goals/index'
// import Navbar from './client/Component/Navigation';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Profile from './client/Component/patient/patientForm';
// import PatienList from './client/Component/patient/patienListView';
// function App() {


//   return (
//     <Router>
//       <Navbar />
//       <div className="w-100 h-100 mt-5">
//         <Routes>
//           <Route path="/dashboard" element={() => { <>add your component</> }} />
//           <Route path="/goals" element={<GoalProgressForm />} />
//           <Route path="/trackgoals" element={() => { <>add your component</> }} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/patient" element={<PatienList />} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }

// export default App


import 'bootstrap/dist/css/bootstrap.min.css';
import GoalProgressForm from './client/Component/Goals/index';
import Navbar from './client/Component/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './client/Component/patient/patientForm';
import PatienList from './client/Component/patient/patienListView';

function App() {
  return (
    <Router>
      <Navbar />

      <div
        style={{
          marginTop: '70px',
          height: 'calc(100vh - 70px)',
          width: '100%',
          padding: '1rem',
          boxSizing: 'border-box',
        }}
      >
        <Routes>
          <Route path="/dashboard" element={<div>add your component</div>} />
          <Route path="/goals" element={<GoalProgressForm />} />
          <Route path="/trackgoals" element={<div>add your component</div>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/patient" element={<PatienList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
