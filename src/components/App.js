import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from './ContactDetail'
import DeleteContact from './DeleteContact'
import EditContact from './EditContact';
import {ContactsCurdContextProvider} from "../context/ContactsCurdContext"

function App() {
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <ContactsCurdContextProvider>
        <Routes>
          <Route path='/' exact element={<ContactList />} />
          <Route path='/add' exact element={<AddContact/>} />
          <Route path='/contact/:id' element={<ContactDetail/>}></Route>
          <Route path='/delete/:id' element={<DeleteContact/>}></Route>
          <Route path='/edit/:id' element={<EditContact />}></Route>
        </Routes>
        </ContactsCurdContextProvider>
      </Router>
    </div>
  );
}

export default App;
