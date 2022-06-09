import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © {currentYear} - All right reserved by K M Mohiuddin Patwary</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;