
import React, {Suspense} from 'react';
import './index.scss';
// import Body from './Body';

const Body = React.lazy(() => import('./Body'));
const Home = () => {
    window.dataLayer.push({
        event: 'pageview'
      });

    return <> 
    <div className="home">
        <section className='billboard'>
            <div className='background'></div>
            <div className='container'>
                <div className='billboard_textbox'>
                    <h1
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic">
                        A New Breed <br/> of  Marketer
                    </h1>
                    <h2
                        data-aos="fade-up"
                        data-aos-delay="2000"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic">A badass growth digital marketer who raises<br/>  conversion rates for B2C companies.</h2>

                </div>
            </div>
        </section>
        <Suspense fallback={<h1>Still Loading…</h1>}>
            <Body/>
        </Suspense>
    </div> 
    </>
}
export default Home;