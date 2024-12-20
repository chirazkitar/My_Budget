import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExpensesForm from './Components/Expenses/ExpensesForm';
import AddCategory from './Components/Expenses/AddCategory';
import SignUp from "./Components/SignUp";
import Login from './Components/LogIn';
import SideBar from './Components/SideBar';
import Home from './Components/Home';
import Settings from './Components/settings';
import Profile from './Components/Profile';
//import ViewExpensesModal from './Components/ViewExpensesModal';
function App() {
  const [categories, setCategories] = useState(['Food', 'Transport', 'Entertainment']);



  return (
    <Router>
      <Routes>
        {/* Default Route: Sign Up */}
        {/*<Route path="/expenses" element={<ViewExpensesModal/>} />*/}
        <Route path="/expenses-form" element={<ExpensesForm categories={categories} setCategories={setCategories} />} />
       <Route path="/add-category" element={<AddCategory categories={categories} setCategories={setCategories} />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
