import { createBrowserRouter } from "react-router-dom";
import ForgotPass from "../pages/ForgotPass/ForgotPass";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import NewsPost from "../pages/NewsPost/NewsPost";
import Register from "../pages/Register/Register";
import UpdatePost from "../pages/UpdatePost/UpdatePost";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/forgetPass',
                element: <ForgotPass></ForgotPass>
            },
            {
                path:'/newsPost',
                element: <NewsPost></NewsPost>
            },
            {
                path:'/updatePost/:id',
                element: <UpdatePost></UpdatePost>,
                loader: ({params}) => fetch(`http://localhost:5000/updatePost/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
        ]
    }
])
