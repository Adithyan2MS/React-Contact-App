import {createContext, useContext,useState} from 'react'
import api from '../api/contacts'
import {v4 as uuidv4} from 'uuid';



const contactsCurdContext = createContext();

export function ContactsCurdContextProvider({children}){
    const [contacts,setContacts] = useState([])
    const [searchTerm,setSearchTerm] = useState("")
    const [searchResults,setSearchResults] = useState([])

    //Retrieve Contacts
    const RetriveContacts = async() =>{
        const response = await api.get("/contacts");
        setContacts(response.data)
    }

    //Delete Contacts
    const removeContact = async(id) =>{
        await api.delete(`/contacts/${id}`)
        const newContactList = contacts.filter((contact)=>{
          return contact.id != id;
        })
        setContacts(newContactList)
    }

    //Add Contacts
    const AddContactHandler = async (contact) =>{
        console.log(contact);
        const request={
          id:uuidv4(),
          ...contact
        }
    
        const response =await api.post("/contacts",request)
        setContacts([...contacts,response.data])
    }

    //Edit Contacts
    const UpdateContactHandler = async (contact)=>{

        const response = await api.put(`/contacts/${contact.id}`,contact)
        console.log(response.data);
        const {id} = response.data
        setContacts(
          contacts.map((contact)=>{
            return contact.id === id ? {...response.data } : contact;
          })
        )
    }

    //Search Contacts
    const searchHandler = (searchTerm) =>{
        setSearchTerm(searchTerm)
        if(searchTerm !== ""){
          const newContactList = contacts.filter((contact)=>{
            return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase()) 
          })
          setSearchResults(newContactList)
        }else{
          setSearchResults(contacts)
        }
      }

    const value = {
        contacts,
        RetriveContacts,
        removeContact,
        AddContactHandler,
        UpdateContactHandler,
        searchHandler,
        searchTerm,
        searchResults

    }
    return <contactsCurdContext.Provider value={value}>
        {children}
    </contactsCurdContext.Provider>
}

export function useContactsCurd(){
    return useContext(contactsCurdContext)
}