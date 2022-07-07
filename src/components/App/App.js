import './App.css';
import { CourseFrom } from "../CourseForm/CourseFrom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from '../../context/UserContext';
import { PhoneOTP } from '../PhoneOTP/PhoneOTP';
import StudentsTable from '../StudentsTable/StudentsTable';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>

        <Routes>

          <Route path="/" element={<CourseFrom />} />
          <Route path="/phone-validation" element={<PhoneOTP/>} />
          <Route path="/studetns-table" element={<StudentsTable/>}/>

        </Routes>

      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
