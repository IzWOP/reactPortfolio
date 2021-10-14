import React, {useState, useEffect,useRef} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
//stylesheets
import './index.scss'

const NavDesk = () => {
    //set scroll state to change background color
    const [scrollState, setScrollState] = useState("top");
    //checks anything clicked to match set navbar classes
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
        <div onClick={scroll.scrollToTop} className='navbar-logo'>
            Isaac V.
        </div>
        
        <div className='nav-links' ref={ref}>
            <div>
                <Link to='intro' spy={true} smooth={true} offset={-70} duration={300}>
                    <button className='products'>Intro</button>
                </Link>
            </div>
            <div>
            <Link to='values' spy={true} smooth={true} offset={-70} duration={300}>
                <button className='products'>Values</button>
                </Link>
            </div>
            <div>
            <Link to='testimonial' spy={true} smooth={true} offset={-150}  duration={300}>
                <button className='products'>Testimonial</button>
                </Link>
            </div>
            <div>
            <Link to='projects' spy={true} smooth={true} offset={-20} duration={300}>
                <button className='products'>Projects</button>
                </Link>
            </div>
            <div>
                <Link to='contact' spy={true} smooth={true} offset={-70} duration={300}>
                <button className='products' >Contact</button>
                </Link>
            </div>
        </div>
    </nav> 
    </>
}

export default NavDesk;