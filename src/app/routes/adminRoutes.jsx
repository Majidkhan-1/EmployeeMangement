import { Settings } from "lucide-react";
import Department from "../../features/admin module/departments/ui/pages/Department";
import Document from "../../features/admin module/documnets/ui/pages/Document";
import Employee from "../../features/admin module/employees/ui/pages/Employee";
import Task from "../../features/admin module/tasks/ui/pages/Task";
import Chats from "../../features/chats/ui/pages/Chats";
import { Children } from "react";
import AddEmployee from "../../features/admin module/employees/ui/pages/AddEmployee";


export let adminRoutes = [
    {
        path:"/home/employee",
        element:<Employee/>,

    },
    {
        path:"/home/add-employee",
        element:<AddEmployee/>
    }   , 
    {
        path:"/home/department",
        element:<Department/>
    },
    {
        path:"/home/document",
        element:<Document/>
    },
    {
        path:"/home/task",
        element:<Task/>
    },
       

]