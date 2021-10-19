import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

//stylesheets
import './index.scss';

const NavMobile = () => {
    //state for menu open
    const [click, setClick] = useState(false);
    //state for dropdown within menu
    const[activeMenu, setActive] = useState(null);
    //simple close main menu when clicking X
    const closeMobileMenu = () => setClick(false);
    //sets up reference to handle clicks outside of referenced div
    const ref = useRef(null);

    //multipurpose use of handle click
    const handleClick = (e) => {
        //handles first click opens main menu and update state
        if(e.target.classList.contains('navbar-burger')){
            setClick(true)
            // makes sure menu is open then proceeds
        }else if(document.querySelector('.mobile-nav-container').classList.contains('mobile-active')){
            //if dropdown is already active toggle
            if(e.target.parentElement.classList.contains('active')){
                e.target.parentElement.classList.toggle('active')
                setActive(null) 
            } else{
                //if its the first time being active or after toggle
                setActive(e.target.classList[0]) 
            }
        }
    }

   
    useEffect(() => {
        //handles state update for the dropdown to add or clear active 
        switch (activeMenu) {
            case 'products':
                document.querySelector('.products').parentElement.classList.add('active')
                document.querySelector('.company').parentElement.classList.remove('active')
                document.querySelector('.user').parentElement.classList.remove('active')
                break;
            case 'company':
                document.querySelector('.products').parentElement.classList.remove('active')
                document.querySelector('.company').parentElement.classList.add('active')
                document.querySelector('.user').parentElement.classList.remove('active')
                break;
            case 'user':
                document.querySelector('.products').parentElement.classList.remove('active')
                document.querySelector('.company').parentElement.classList.remove('active')
                document.querySelector('.user').parentElement.classList.add('active')
                break;
            case null:
                document.querySelector('.products').parentElement.classList.remove('active')
                document.querySelector('.company').parentElement.classList.remove('active')
                document.querySelector('.user').parentElement.classList.remove('active')
                break;
            default:
                setActive(null)
                break;
        }

        //reference function to handle clicking outside of referenced div to close menu
        function handleClickOutside(e){     
            if(ref.current && !ref.current.contains(e.target)){
                setClick(false)
                setActive(null)
            } 
        }
        //opens or closes mobile nav container
        if (click) {
            document
                .querySelector('.mobile-nav-container')
                .classList
                .add('mobile-active')
        } else {
            document
                .querySelector('.mobile-nav-container')
                .classList
                .remove('mobile-active')
        }

        //checks where it is clicking for the reference check
        document.addEventListener('mousedown', handleClickOutside); 
        return () => {
            document.removeEventListener('mousedown', handleClickOutside) 
        };

    }, [ref,click,activeMenu])

    return <> 
    <nav className='navbar-mobile'>
        <div className='mobile-header'>
            <Link to='/' className='navbar-logo'>
                Isaac V.
            </Link>
            <FontAwesomeIcon onClick={handleClick} className='navbar-burger' icon={faBars}/>
        </div>

        <div className="mobile-nav-container">
            <div className='container-close'>
                <FontAwesomeIcon onClick={closeMobileMenu} className='mobile-nav-close' icon={faTimes}/>
            </div>
            <div className='mobile-nav-links' ref={ref}>
                <div>
                    <button className='products' onClick={handleClick}>About</button>
                </div>
                <div className='active'>
                    <button className='company' onClick={handleClick}>Reviews</button>
                </div>
                <div>
                    <button className='user' onClick={handleClick}>Testimonials</button>
                </div>
                <div>
                    <button className='cart mobile-icons'>Numbers</button>
                </div>
                <div>
                    <button className='mobile-icons'>Contact</button>
                </div>
            </div>
        </div>
    </nav> 
    </>
}

export default NavMobile;