import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import './loginPage.css'

export default function Body() {

    const [details, setdetails] = useState({
        name: "",
        email: "",
        password: "",
        dob: "",
        feed:[],
        comments:[]
    })

    const [data, setdata] = useState([{}])

    const [confirmPassword, setconfirmPassword] = useState("")

    const [loginEmail, setloginEmail] = useState("")

    const [loginPassword, setloginPassword] = useState("")

    const [login_data, setlogin_data] = useState({})

    const navigate = useNavigate();

    const sendData = async () => {

        let res = await axios.post("http://localhost:4000/posts", details)

        if (res)
            alert("Sign up Successfull")
        else
            alert("Try Again!! Sign up Unsuccessfull")

        setdetails({
            name: "",
            email: "",
            password: "",
            dob: "",
            feed:[]
        })
    }

    const create_new_account = () => {

        if (!details.name || !details.email || !details.password || !details.dob)
            alert("Fill all fields")

        else if (details.password !== confirmPassword)
            alert("Password and Confirm Password did not match")

        else if (details.password.length < 8)
            alert("Password should be of atleast 8 characters")

        else if (details.password.length > 20)
            alert("Password should not exceed 20 characters")

        else { 

            let flag=0;
            data?.map((val,idx) => {
                
                if(val.email == details.email)
                {
                    flag=1;
                alert("Email already taken")
                }
            })

            let number=0;
            let character=0;
            for(let i=0;i<details.password.length;i++)
            {
                if((details.password[i]>='a' && details.password[i]<='z')||(details.password[i]>='A' && details.password[i]<='Z'))
                character++;

                else if(details.password[i]>='0' && details.password[i]<='9')
                number+=1;

                else
                flag=2;
            }

            if(flag==2)
            alert("Password cannot contain special characters");

            if(number==0 || character==0)
            {
                flag=1;
                alert("Password must contain letters and numbers")
            }


            if(flag==0)
            {
            sendData();
            getData();
            const close_modal_button = document.getElementById('close_button')
            close_modal_button.click();
            }
        }
    }
    const getData = async () => {
        await axios
            .get("http://localhost:4000/posts")
            .then((res) => { setdata(res.data) });
    }

    useEffect(() => {
        setTimeout(() => {
            getData();
        }, 1000);

        document.title="Facebook"
    }, [])

    const check_login = () => {
        let flag = 0;
        data.map((val) => {
            if (val.email == loginEmail && val.password == loginPassword) {
                let obj={
                    val
                }
                navigate("/home", { state:{obj}})
                flag = 1;

                setlogin_data(val);
            }
        })

     
        if (flag == 0)
            alert("Invalid Email or Password")

        setloginPassword("");
        setloginEmail("");

    }
    const handleLoginKeypress=(e)=>{
        if(e.key==='Enter')
        {
            check_login();
        }
    }


    return (
        <>
            <div className="mobileContainer">
                <span> <span className="phoneImage">📱</span> <a href="#">Get Facebook for Android and browser faster</a></span>
            </div>
            <div className="bodyContainer">

                <div className="content">
                    <div className="contentLeft">
                        <div className="f-logo">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook-logo" />
                        </div>
                        <div className="f-quote">
                            <h2>Facebook helps you connect and share with the people in your life.</h2>
                        </div>
                    </div>

                    <div className="contentRight">
                        <div className="formBox">
                            <input type="text" name="email" id="email" placeholder="Email address or phone number" value={loginEmail} onChange={(e) => setloginEmail(e.target.value.toUpperCase())}onKeyPress={handleLoginKeypress}></input>
                            <input type="password" name="pass" id="pass" placeholder="Password" value={loginPassword} onChange={(e) => setloginPassword(e.target.value)} onKeyPress={handleLoginKeypress}></input>
                            <div className="loginButtonContainer">
                                <button className="loginButton" onClick={check_login}>Log in</button>
                            </div>
                            <div className="forgottenPasswordButton">
                                <a href="#">Forgotten password? </a>
                            </div>

                            <div className="forgottenLine"></div>

                            <div className="newAccount">
                                <button type="button" className="newAccountButton" data-bs-toggle="modal" data-bs-target="#exampleModal">Create New Account</button>

                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title Signup_title" id="exampleModalLabel">Sign up</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close_button"></button>
                                            </div>
                                            <div className="modal-body">

                                                <label htmlFor="inputPassword5" className="form-label Signup_label">Full Name</label>
                                                <input type="text" id="Signup_Name" className="form-control" aria-describedby="passwordHelpBlock" value={details.name} onChange={(e) => setdetails({ ...details, name: e.target.value })} />

                                                <label htmlFor="inputPassword5" className="form-label Signup_label">Create Email</label>
                                                <input type="email" id="Signup_Email" className="form-control" aria-describedby="passwordHelpBlock" value={details.email} onChange={(e) => setdetails({ ...details, email: e.target.value.toUpperCase() })} />


                                                <label htmlFor="inputPassword5" className="form-label Signup_label">Password</label>
                                                <input type="password" id="Signup_Password" className="form-control" aria-describedby="passwordHelpBlock" value={details.password} onChange={(e) => setdetails({ ...details, password: e.target.value.split(' ').map(i => i[0].toUpperCase() + i.substring(1).toLowerCase()).join(' ') })} />
                                                <div id="passwordHelpBlock" className="form-text">
                                                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                                </div>

                                                <label htmlFor="inputPassword5" className="form-label Signup_label">Confirm Password</label>
                                                <input type="password" id="Signup_ConfirmPassword" className="form-control" aria-describedby="passwordHelpBlock" value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }} />

                                                <label htmlFor="birthday" className="Signup_DOB">DOB</label>
                                                <input type="date" id="birthday" name="birthday" className="Signup_DOB_input" value={details.dob} onChange={(e) => setdetails({ ...details, dob: e.target.value })}></input>


                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-success Signup_create_email_button" onClick={create_new_account}>Sign Up</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="createPageFont">
                            <a href="#" className="createPage">Create a page</a>
                            &nbsp;for a celebrity, brand or business.
                        </div>
                    </div>
                </div>
            </div>


            <div className="bodyContainer2">
                <div className="content2">
                    <div className="language">
                        <ul className="languageBar">
                            <li>English (UK)</li>
                            <li>हिन्दी</li>
                            <li>ਪੰਜਾਬੀ</li>
                            <li>اردو</li>
                            <li>ગુજરાતી</li>
                            <li>தமிழ்</li>
                            <li>తెలుగు</li>
                            <li>മലയാളം</li>
                            <li>ಕನ್ನಡ</li>
                            <li>Español</li>
                        </ul>
                    </div>

                    <div className="language">
                        <ul className="languageBar">
                            <li>Sign up</li>
                            <li>Log in</li>
                            <li>Messenger</li>
                            <li>Messener Lite</li>
                            <li>Watch</li>
                            <li>Places</li>
                            <li>Games</li>
                            <li>Marketplace</li>
                            <li>Facebook Pay</li>
                            <li>Oculus</li>
                            <li>Portal</li>
                            <li>Instagram</li>
                            <li>Bulletin</li>
                            <li>Local</li>
                            <li>Fundraisers</li>
                            <li>Services</li>
                            <li>Voting Information Centre</li>
                            <li>Groups</li>
                            <li>About</li>
                            <li>Create ad</li>
                            <li>Create Page</li>
                            <li>Developers</li>
                            <li>Careers</li>
                            <li>Privacy</li>
                            <li>Cookies</li>
                            <li>Adchoices</li>
                            <li>Terms</li>
                            <li>Help</li>
                            <li>Contact uploading and non-users</li>

                        </ul>

                    </div>

                    <div className="language">
                        <ul className="languageBar">
                            <li>Meta @ 2022</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer2">
                <div className="footer2List">
                    <div>
                        <ul className="languageBar2">
                            <li>English (UK)</li>
                            <li>हिन्दी</li>
                            <li>ਪੰਜਾਬੀ</li>
                            <li>اردو</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="languageBar2">
                            <li>తెలుగు</li>
                            <li>മലയാളം</li>
                            <li>ಕನ್ನಡ</li>
                            <li>Español</li>
                        </ul>
                    </div>
                </div>

                <div className="info">
                    <ul>
                        <li> <a href="#">About</a></li>
                        <li><a href="#">. &nbsp;Help</a></li>
                        <li><a href="#">. &nbsp;More</a></li>
                    </ul>
                </div>

                <div className="copyright">Meta @ 2022</div>
            </div>
        </>
    )
}
