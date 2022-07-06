import './App.css';
import { CourseFrom } from "../CourseForm/CourseFrom";
import { EntryForm } from '../EntryForm/EntryForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from '../../context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>

        <Routes>

          <Route path="/" element={<EntryForm />} />
          <Route path="/course-from" element={<CourseFrom />} />

        </Routes>

      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
