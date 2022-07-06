import './App.css';
import { CourseFrom } from "../CourseForm/CourseFrom";
import { EntryForm } from '../EntryForm/EntryForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from '../../context/UserContext';
import { PhoneOTP } from '../PhoneOTP/PhoneOTP';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>

        <Routes>

          <Route path="/" element={<CourseFrom />} />
          <Route path="/phone-validation" element={<PhoneOTP/>} />

        </Routes>

      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
