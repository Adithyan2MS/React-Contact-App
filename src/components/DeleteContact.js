import React from "react";
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

 const DeleteContact = (props) =>{
     const location = useLocation()
     const data = location.state.contact
     return (
        <div className="main pt-5">
            <div className="content">
                <div className="d-flex justify-content-center">
                    <h4>Are You Sure, you want to delete? </h4>
                </div>
                
                <div className="d-flex justify-content-center">
                    <div className="dltbtn p-2 d-inline">
                        <button className="ui button blue">DELETE</button>
                    </div>
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