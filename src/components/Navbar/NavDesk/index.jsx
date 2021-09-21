import React, {useState, useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';
//stylesheets
import './index.scss'

const NavDesk = () => {
    //set menu state
    const[activeMenu, setActive] = useState(null);
    //set scroll state to change background color
    const [scrollState, setScrollState] = useState("top");
    //checks anything clicked to match set navbar classes
     const handleClick=(e)=> {
        setActive(e.target.classList[0])
      }
      //variable to update later
      
      //click outsite of nav reference
      const ref = useRef(null);
        useEffect(() => {
            //checks state to make sure it matches
            // switch (activeMenu) {
            //     case 'products':
            //         document.querySelector('.products').parentElement.classList.add('active')
            //         document.querySelector('.company').parentElement.classList.remove('active')
            //         document.querySelector('.user').parentElement.classList.remove('active')
            //         break;
            //     case 'company':
            //         document.querySelector('.products').parentElement.classList.remove('active')
            //         document.querySelector('.company').parentElement.classList.add('active')
            //         document.querySelector('.user').parentElement.classList.remove('active')
            //         break;
            //     case 'user':
            //         // document.querySelector('.products').parentElement.classList.remove('active')
            //         // document.querySelector('.company').parentElement.classList.remove('active')
            //         // document.querySelector('.user').parentElement.classList.add('active')
            //         break;
            //     case null:
            //         // document.querySelector('.products').parentElement.classList.remove('active')
            //         // document.querySelector('.company').parentElement.classList.remove('active')
            //         // document.querySelector('.user').parentElement.classList.remove('active')
            //         break;
            //     default:
            //         setActive(null)
            //         break;
            // }
            let listener = null
            //listening to set state to update navbar background
            listener = document.addEventListener("scroll", e => {
                var scrolled = document.scrollingElement.scrollTop
                if (scrolled >= 75) {
                  if (scrollState !== "amir") {
                    setScrollState("amir")
                    document.querySelector('nav').classList.add('scrolled')
                  }
                } else {
                  if (scrollState !== "top") {
                    setScrollState("top")
                    document.querySelector('nav').classList.remove('scrolled')
                  }
                }
              })
              //event handler for not clicking within reference div(navbar)
            // function handleClickOutside(e){
            //     if(ref.current && !ref.current.contains(e.target)){
            //         setActive(null)
            //     }
            // }
            // document.addEventListener('mousedown', handleClickOutside);
            return ()=>{
                //stops infinite loops
                document.removeEventListener("scroll", listener)
                // document.removeEventListener('mousedown', handleClickOutside)
            };
           
        }, [activeMenu,ref,scrollState])
        
    //to add mouse over functionality later. basic functionality is priority and deadline
    // const onMouseEnter = () => {
    //     if (window.innerWidth < 960) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(true);
    //     }
    // };

    // const onMouseLeave = () => {
    //     if (window.innerWidth < 960) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(false);
    //     }
    // };

    return <> 
    <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
            Isaac V.
        </Link>
        
        <div className='nav-links' ref={ref}>
            <div>
                <Link to=''>
                    <button className='products'>About</button>
                </Link>
            </div>
            <div>
            <Link to=''>
                <button className='products'>Reviews</button>
                </Link>
            </div>
            <div>
            <Link to=''>
                <button className='products'>Testimonials</button>
                </Link>
            </div>
            <div>
            <Link to=''>
                <button className='products'>Numbers</button>
                </Link>
            </div>
            <div>
                <Link to=''>
                <button className='products' >Contact</button>
                </Link>
            </div>
        </div>
    </nav> 
    </>
}

export default NavDesk;