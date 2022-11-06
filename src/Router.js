import { createBrowserRouter } from "react-router-dom";
import February from "./Month/February";
import January from "./Month/January";
import Root from './Root';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'',
                element:<January/>
            },
            {
                path:'Feb',
                element:<February/>
            }
        ]
    }
])

export default router;