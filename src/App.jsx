import './App.css'

import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import TodayPage from "./pages/TodayPage/TodayPage.jsx";
import PlannerPage from "./pages/PlannerPage/PlannerPage.jsx";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.jsx";
import StatsPage from "./pages/StatsPage/StatsPage.jsx";
import SettingsPage from "./pages/SettingsPage/SettingsPage.jsx";
import Layout from "./components/layout/Layout/Layout.jsx";

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthPage />} />

                <Route element={<Layout />}>
                    <Route path="/today" element={<TodayPage />} />
                    <Route path="/planner" element={<PlannerPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/stats" element={<StatsPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
