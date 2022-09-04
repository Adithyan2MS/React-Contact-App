import React,{useState,useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid';
import api from '../api/contacts'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from './ContactDetail'
import DeleteContact from './DeleteContact'
import EditContact from './EditContact';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts] = useState([])
  const [searchTerm,setSearchTerm] = useState("")
  const [searchResults,setSearchResults] = useState([])

  const RetriveContacts = async() =>{
    const response = await api.get("/contacts");
    return response.data
  }
  
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

  const AddContactHandler = async (contact) =>{
    console.log(contact);
    const request={
      id:uuidv4(),
      ...contact
    }

    const response =await api.post("/contacts",request)
    setContacts([...contacts,response.data])
  }

  const removeContact = async(id) =>{
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact)=>{
      return contact.id != id;
    })
    setContacts(newContactList)
  }

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

  useEffect(()=>{
    const getAllContacts = async () =>{
      const allContacts = await RetriveContacts();
      if(allContacts){
        setContacts(allContacts)
      }
    }
    getAllContacts()
  })


  useEffect(()=>{
    // localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<ContactList contacts={searchTerm.length < 1 ? contacts : searchResults} term={searchTerm} searchKeyword={searchHandler} getContactId = {removeContact}/>} />
          <Route path='/add' exact element={<AddContact AddContactHandler={AddContactHandler}/>} />
          <Route path='/contact/:id' element={<ContactDetail/>}></Route>
          <Route path='/delete/:id' element={<DeleteContact/>}></Route>
          <Route path='/edit/:id' element={<EditContact UpdateContactHandler={UpdateContactHandler}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
