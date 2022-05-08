import React from 'react';
import './Navinshorts.css';
import HamburgerDrawer from './HamburgerDrawer';

const Navinshorts = ({ setCategory }) => {
    return (
        <div className='nav'>
            <div className='icon'>
                <HamburgerDrawer setCategory={setCategory}></HamburgerDrawer> </div>
            <img
                style={{ cursor: 'pointer' }} src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
                height='80%'
                alt='logo'></img>
        </div>
    )
}

export default Navinshorts