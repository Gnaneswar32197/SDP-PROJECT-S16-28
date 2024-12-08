// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminHome from './components/AdminHome';
import UserHome from './components/UserHome';
import Team from './components/Team';

import FacultyHome from './components/FacultyHome';
import ForgotPassword from './components/ForgotPassword'; // Import ForgotPassword component
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import UserProfile from './components/UserProfile';
import ResourceDetail from "./components/ResourceDetail";
import Welcome from './components/Welcome';
import ProvideFeedback from './components/ProvideFeedback';
import BorrowBookPage from "./components/BorrowBookPage";
import BorrowBooksPage from './components/BorrowBooksPage';
import ReadBook from "./components/ReadBook";
import MyBooks from './components/MyBooks';
import BuyBooks from './components/BuyBooks';
import PurchaseConfirmation from './components/PurchaseConfirmation'; // Ensure this component is correctly imported
import BuyReadBook from "./components/BuyReadBook";
import TextbooksPage from './components/TextbooksPage';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin-home" element={<AdminHome />} />
                <Route path="/user-home" element={<UserHome />} />
                <Route path="/resource/:id" element={<ResourceDetail />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/faculty-home" element={<FacultyHome />} />
                <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add ForgotPassword route */}
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/provide-feedback" element={<ProvideFeedback />} />
                <Route path="/team" element={<Team />} />
                <Route path="/borrow/:id" element={<BorrowBookPage />} />
                <Route path="/borrow-books" element={<BorrowBooksPage />} />
                <Route path="/read-book/:id" element={<ReadBook />} />
                <Route path="/buy-books" element={<BuyBooks />} />
                <Route path="/purchase-confirmation" element={<PurchaseConfirmation />} /> {/* Purchase Confirmation Page */}
                <Route path="/buy-read-book/:id" element={<BuyReadBook />} />
                <Route path="/my-books" element={<MyBooks />} />
                <Route path="/textbooks" element={<TextbooksPage />} />
                
            </Routes>
        </Router>
    );
}

export default App;
