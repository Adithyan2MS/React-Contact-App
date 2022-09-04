import React,{useRef,useEffect} from "react";
import { Link } from "react-router-dom";
import {useContactsCurd} from '../context/ContactsCurdContext'
import ContactCard from "./ContactCard"

const ContactList = () =>{
    const {contacts,RetriveContacts,searchResults,searchTerm,searchHandler} = useContactsCurd()

    useEffect(()=>{
        RetriveContacts()
    },[])
    const renderContactList = (searchTerm.length<1 ? contacts : searchResults).map((contact)=>{
        return(
            <ContactCard contact={contact} key={contact.id}></ContactCard>
        )
    })
    const onUserSearch=(e) =>{
        searchHandler(e.target.value)
    }
    return(
        <div className="main pt-5">
            <div className="d-flex">
                <div className="d-inline d-flex justify-content-start" style={{width:"100%"}}>
                    <h2 className="">Contact List</h2>
                </div>
                <div className="d-inline d-flex justify-content-end" style={{width:"100%"}}>
                    <Link to="/add">
                        <button className="ui button blue">Add Contact</button>
                    </Link>
                </div>
            </div>
            <div className="ui search p-3">
                <div className="ui icon input " style={{width:"100%"}}> 
                    <input type="text" placeholder="seacrh contacts" className="prompt" value={searchTerm} onChange={(e)=> onUserSearch(e)}/>
                    <i className="search icon"/>
                </div>
            </div>
            <div className="ui celled list">
                {renderContactList.length > 0 ? renderContactList : "No Contacts Available"}
            </div>
        </div>
        
    )
}

export default ContactList;