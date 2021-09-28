import React, {useState, useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';
//stylesheets
import './index.scss'

const NavDesk = () => {
    //set scroll state to change background color
    const [scrollState, setScrollState] = useState("top");
    //checks anything clicked to match set navbar classes

      //variable to update later
      
      //click outsite of nav reference
      const ref = useRef(null);
        useEffect(() => {
            //checks state to make sure it matches
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
            return ()=>{
                //stops infinite loops
                document.removeEventListener("scroll", listener)
            };
           
        }, [ref,scrollState])


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