import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './footerbottom.css';

import FB from './img/FB.png';
import IN from './img/IN.png';
import PT from './img/PT.png';
const Footer = ()=>{
    return(
        <footer className="footer_main_div_forall1">
                <div className="bottom_footer_panelnav1">
                    <nav className="div_for_ul_fronav1">
                        <ul className="ul_fronav_footer1">
                            <li >
                                <Link to ="/">главная</Link>
                            </li>
                            <li className="ul_fronav_footer123_li">
                                <Link to ="/blog">блог</Link>
                            </li>
                            <li className="ul_fronav_footer123_li">
                            <Link to = "/aboutus">
                             о нас
                         </Link>
                            </li>
                             <li className="ul_fronav_footer123_li">
                             <Link to = "/contact">
                            контакты
                         </Link>
                              </li>
                        </ul>
                    </nav>
                    <div className="bottom_gooter_phone1"><a href="tel:+77056722266">+7 705 672 22 66</a></div>
                </div>
                <div className="Logo_link_bottom_f1oter"><div><Link to="/">freestyle studio</Link></div></div>
                <div className="last_div_for_fooe12ter">
                    <div className="div_for_projector_g"><h3>сайт сделан командой<br/> <span>Business Projector</span></h3></div>
                    <div className="div_for_imf_ins">
                        <a href=""><img className='div_for_imf_feds2as' src={FB} alt=""/></a><a href=""><img className='div_for_imf_ins2as' src={IN} alt=""/></a><a href=""><img className='div_for_imf_prints' src={PT} alt=""/></a></div>
                </div>
        </footer>
    )
}
export default Footer;