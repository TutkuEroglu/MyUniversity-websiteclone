import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { islogged } from "../action/index";
import { loginz, selectUser } from "../reducer/infuser";
import "./Login.css";
import "../Logo/x.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
    
  const isLogged = useSelector((state) => state.isLogged);
  const UserSelect = useSelector(selectUser);

  const dispatch = useDispatch();
  let history = useHistory();

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/api/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response)
      if (response.data.message) {
        console.log(response.data);
        setLoginStatus(response.data.message);
      } else {
        setTimeout(() => {
          window.location.reload(false);
          dispatch(
            loginz({
              id: response.data[0].id,
              username: username,
              password: password,
              role: response.data[0].role,
              loggedIn: true,
            })
          );
          dispatch(islogged());
        }, 100);
      }
      history.push("/HomePage");
    });
  };

  return (
    <div className="loginpic">
      <img
        style={{ width: "1119.5PX", height: "570px", zoom: "170%" }}
        alt=""
        src="https://s3.cloud.ngn.com.tr/clu4-static/loginbackgroundimage/F22E206854E190F39D7304BB53148C5C.png"
      ></img>
      <div className="login">
        <div className="logo">
          <img
            alt=""
            style={{
              position: "absolute",
              height: "150px",
              width: "150px",
              right: "38%",
              top: "6%",
            }}
            src="https://i.pinimg.com/originals/a7/7b/19/a77b191819e0a0180dcf9e64f4f1049d.png"
          ></img>
        </div>
        <div className="container">
          <div
            style={{
              position: "absolute",
              top: "8px",
              left: "60px",
              color: "#35A64A",
              fontSize: "30px",
            }}
          >
            Giri??
          </div>
          <select
            style={{
              position: "absolute",
              width: "120px",
              right: "25px",
              top: "11.3px",
              backgroundColor: "#35A64A",
              color: "white",
            }}
            defaultValue="default"
            className="form-select"
            aria-label="Default select example"
          >
            <option value="default" selected>Dil se??in</option>
            <option value="1">T??rk??e</option>
            <option value="2">??ngilizce</option>
          </select>
        </div>
        <div className="LoginCont">
          <div style={{}} className="mb-3">
            <input
              style={{
                position: "absolute",
                width: "440px",
                top: "10px",
                right: "0px",
                backgroundColor: "#CCCBCA",
                border: "1px solid white",
              }}
              onChange={(e) => {
                setUsername(e.target.value)
            }}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="????renci numaras?? ya da kimlik numaras??"
            />
            <input
              style={{
                position: "absolute",
                width: "440px",
                top: "60px",
                right: "0px",
                backgroundColor: "#CCCBCA",
                border: "1px solid white",
                height: "35px",
              }}
              onChange={(e) => {
                  setPassword(e.target.value)
              }}
              type="email"
              className="form-control"
              placeholder="??ifre"
            />
          </div>
          <button
            style={{
              position: "absolute",
              top: "105px",
              right: "0px",
              width: "70px",
              height: "35px",
            }}
            onClick={login}
            type="button"
            className="btn btn-success"
          >
            Giri?? yap
          </button>
          <div style={{ position: "absolute", top: "115px", left: "33px" }}>
            <a href="/">??ifrenizi mi unuttunuz?</a>
          </div>
        </div>
        <div className="duyuru">
          <div
            style={{
              paddingInlineStart: "0px",
              color: "blue",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            Sadece ortak ders sinavlari i??in bu alandan giris yapiniz.
          </div>
          <button
            style={{
              backgroundColor: "red",
              height: "50px",
              width: "370px",
              color: "white",
            }}
          >
            S??nava giri?? i??in t??klay??n??z.
          </button>
          <div style={{ color: "blue", fontWeight: "700", fontSize: "14px" }}>
            Degerli ??grencilerimiz,
            <br />
            Ortak dersleri alan ??grencilerimiz sinavlarini bu butona tiklayarak
            ger??eklestireceklerdir.
          </div>
          <div style={{ fontWeight: "330", fontSize: "20px" }}>Duyurular</div>
          <div style={{ fontSize: "15px" }}>
            <a style={{ color: "green" }} href="/">
              ????rencilerimizin ve e??itmenlerimizin dikkatine:
            </a>
            <br />
            <a style={{ color: "green" }} href="/">
              Ortak dersler-Final s??navlar?? Hk.
            </a>
            <br />
            <a style={{ color: "green" }} href="/">
              Ortak dersler-Mazeret s??navlar?? Hk.
            </a>
            <br />
            <a style={{ color: "green" }} href="/">
              Ortak Zorunlu Dersler- Ara S??navlar Hakk??nda (??NEML??)
            </a>
            <br />
            <a style={{ color: "green" }} href="/">
              ????rencilerimizin dikkatine-Office 365 hesaplar??
            </a>
            <br />
            <a style={{ color: "green" }} href="/">
              ????rencilerimizin ve e??itmenlerimizin dikkatine (2020-2021 akademik
              y??l?? g??z d??nemi)
            </a>
          </div>
        </div>
      </div>
      <div className="minilogin">
        <p
          style={{
            fontSize: "12px",
            marginTop: "20px",
            marginLeft: "20px",
            color: "black",
          }}
        >
          Duyuru ve bilgiler i??in <a href="/">uzem.bartin.edu.tr</a>
        </p>
        <hr />
        <div>
          <img alt="" style={{marginLeft:"20px"}} src="http://icons.iconarchive.com/icons/icons8/windows-8/32/Social-Networks-Facebook-icon.png"></img>
          <img alt="" style={{marginLeft:"3px"}}src="http://icons.iconarchive.com/icons/icons8/windows-8/32/Social-Networks-Instagram-icon.png"></img>
          <img alt="" style={{marginLeft:"3px"}}src="http://icons.iconarchive.com/icons/icons8/windows-8/32/Social-Networks-Youtube-icon.png"></img>
          <img alt="" style={{marginLeft:"3px"}}src="http://icons.iconarchive.com/icons/custom-icon-design/mono-general-3/32/twitter-icon.png"></img>
        </div>
      </div>
      <div className="bos">
        <div style={{fontSize:"13px",fontWeight:"600",marginTop:"25px",marginLeft:"12px"}}>?? 2013-2021 ALMS - Advancity</div>
        <div style={{fontSize:"13px",fontWeight:"300",marginTop:"25px",marginLeft:"12px"}}>T??m haklar?? sakl??d??r.</div>
      </div>
    </div>
  );
}

export default Login;
