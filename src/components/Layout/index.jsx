import React, {Suspense} from 'react';
//components
import Navbar from '../Navbar';
// import Footer from '../Footer';
// import PersonalModal from '../PersonalModal';
//stylesheets
import './index.scss';

const PersonalModal = React.lazy(() => import('../PersonalModal'));
const Footer = React.lazy(() => import('../Footer'));
const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <PersonalModal/>
            </Suspense>  
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <Footer />
            </Suspense>
        </>
    )
}

export default Layout
