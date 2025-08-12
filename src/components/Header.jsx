import { useState } from 'react';
import { headerNav } from '../contents/textdata';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


function Header(){
    const [ show, setShow ] = useState(false);
    const toggleMenu=()=>{
        setShow((prevShow)=>!prevShow);
        /* setShow(!prevShow); */
    }
    return(
        <header id='header'>
            <div className='header_inner'>
                <h1 className='header_logo'>
                    <a href='/'>My Portfolio</a>
                </h1>
                <nav className='header_nav'>
                    <ul>
                        {
                            headerNav.map((list,idx)=>(
                                <li key={idx}>
                                    <a href={list.url}>{list.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className='nav_mobile' id='toggle_menu'>
                    <button className='toggle_btn' onClick={()=>{toggleMenu()}}>
                        <FontAwesomeIcon icon={!show ? faBars : faTimes} className='bar-icon'/>
                    </button>
                    { /* show가 true (&&) 면 아래꺼 출력해 */
                        show && (
                            <nav className='header_nav'>
                                <ul>
                                    {
                                        headerNav.map((list,idx)=>(
                                            <li key={idx}>
                                                <a href={list.url}>{list.title}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;