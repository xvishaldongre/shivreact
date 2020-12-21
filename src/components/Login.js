import React from 'react'
import "./Login.css"
import {Link} from "react-router-dom"

function login() {
    return (
        <div className="login_main_container">

            <Link to ="/"className="Login_logo_img">
                <img className="login_logo" 
                src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?w=768"
                alt=""/>
            </Link>
            <div className="login_container">
                <h1>Sing-in</h1>
                <label htmlFor=""> Email or mobile phone number</label><br />
                <div className="login_email_input">
                    <input type="text" className="" />
                    </div>
                        <div className="cart_containerC">
                <button className="cart_buttonC">Continue</button>
            </div>
                <p>By continuing, you agree to Amazon's <Link>Conditions of Use</Link>and <Link>Privacy Notice.</Link></p>
            </div>
                <div className="new_account_msg">
                <hr /><p>New to Amazon?</p><hr />
            </div>
            <div className="creat_acc_box">
                <button className="creat_button">Continue</button>
            </div>
            <div className="bottom_hr">
                        <hr/>
                <p className="Foot_copyright">© 1996-2020, Amazon.com</p>
            </div>
        </div>
    )
}

export default login
