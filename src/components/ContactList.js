import React,{useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard"

const ContactList = (props) =>{
    // console.log(props);
    const inputEL = useRef("")
    const deleteContactHandler=(id)=>{
        props.getContactId(id)
    }
    const renderContactList = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
        )
    })
    const getSearchTerm=() =>{
        props.searchKeyword(inputEL.current.value)
    }
    return(
        <div className="main pt-5">
            <div className="d-flex">
                <div className="d-inline d-flex justify-content-start" style={{width:"100%"}}>
                    <h2 className="">Contact List</h2>
                </div>
                <div class="d-inline d-flex justify-content-end" style={{width:"100%"}}>
                    <Link to="/add">
                        <button className="ui button blue">Add Contact</button>
                    </Link>
                </div>
            </div>
            <div className="ui search p-3">
                <div className="ui icon input " style={{width:"100%"}}> 
                    <input ref={inputEL}
                     type="text" placeholder="seacrh contacts" className="prompt" value={props.term} onChange={getSearchTerm}/>
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