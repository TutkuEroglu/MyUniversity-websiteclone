import React from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../reducer/infuser";
import "../App.css";
import { BsPeopleCircle } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { ImBook } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { ImCalendar } from "react-icons/im";
import { GoKey } from "react-icons/go";


function Navbar() {

    const user = useSelector(selectUser);

    return (
        <div className="Navbar">
            
          <img
            alt=""
            style={{
              position: "absolute",
              height: "100px",
              width: "100px",
              right: "94%",
              top: "1%",
            }}
            src="https://i.pinimg.com/originals/a7/7b/19/a77b191819e0a0180dcf9e64f4f1049d.png"
          ></img>
        
           <div className="links">

           <div className="btn-group" role="group">
                <button style={{backgroundColor:"black", border:"black",color:"#808080"}}id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <BsFillBellFill size={20}/>
                </button>
                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li><a style={{color:"black"}} class="dropdown-item" href="/">Yaklaşan Aktiviteler</a></li>
                    <li><a style={{color:"black"}} class="dropdown-item" href="/">Tüm son teslim tarihlerini gör</a></li>
                </ul>
                </div>

           <div className="btn-group" role="group">
                <button style={{backgroundColor:"black", border:"black",color:"#808080"}}id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <AiOutlineMail size={20}/>
                </button>
                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li><a style={{color:"black"}} class="dropdown-item" href="/">Hiç yeni mesajınız yok</a></li>
                    <li><a style={{color:"black"}} class="dropdown-item" href="/">Tümünü gör</a></li>
                </ul>
                </div>

           <div className="btn-group" role="group">
                <button style={{backgroundColor:"black", border:"black",color:"#808080"}}id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <ImBook size={20}/>
                </button>
                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li><a style={{color:"black"}} class="dropdown-item" href="/">Derslerim</a></li>
                </ul>
                </div>
           <div className="btn-group" role="group">
                <button style={{backgroundColor:"black", border:"black",color:"#808080"}}id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <BiWorld size={20}/>
                </button>
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li><a style={{color:"black"}} class="dropdown-item" href="/">Sistem dilini değiştir</a></li>
                    <li><a style={{color:"black"}} class="dropdown-item" href="/">İngilizce / English</a></li>
                    <li><a style={{color:"black"}} class="dropdown-item" href="/">Türkçe</a></li>
                </ul>
                </div>

               <div className="btn-group" role="group">
                <button style={{backgroundColor:"black", border:"black",color:"#808080"}}id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <BsPeopleCircle size={35}/>  {user.username}
                </button>
                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li><a style={{color:"black"}} class="dropdown-item" href="/"><BsPeopleCircle size={15}/>Profilim</a></li>
                    <li><a style={{color:"black"}} class="dropdown-item" href="/"><ImCalendar size={15} />Takvimim</a></li>
                    <li><a style={{color:"black"}} class="dropdown-item" href="/"><GoKey size={15} />Çıkış Yap</a></li>
                </ul>
                </div>
                

            </div>
           
        </div>
    )
}

export default Navbar
