import React from "react";
import user from "../images/user-icon.png"
import { Link } from 'react-router-dom'

const ContactCard = (props) => {
    const { id, name, email } = props.contact
    const contact = props.contact
    //  console.log(contact);
    return (
        <div className="item d-flex ">
            <div className="d-inline">
                <img className="ui avatar image" src={user} alt="image"></img>
            </div>
            <div className="content d-inline">
                <Link to={`/contact/${id}`} state={{ contact: contact }}>
                    <div className="header">
                        {name}
                    </div>
                    <div className="header">
                        {email}
                    </div>
                </Link>
            </div>
            <div className="d-inline d-flex justify-content-end" style={{width:"100%"}}>
                <div>
                <Link to={`/edit/${id}`} state={{ contact: contact }}>
                    <i className="edit outline icon " style={{ color: "blue", marginTop: "7px",transform:"scale(1.5)" }}
                    ></i>
                </Link>
                </div>  
                <div>
                    <i className="trash outline icon " style={{ color: "red", marginTop: "7px",transform:"scale(1.5)" }}
                    onClick={() => props.clickHandler(id)}></i>
                </div>
            </div>


            {/* <Link to={`/delete/${id}`} state={{contact:contact}}>
                    <i className="trash alternate outline icon" style={{color:"red",marginTop:"7px"}} ></i>
                </Link> */}
        </div>
    )
}

export default ContactCard;