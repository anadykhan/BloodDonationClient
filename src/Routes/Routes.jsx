import { createBrowserRouter } from "react-router-dom";
import Registration from "../components/Registration/Registration";
import Root from "../components/Root/Root";
import Login from "../components/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            },
            {
                path: '/dashboard/profile',
                element: <Profile></Profile>
            }
        ]
    },
])

export default router