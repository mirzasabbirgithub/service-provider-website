import React from 'react';
import './Footer.css';
const Footer = () => {
          const today = new Date();
          const year = today.getFullYear();
          return (
                    <footer className=' text-center text-white mt-2'>
                              <h3>Copyright &copy; {year} by Dr. Habib Ahmed</h3>
                    </footer>
          );
};

export default Footer;