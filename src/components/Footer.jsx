import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '1em 0', background: '#333', color: '#fff' }}>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1em', color: '#fff' }}>
                <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1em', color: '#fff' }}>
                <FaLinkedin size={30} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1em', color: '#fff' }}>
                <FaTwitter size={30} />
            </a>
        </footer>
    );
};

export default Footer;
