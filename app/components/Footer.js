"use strict";
import React from 'react'


const Footer = ({center}) => (
    <footer id="contact">
        <div class="content-wrap">
            <h2>Let's Keep in Touch!</h2>
            <div class="contact-info">
                <a href="mailto:JacobFeinberg92@gmail.com">
                    <i aria-hidden class="far fa-envelope fa-3x" title="Email Jacob at JacobFeinberg92@gmail.com"></i>
                    <span class="sr-only">Email Jacob at JacobFeinberg92@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/jacobfeinberg92/" target="_blank">
                    <i aria-hidden class="fab fa-linkedin fa-3x" title="View Jacob's LinkedIn"></i>
                    <span class="sr-only">View Jacob's LinkedIn</span>
                </a>
            </div>
            <p>Copyright 2017 by Jacob Feinberg</p>
        </div>
    </footer>
);


export default Footer;