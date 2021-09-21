import React from 'react';
//components
import Navbar from '../Navbar';
import Footer from '../Footer';
import PersonalModal from '../PersonalModal';
//stylesheets
import './index.scss';


const Layout = ({children}) => {
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
