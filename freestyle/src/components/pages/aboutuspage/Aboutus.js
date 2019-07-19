import React,{Component} from 'react';
import './Aboutus.css';
import {Link} from 'react-router-dom';
// import Frees1 from './video/Frees1.mp4';
import Linnia from './img/Linnia.png';
class Aboutus extends Component{
    
    componentDidMount(){
        window.scrollTo(0,0);
      }
    render(){

        return(
            <div>
            <div id="matroskin_kot_onas" className="blog_1112main_content1221"></div>
                <div className="flex_blox_for_abousu">

                    <div className="flex_blox_for_abousu_textis">
                        <h1>
                            О компании
                        </h1>
                        <p className="nameofsongoffight"><img src={Linnia}/></p>
                        <p className="nameofsongoffight11">
                        Компания «Free Style» обладает необходимыми производственными мощностями и самым современным оборудованием, позволяющим проводить высокоточную обработку материалов, и в короткий срок сдавать продукцию заказчику. Весь производственный процесс начиная с работы над проектом мебели и заканчивая монтажом, отлажен до мелочей.
                        </p>
                        <p className="nameofsongoffight12">
                        Работая более 20 лет мы приобрели не только опыт, но и высокое мастерство исполнения и для нас важно поддерживать нашу высокую репутацию. В числе работ, которыми наша компания по праву гордится, имеются интерьеры под ключ домов и квартир, апартаментов и известных ресторанов и магазинов. Среди наших заказчиков есть люди, которые известны всей стране.
                        </p>
                       <Link to="/contact"> <p className="nameofsongoffight"><button>Заказать звонок</button></p></Link>
                    </div>
                </div>
            
            </div>
        )
    }
}
export default Aboutus;

