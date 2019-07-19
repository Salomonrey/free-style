import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './headertop.css';
import Logo from './img/Logo.png';
import Menuphone from './img/Menuphone.png';
class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            lastScrollY :0
        }
    }
    componentDidMount() {
        window.addEventListener("resize", ()=>{
            document.getElementById('hodor_holdthedoor1').classList.add("hodor_holdthedoor")
        });
          
        window.addEventListener('scroll', ()=>{
            this.setState({
                lastScrollY: window.scrollY})
                if(this.state.lastScrollY>18){
                    document.getElementById('main_contetn_header').classList.add('add_class_fro_scroll1');
                    document.getElementById('main_contetn_header2').classList.add('add_class_fro_scroll2');
                    document.getElementById('main_contetn_header3').classList.add('add_class_fro_scroll3');
                    document.getElementById('main_contetn_header4').classList.add('add_class_fro_scroll4');
                    document.getElementById('main_contetn_header5').classList.add('add_class_fro_scroll5');
                }
                else{
                    document.getElementById('main_contetn_header').classList.remove('add_class_fro_scroll1');
                    document.getElementById('main_contetn_header2').classList.remove('add_class_fro_scroll2');
                    document.getElementById('main_contetn_header3').classList.remove('add_class_fro_scroll3');
                    document.getElementById('main_contetn_header4').classList.remove('add_class_fro_scroll4');
                    document.getElementById('main_contetn_header5').classList.remove('add_class_fro_scroll5');
                }
        })
      }
      setmenuburgermak(e){
          if(document.getElementById('hodor_holdthedoor1').classList.contains('hodor_holdthedoor31')){
            document.getElementById('hodor_holdthedoor1').classList.remove("hodor_holdthedoor31")
            document.getElementById('hodor_holdthedoor1').classList.add('hodor_holdthedoor')
          }
          else{

        
        document.getElementById('hodor_holdthedoor1').classList.remove('hodor_holdthedoor')
        document.getElementById('hodor_holdthedoor1').classList.add("hodor_holdthedoor31")  }
      }
    render(){
    return(
        <header id="main_contetn_header" className="header_top_for_all">
            <div id="main_contetn_header0" className="header_top_for_all111">
            <div id="main_contetn_header3" className="link_hiden_logo_phone"><Link to="/"><h1>freestyle studio</h1></Link></div>
             <Link id="main_contetn_header2" to="/"><div className="div_img_logo"><img src={Logo} alt=""/></div></Link>  
             <nav className="navigation_menu_out">
                 <ul id="main_contetn_header4"  className="nav_link_divul">
                     <li>
                         <Link to = "/">
                            главная
                         </Link>
                     </li>
                     <li className="margin-left_one_zise">
                         <Link to = "/blog">
                             блог
                         </Link>
                     </li>
                     <li className="margin-left_one_zise">
                     <Link to = "/aboutus">
                             о нас
                         </Link>
                     </li>
                     <li className="margin-left_one_zise">
                     <Link to = "/contact">
                            контакты
                         </Link>
                     </li>
                 </ul>
             </nav>
             
             <div className="div_button_for_callbeck" id="main_contetn_header5"><a className="telefon_nubmer" href="tel:+77056722266"><button>+7 705 672 22 66</button></a></div>
             <div className="disp_menu_for_phone" onClick={(e)=>{this.setmenuburgermak(e)}}><img src={Menuphone} alt=""/></div>  
             </div>
             <div id="hodor_holdthedoor1" className="hodor_holdthedoor">
             <nav className="hodor_holdthedoor13">
                 <ul id=""  className="">
                     <li>
                         <Link to = "/">
                            главная
                         </Link>
                     </li>
                     <li className="">
                         <Link to = "/blog">
                             блог
                         </Link>
                     </li>
                     <li className="">
                     <Link to = "/aboutus">
                             о нас
                         </Link>
                     </li>
                     <li className="">
                     <Link to = "/contact">
                            контакты
                         </Link>
                     </li>
                 </ul>
             </nav>

             </div>
        </header>
      
    )
    }
}
export default Header;