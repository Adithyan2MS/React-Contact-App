import React from "react";
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import { useContactsCurd } from "../context/ContactsCurdContext";

 const DeleteContact = () =>{
     const {removeContact} = useContactsCurd()
     const deleteContact=(id)=>{
        removeContact(id)
    }

     const location = useLocation()
     const data = location.state.contact
     return (
        <div className="main pt-5">
            <div className="content">
                <div className="d-flex justify-content-center">
                    <h4>Are You Sure, you want to delete? </h4>
                </div>
                
                <div className="d-flex justify-content-center">
                    <Link to="/" className="p-2">
                        <div className="dltbtn p-2 d-inline">
                            <button className="ui button blue" onClick={()=> deleteContact(data.id)}>DELETE</button>
                        </div>
                    </Link>
                    <Link to="/" className="p-2">
                        <div className="cancelbtn d-inline">
                            <button className="ui button blue">CANCEL</button>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </div>
     )
 }

 export default DeleteContact;