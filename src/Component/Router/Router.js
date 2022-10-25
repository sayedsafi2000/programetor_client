import { createBrowserRouter } from 'react-router-dom';
import PrivateRouter from '../../Private Router/PrivateRouter';
import CheckOut from '../CheckOut/CheckOut';
import Courses from '../Course/Courses';
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
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/course",
                element:<Courses></Courses>,
                loader:()=>fetch("http://localhost:5000/course")
            },
            {
                path:"/course/:id",
                element:<SingleCourse></SingleCourse>,
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path:"/checkout/:id",
                loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`),
                element:<PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
            },
            {
                path:"/purchase",
                element:<Purchase></Purchase>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
        ]
    }
])
