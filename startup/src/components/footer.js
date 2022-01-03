import React from 'react';
import '../style/footer.css';

function Footer() {
    return (
        <div className="Footer">
            <footer>
                <div class="layout">
                    <div class="footer-wrapper clearfix">
                        <div class="grid-3 footer-logo">
                            <a href="/"><img alt="html layout logo" src=
                                "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"></img></a>
                            <p class="footer-text">Lorem ipsum dolor sit amet, consect tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven.</p>
                        </div>
                        <div class="grid-3">
                            <p class="footer-heading">Liens</p>
                            <ul class="footermenu">
                                <li>
                                    <a href="/">Accueil</a>
                                </li>
                                <li>
                                    <a href="/produit">Nos produits</a>
                                </li>
                                <li>
                                    <a href="/equipe">Notre équipe</a>
                                </li>
                            </ul>
                        </div>
                        <div class="grid-3">
                            <p class="footer-heading">recent posts</p>
                            <ul class="footerblog">
                                <li>
                                    <a href="#">The Green Fields of Spring</a>
                                    <p>13th Jun 2014</p>
                                </li>
                                <li>
                                    <a href="#">This is a Video Post</a>
                                    <p>18th Nov 2014</p>
                                </li>
                                <li>
                                    <a href="#">Satisfaction Lies in the Effort</a>
                                    <p>13th Jun 2014</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;