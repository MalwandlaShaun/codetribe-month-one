import LogIn from "./pages/signin"
import './App.css';
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup";
import TodoList from "./shopify/App";

function App() {
  return (
    
    <>
    <Routes>
      <Route path="/" element={<LogIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/todo-list" element={<TodoList />} />
    </Routes>
    
    </>

  );
}

export default App;
