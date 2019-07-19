import React,{Component} from 'react';
import './home-page.css';
import {Link} from 'react-router-dom';
import Line from './img/Line.png';
import Frees from './video/Frees.mp4';
import Kuhna from './img/Kuhna.png';
import Line1 from './img/Line1.png';
import Ellips1e from './img/Ellips1e.png';
import Hole from './img/Hole.png';
import Vannaua from './img/Vannaua.png';
import Gray2 from './img/Gray2.png';
import Divanuui from './img/Divanuui.png';
import Krovatit from './img/Krovatit.png';
import Matrasci from './img/Matrasci.png';
class HomePage extends Component{
    componentDidMount(){
      window.scrollTo(0,0);
    }
    render(){
        return(
            <div>
            <div className="home_page_css_back">
                    <h1 className="home_page_h1_one">СОЗДАЕМ ЭКСКЛЮЗИВНУЮ МЕБЕЛЬ С 2000 ГОДА</h1>
                    <h2 className="home_page_h2_one">Мы изготавливаем мебель в Алматы. Наша производственная площадь - более 8.000 кв.м.<br className="dudte2"/> За 19 лет работы мы наладили собственные поставки мебельной фурнитуры из Европы.<br className="dudte2"/> Мы - эксперты в мебельном бизнесе. Делайте правильный выбор </h2>
                    <Link to="/contact"><p className="p_align_button_maihomen"><button>Оставить заявку</button></p></Link>
            </div>
            <main>
                <aside className="aside_forline_text">
                    <div className="aside_img_one11"><img src={Line} alt="freestyle"/></div>
                    <div className="aside_forp_xte1"><p>Наши мастера обеспечены всем необходимым оборудованием и материалами для мебельного производства. И меют богатый опыт созданий уникальных образцов моделей различных стилей.</p></div>
                </aside>
                <section className="aside_forp_xte1_fathervid">
                <video className="aside_forp_xte1_videos1" controls>
                        <source src={Frees} type="video/mp4"/>
                </video>
                <div className="firth3teg_in_homepage2">
                <h3>ИЗГОТОВЛЕНИЕ ДИЗАЙНЕРСКОЙ МЕБЕЛИ</h3>
                <p className="firth3teg_in_homepage222">Воплотим в жизнь Ваш проект интерьера мечты</p>
                <Link to="/contact"><p className="firth3teg_in_homepage3333"><button>Консультация дизайнера</button></p></Link>
                </div>
                </section>
                <section className="mebel_na_zakaz_homepage">
                    <h1>МЕБЕЛЬ НА ЗАКАЗ</h1>
                    <div className="flex_div_kuhnia_homepage">
                            <div className="flex_div_kuhnia_immg"><img src={Kuhna} alt="freestyle"/></div>
                            <div className="flex_div_kuhniah22"><h2>Кухни</h2><img className="line1_png_formain" src={Line1}/><br/><img className="ellipse_png_formain"  src={Ellips1e}/></div>
                            <div className="flex_div_kuhniah22221"><h3> Кухня "Florence"</h3>
                                <p className="text_div_kuhna_1">У этой кухни классическая оболочка, и современное технологичное сердце.</p>
                                <p className="text_div_kuhna_1">Взгляд на традиции, эксклюзивность и изящество.</p>
                                <p className="text_div_kuhna_2">Кухня Florence поражает аристократичным и выдержанным оформлением.</p>
                            </div>
                    </div>
                    <div className="flex_div_kuhnia_homepage1">
                    <div className="right_to_left_div_hole"><h3> Гостинная "Элегия".</h3>
                                <p className="text_div_kuhna_1">Создаем дизайнерские решения гостиных в ритме жизни современных семей.</p>
                                
                            </div>
                            <div className="oracle_dotahref1"><h2>Гостинные</h2><img className="latin_lane_for_underline" src={Line1}/><br/><img className="sharik_vniz_for_hole"  src={Ellips1e}/></div>
                            <div className="flex_div_kuhnia_immg"><img src={Hole} alt="freestyle"/></div>    
                    </div>
                    <div className="roof_for_last_one_rei19">
                    <div className="flex_div_kuhnia_immg"><img src={Gray2} alt="freestyle"/></div> 
                    <div className="oracle_dotahref1"><h2>Спальни</h2><img className="latin_lane_for_underline" src={Line1}/><br/><img className="sharik_vniz_for_hole"  src={Ellips1e}/></div> 
                    <div className="fixedlasonepropblecm"><h3> Спальня "Moris".</h3>
                                <p className="text_div_kuhna_1">Итальянский дизайн, четкие линии и натуральные текстуры- это и есть гармоничное сочетание высокого дизайна и комфорта.</p> 
                            </div>         
                    </div>
                    <div className="flex_div_kuhnia_homepage1">
                    <div className="right_to_left_div_hole"><h3> Ванная "Асти".</h3>
                                <p className="text_div_kuhna_1">Место уединения и максимального комфорта. Новые проекты эргономичных и дизайнерских решений ванных комнат.</p>   
                            </div>
                            <div className="oracle_dotahref1"><h2>Ванные</h2><img className="latin_lane_for_underline" src={Line1}/><br/><img className="sharik_vniz_for_hole"  src={Ellips1e}/></div>
                            <div className="flex_div_kuhnia_immg"><img src={Vannaua} alt="freestyle"/></div>    
                    </div>
                    <Link to="/contact"><p className="p_bottom_raschitat_buttons"><button>Расчитать стоимость</button></p></Link>
                </section>
                <section className="mebel_na_zakaz_homepage">
                <h1>МЕБЕЛЬ ИЗ ИТАЛИИ</h1>
                        <div className="flex_for_divani_matraci">
                            <div className="flex_for_divanielement1">
                                <h4>Диваны</h4>
                                <img src={Divanuui} alt=""/>
                            </div>
                            <div className="flex_for_divanielement2"><h4>Матрасы</h4>
                                <img src={Matrasci} alt=""/>
                                </div>
                            <div className="flex_for_divanielement3"><h4>Кровати</h4>
                                <img src={Krovatit} alt=""/>
                                </div>
                        </div>
                </section>
            </main>
       </div>
        )
    }
}

export default HomePage