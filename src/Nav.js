import logo from './images/logo.svg'
import hamburger from './images/icon-hamburger.svg'
import {useState} from 'react'
import cancel from './images/icon-close.svg'

const Nav =()=>{
    const [navShowing,setNavShowing]=useState(false)
    return (
        <nav>
            <div className='nav-icon'>
                    <img src={logo} alt=''/>
                    <img onClick={()=>setNavShowing(!navShowing)} className='hamburger' src={navShowing?cancel:hamburger} alt=''/>
            </div>
            {(<div className={`nav-box ${navShowing?'disflex':'disnone'}`}>
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Blog</p>
                <p>Careers</p>
                
            </div>)}
            <div className='request'>Request Invite</div> 
        </nav>
    )
}
export default Nav