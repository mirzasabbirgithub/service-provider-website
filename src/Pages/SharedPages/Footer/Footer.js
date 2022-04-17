import React from 'react';
import './Footer.css';
const Footer = () => {
          const today = new Date();
          const year = today.getFullYear();
          return (
                    <footer className=' text-center text-white mt-5'>
                              <p><small>Copyright &copy; {year} by Dr. Habib Ahmed </small></p>
                    </footer>
          );
};

export default Footer;