import { createBrowserRouter } from 'react-router-dom';
import PrivateRouter from '../../Private Router/PrivateRouter';
import CheckOut from '../CheckOut/CheckOut';
import Courses from '../Course/Courses';
import Error404 from '../ErrorHandle/Error404';
import Home from '../Hero/Home';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Purchase from '../Purchase/Purchase';
import Register from '../Register/Register';
import SingleCourse from '../SingleCourse/SingleCourse';
export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<Error404></Error404>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/course",
                element:<Courses></Courses>,
                errorElement:<Error404></Error404>,
                loader:()=>fetch("http://localhost:5000/course")
            },
            {
                path:"/course/:id",
                element:<SingleCourse></SingleCourse>,
                errorElement:<Error404></Error404>,
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path:"/checkout/:id",
                loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`),
                element:<PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
                errorElement:<Error404></Error404>,
            },
            {
                path:"/purchase",
                element:<Purchase></Purchase>,
                errorElement:<Error404></Error404>,
            },
            {
                path:"/login",
                element:<Login></Login>,
                errorElement:<Error404></Error404>,
            },
            {
                path:"/register",
                element:<Register></Register>,
                errorElement:<Error404></Error404>,
            },
        ]
    },
])
