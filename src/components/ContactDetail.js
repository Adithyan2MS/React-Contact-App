import React from "react";
import user from "../images/user-icon.png"
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

 const ContactDetail = (props) =>{
     const location = useLocation()
     const data = location.state.contact
     console.log(data);
     return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"></img>
                </div>
                <div className="content">
                    <div className="header">{data.name}</div>
                    <div className="description">{data.email}</div>
                </div>
            </div>
            <div className="center-div d-flex justify-content-center">
                <Link to="/">
                    <button className="ui button blue center">Back to Contact List</button>
                </Link>
            </div>
        </div>
     )
 }

 export default ContactDetail;
 