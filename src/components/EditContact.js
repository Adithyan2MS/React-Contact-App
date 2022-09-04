import React,{useState} from "react";
import {useLocation,useNavigate} from 'react-router-dom'

const EditContact =(props)=>{
    const location = useLocation();
    const navigate = useNavigate();
    const {id,name,email} = location.state.contact
    const [newName,setNewName] = useState(name)
    const [newEmail,setNewEmail] = useState(email)
    
    const update = (e)=>{
        const state={
            id:id,
            name:newName,
            email:newEmail
        }
        e.preventDefault()
        if(newName == "" || newEmail == ""){
            alert("All the fields Mandantory")
            return;
        }
        props.UpdateContactHandler(state)
        setNewName("")
        setNewEmail("")
        navigate(-1)
        
    }
        return (
            <div className="ui main">
                <h2>Edit Contact</h2>
                <form className=" ui form" onSubmit={update}>
                    <div className="field">
                        <label>Name</label>
                        <input type='text'
                        name="name" 
                        placeholder="Name" 
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type='text' 
                        name="email" 
                        placeholder="Email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}></input>
                    </div>
                    <button className="ui button blue">Update</button>
                </form>
            </div>
            
        )
    
}
export default EditContact;