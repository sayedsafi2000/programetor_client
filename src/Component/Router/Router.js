import { createBrowserRouter } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';
import Courses from '../Course/Courses';
import Home from '../Hero/Home';
import Main from '../Main/Main';
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
            },{
                path:"/checkout/:id",
                loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`),
                element:<CheckOut></CheckOut>,
                
            }
        ]
    }
])
