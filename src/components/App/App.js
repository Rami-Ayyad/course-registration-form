import './App.css';
import { CourseFrom } from "../CourseForm/CourseFrom";
import { EntryForm } from '../EntryForm/EntryForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryForm />} />
        <Route path="/course-from" element={<CourseFrom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
