import { createBrowserRouter } from "react-router-dom";
import Maiin from "../../layout/Maiin";
import Blog from "../../pages/blog/blog/Blog";
import Btndark from "../../pages/btn/btn/Btndark";
import Category from "../../pages/category/category/Category";
import Check from "../../pages/check/check/Check";
import Checkout from "../../pages/checkout/checkout/Checkout";
import Course from "../../pages/course/course/Course";
import Faq from "../../pages/faq/faq/Faq";
import Home from "../../pages/home/home/Home";
import Login from "../../pages/login/login/Login";
import Register from "../../pages/login/register/Register";
import Privets from "../Privets/Privets";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Maiin></Maiin>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            // {
            //     path: '/categories/:id',
            //     element:<Course></Course>,
            //     loader: ({params}) => fetch(`https://server-mu-wine.vercel.app/course/${params.id}`)
            
            // },
            {
                path: '/categories/:id',
                element: <Privets><Category></Category></Privets>,
                loader: ({params}) => fetch(`https://server-mu-wine.vercel.app/categories/${params.id}`)
            
            },
            {
                path:'/checke/:id',
                element:<Check></Check>,
                loader: ({params}) => fetch(`https://server-mu-wine.vercel.app/checke/${params.id}`)

            },
            {
                path:'/course',
                element: <Course></Course>
                
            },
            {
                path:'/check',
                element:<Checkout></Checkout>,
                loader:() =>fetch('https://server-mu-wine.vercel.app/allcourse')

            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/btn',
                element:<Btndark></Btndark>
            }

        ]
    },
    {
        path:'*',
        element:<div><h1>This is not Rout. It is 404 Page</h1></div>
    }
])