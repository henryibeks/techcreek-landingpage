import logo from '../components/assets/logo.png'


const Header = () => {
  return ( 
    <div className="navbar">
      <div><img className='logoclass' src={logo}  alt="logo" /></div>
      
            <ul className="ul1">
                <li className="li1">Home</li>
                <li className="li1">Create</li>
                <li className="li1">Connect</li>
                <li className="li1">Members</li>
                <li className="li1">Students</li>
                
            </ul>
            
        </div>
   )
}
 
export default Header;