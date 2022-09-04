import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'

const AddContact =(props)=>{
    const navigate = useNavigate();
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    
    const add = (e)=>{
        
        e.preventDefault()
        const state = {
            name:name,
            email:email
        }
        if(state.name == "" || state.email == ""){
            alert("All the fields Mandantory")
            return;
        }
        props.AddContactHandler(state)
        setName("")
        setEmail("")
        navigate(-1)
        
    }
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className=" ui form" onSubmit={add}>
                    <div className="field">
                        <label>Name</label>
                        <input type='text'
                        name="name" 
                        placeholder="Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type='text' 
                        name="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
            
        )
    
}
export default AddContact;