import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SendIcon from '@material-ui/icons/Send';
import { ImBook } from "react-icons/im";
import { ImCalendar } from "react-icons/im";
import { BsPencil } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";



export const SideBarData = [
    {
        title:"Anasayfa",
        icon:<HomeIcon/>,
        link: "/HomePage"
    },
    {
        title:"Derslerim",
        icon:<ImBook size={20}/>,
        link: "/posts"
    },
    {
        title:"Takvim",
        icon:<ImCalendar size={20}/>,
        link: "/createpost"
    },
    {
        title:"Not Çizelgem",
        icon:<BsPencil size={20}/>,
        link: "/home"
    },
    {
        title:"İletişim Araçları",
        icon:<AiOutlineMail size={20}/>,
        link: "/Chat"
    },
    {
        title:"İnternet Adreslerim",
        icon:<BsBoxArrowUpRight size={20}/>,
        link: "/home"
    },
    {
        title:"Sınav Uygulaması",
        icon:<AiOutlineBarChart size={20}/>,
        link: "/home"
    },
]

    

