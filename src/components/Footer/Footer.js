import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <span className='name'>
                Inshorts clone
                <a href='' target> Saif Ahmad</a>

            </span>
            <hr style={{ width: '90%' }}></hr>
            <div className='iconContainer'>
                <a href='' target>
                    <i class="fa-brands fa-instagram-square"></i>
                </a>
                <a href='' target>
                    <i class="fa-brands fa-facebook-square"></i>
                </a>
                <a href='' target>
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href='' target>
                    <i class="fa-brands fa-twitter-square"></i>
                </a>

            </div>

        </div>
    )
}

export default Footer