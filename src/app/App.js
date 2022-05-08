import React, { lazy } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { CustomThemeProvider } from "../components/theme/CustomThemeProvider";
import { CssBaseline } from "@mui/material";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";

const Resume = lazy(() => import("../pages/Resume"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {
    logCredits();

    return (
        <CustomThemeProvider>
            <CssBaseline />
            <Router>
                <HelmetMeta />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/resume" component={Resume} />
                    <Route path="*" component={PageNotFound} />
                </Routes>
            </Router>
        </CustomThemeProvider>
    );
};
