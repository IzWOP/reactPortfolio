import React, {Suspense} from 'react';
//components
import Navbar from '../Navbar';
import Footer from '../Footer';
// import PersonalModal from '../PersonalModal';
//stylesheets
import './index.scss';

const PersonalModal = React.lazy(() => import('../PersonalModal'));
const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <PersonalModal/>
            </Suspense>  
                <Footer />
        </>
    )
}

export default Layout
