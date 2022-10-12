import { NavLink } from 'react-router-dom';
import '../Contact/Contact.css';
import '../../index.css';



const Contact = () => {
  
  return (
    <div>
      <div className='container'>
        <div className='contact-container'>
          <h3 className='head'>Have a project in mind</h3>
          <h1 className='heading'>Let me help you</h1>
          <NavLink to="/contact"><button className='btn btn-light'>Contact</button></NavLink>
       </div>
       </div>
    </div>
    
  )
}

export default Contact