import React , {useState,useRef} from 'react';

import SimpleReactValidator from "simple-react-validator";
import {NavLink} from 'react-router-dom';
import {Dots} from "react-preloaders";
import {toast} from "react-toastify";
import { loginUser } from '../../services/userService';
import {Helmet} from "react-helmet";

const Login = ({history}) => {

const [email,setEmail] = useState("");
const [password,setPasword] = useState("");
const [loading,setLoading] = useState(false);

const [,forceUpdate] = useState(); 
const validator = useRef(new SimpleReactValidator({
    messages : {
        required : "پر کردن این فیلد الزامی است.",
        email : "ایمیل وارد شده صحیح نمیباشد.",
        min : "نباید کمتر از 5 کارکتر باشد."
    }, element :
message => <div style = {{color : "red"}}>{message}</div>
}));


const reset = () => {
    setEmail("");
    setPasword("");
};

const handleSubmit = async event => {
    event.preventDefault();

    const user = {
        email,
        password

    };

try{
    setLoading(true); 
    if (validator.current.allValid){
        const {status,data} = await loginUser(user);
        if (status === 200){
            toast.success("ورود موفقیت آمیز بود.", {
                position: "top-right",
                closeOnClick: true
            });
            setLoading(false);
            history.replace("/");
            reset();
           
            console.log(data);
        }
    }else {
        validator.current.showMessages();
        forceUpdate(1);
    }


}catch(ex){
    setLoading(false);
    console.log(ex);
    toast.error("مشکلی پیش آمده.", {
        position: "top-right",
        closeOnClick: true
    });
    
}


};


    return ( 


<main className="client-page">
            <div className="container-content">

                <header><h2> ورود به سایت </h2></header>
                <Helmet>
                    <title>تاپلرن | ورود به سایت</title>
                </Helmet> 
                {loading ? (
                    <Dots time={0} customLoading ={loading}/>
                ) : null}
                <div className="form-layer">

                    <form onSubmit= {handleSubmit}>

                        <div className="input-group">
                            <span className="input-group-addon"
                             id="email-address"><i className="zmdi zmdi-email"></i></span>
                            <input type="text"
                            name = {"email"} 
                            className="form-control"
                             placeholder="ایمیل"
                              aria-describedby="email-address"
                              value = {email}
                              onChange = {e => {
                                setEmail(e.target.value);
                                validator.current.showMessageFor("email")

                              }}/>
                              {validator.current.message("email",email,"required|email")}
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                            <input type="password"
                            name= {"password"}
                             className="form-control"
                              placeholder="رمز عبور "
                               aria-describedby="password"
                               value= {password}
                               onChange ={e => {
                                setPasword(e.target.value);
                                validator.current.showMessageFor("password")
                               }}/>
                               {validator.current.message("password",password,"required|min:5")}
                        </div>

                        <div className="remember-me">
                            <label><input type="checkbox" name=""/>  مرا بخاطر بسپار </label>
                        </div>

                        <div className="link">
                            <NavLink to=""> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</NavLink>
                            <NavLink to=""> <i className="zmdi zmdi-account"></i> عضویت در سایت </NavLink>
                        </div>
                        
                        <button className="btn btn-success"> ورود به سایت </button>

                    </form>
                </div>

            </div>
        </main>

   

     );
}
 
export default Login;