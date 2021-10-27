import React from 'react';
//components
import Navbar from '../Navbar';
import Footer from '../Footer';
//stylesheets
import './index.scss';


const Layout = ({children}) => {
    const PersonalModal = React.lazy(() => import('../PersonalModal'));
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <PersonalModal/>
            <Footer />
        </>
    )
}

export default Layout
