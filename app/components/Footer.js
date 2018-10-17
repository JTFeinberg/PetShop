"use strict";
import React from 'react'

const Footer = () => (
    <footer id="contact">
            <h2>Let's Keep in Touch!</h2>
            <div class="contact-info">
                <a href="mailto:JacobFeinberg92@gmail.com">
                    <i aria-hidden class="far fa-envelope fa-3x" title="Email Jacob at JacobFeinberg92@gmail.com"></i>
                    <span class="sr-only">Email Jacob at JacobFeinberg92@gmail.com</span>
                </a>
                <a href="https://www.facebook.com/aspca/" target="_blank">
                    <i aria-hidden class="fab fa-facebook-square fa-3x" title="View Adoption Center's Facebook Page"></i>
                    <span class="sr-only">View Adoption Center's Facebook Page</span>
                </a>
                <a href="https://twitter.com/ASPCA" target="_blank">
                    <i aria-hidden class="fab fa-twitter-square fa-3x" title="View Adoption Center's Twitter Page"></i>
                    <span class="sr-only">View Adoption Center's Twitter Page</span>
                </a>
                <a href="https://www.instagram.com/bambu.the.cat/?hl=en" target="_blank">
                    <i aria-hidden class="fab fa-instagram fa-3x" title="View Adoption Center's Instagram"></i>
                    <span class="sr-only">View Adoption Center's Instagram</span>
                </a>
            </div>
            <p>Copyright 2018 by Jacob Feinberg</p>
    </footer>
);

export default Footer;
