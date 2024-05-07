import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div id="footer">
            <p>&copy; {currentYear} Rategle Technologies. All rights reserved.</p>
        </div>
    );
}

export default Footer;
