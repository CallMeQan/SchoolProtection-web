import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/ErrorPage";
import Class from "./pages/Class/Class";
import Student from "./pages/Student/Student";
import Teacher from "./pages/Teacher/Teacher";
import Setting from "./pages/Setting/Setting";
import DiemDanh from "./pages/CheckIn/DiemDanh";

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
        path: '/diemdanh',
        element: (<><NavBar/><DiemDanh/></>),
        errorElement: <ErrorPage/>
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
