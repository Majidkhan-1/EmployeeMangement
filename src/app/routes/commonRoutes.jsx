import Chats from '../../features/chats/ui/pages/Chats'
import Home from '../../features/dashboard/ui/pages/Home'
import Settings from '../../features/settings/ui/pages/Settings'

const commonRoutes = [
    {
        path: "",
        element: <Home />
    },
    {
        path:"chats",
        element:<Chats/>
    },
    {
        path:"setting",
        element:<Settings/>
    },

  
  
]

export default commonRoutes