import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import App from '../App';
import ProjectsPage from '../pages/ProjectsPage';
import Head from '../components/NavBar'

const AppRoutes = () => {
    <Router>
        <NavBarWrapper />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
    </Router>
};

const NavBarWrapper = () => {
    const location = useLocation();
    return <Head currentPath={location.pathname} />;
};

export default AppRoutes;
