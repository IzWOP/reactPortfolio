import React, {Suspense} from 'react';
import {Link} from 'react-scroll';
import './index.scss';
// import Body from './Body';

const Body = React.lazy(() => import ('./Body'));
const Home = () => {
    window
        .dataLayer
        .push({event: 'pageview'});
        const handleClick =()=>{
            window.dataLayer.push({
                event: 'ctaHeroClick'
                });
            
          }

    return <> <div className="home">
        <section className='billboard'>
            <div className='background'></div>
            <div className='container'>
                <div className='billboard_textbox'>
                    <h1
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic">
                        A Unique Type
                        <br/>
                        of Developer
                    </h1>
                    <h2
                        data-aos="fade-up"
                        data-aos-delay="1000"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic">A badass developer who specializes in raising profits of B2C websites through marketing and data.</h2>
                    <Link
                        to='contact'
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic"
                        spy={true} smooth={true} offset={-70} duration={800}>
                        <button onClick={handleClick} className='cta'>Let's Do It</button>
                    </Link>
                </div>
            </div>
        </section>
        <Suspense fallback={
        <h1> Still Loading… </h1>
            }
        >
            <Body/>
        </Suspense>
    </div> 
    </>
}
export default Home;