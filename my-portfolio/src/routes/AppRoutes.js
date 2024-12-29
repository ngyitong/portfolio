import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import App from '../pages/App';
import ProjectsPage from '../pages/ProjectsPage';
import head from '../components/head'

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
    return <head currentPath={location.pathname} />;
};

export default AppRoutes;
