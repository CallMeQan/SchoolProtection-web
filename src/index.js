import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/ErrorPage";
import Class from "./pages/ListOfSomething/Class/Class";
import Student from "./pages/ListOfSomething/Student/Student";
import Teacher from "./pages/ListOfSomething/Teacher/Teacher";
import Gate from "./pages/ListOfSomething/Gate/Gate";
import Setting from "./pages/Setting/Setting";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/lophoc',
        element: (<><NavBar/><Class/></>),
        errorElement: <ErrorPage/>
    },
    {
        path: '/hocsinh',
        element: (<><NavBar/><Student/></>),
        errorElement: <ErrorPage/>
    },
    {
        path: '/giaovien',
        element: (<><NavBar/><Teacher/></>),
        errorElement: <ErrorPage/>
    },
    {
        path: "/setting",
        element: (<><NavBar/><Setting/></>),
        errorElement: <ErrorPage/>
    },
    {
        path: '/congravao',
        element: (<><NavBar/><Gate/></>),
        errorElement: <ErrorPage/>
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
