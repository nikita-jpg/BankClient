import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserPage from "./pages/UserPage/UserPage";
import AdminPage from './pages/AdminPage/AdminPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/BankClient" element={<UserPage/>} />
      <Route path="/admin" element={<AdminPage/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
