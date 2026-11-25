import { Building, ChartArea, File, LayoutDashboardIcon, List, PersonStanding, Presentation, Settings } from "lucide-react";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyTask from "../../features/employee module/MyTask/ui/pages/MyTask";
import { Profiler } from "react";

export let employeeNavigations = [
    {
        path:"/home",
        title:"DashboardLayout",
        icon:<LayoutDashboardIcon/>
    },
    {
        path:"/home/myTask",
        title:"MyTask",
        icon:<List/>
    },
    {
        path:"/home/chats",
        title:"chats",
        icon:<ChartArea/>
    },
 
    {
        path:"/home/attendence",
        title:"Attendence",
        icon:<Presentation/>        
    },
    {
        path:"/home/profile",
        title:"Profile",
        icon:<Profiler/>
    },
    {
        path:"/home/setting",
        title:"Settings",
        icon:<Settings/>
    }
   
]

export let adminNavigations = [
    {
        path:"/home",
        title:"DashboardLayout",
        icon:<LayoutDashboardIcon/>
    },
    {
        path:"/home/task",
        title:"Task",
        icon:<List/>
    },
    {
        path:"/home/chats",
        title:"chats",
        icon:<ChartArea/>
    },
    {
        path:"/home/employee",
        title:"Employee",
        icon:<PersonStanding/>       
    },
    {
        path:"/home/document",
        title:"Documents",
        icon:<File/>
    },
    {
        path:"/home/department",
        title:"Department",
        icon:<Building/>        
    },
    {
        path:"/home/setting",
        title:"Settings",
        icon:<Settings/>
    }
   
]