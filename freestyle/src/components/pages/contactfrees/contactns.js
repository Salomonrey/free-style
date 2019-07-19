import React,{Component} from 'react';
import './contactns.css';
import Elli121pse from './img/Elli121pse.png'
import axios from 'axios';
import { awaitExpression } from '@babel/types';
class Contactns extends Component{
    constructor(props){
        super(props)
        this.state={
            phonenumbercustomer:'',
            namecustomer:''
        }
    }
    componentDidMount(){
        window.scrollTo(0,0);
      }
      phoneandnamecustomer(e){
          this.setState({
              [e.target.name]:e.target.value
          })
        
      }
      butonforsendcustomer(e){
        document.getElementById('truesught_gem').value = "";
        document.getElementById('truesught_gem1').value = "";
        axios.post("http://localhost:1338/api/sendmail",{number:this.state.phonenumbercustomer,name:this.state.namecustomer})
        .then(response=>{
            console.log(response.data)
           alert('Ожидайте звонка')
        })
      }
    render(){

        return(
            <main>
            <div className="contacts_1112main_content1221"></div>
                <section className="flexbox_forcontact_forma97">
                        <div className="arteria_flexboxa817">
                            <h1>Оставьте Ваш номер телефона</h1>
                            <h3>и закажите мебель мечты</h3>
                        </div>
                        <div className="forn_fort_fromcont1">
                            <form className="forn_fort_fromcont">
                                <div className="inpit_center_mode1">
                                <input id="truesught_gem" value={this.state.phonenumbercustomer} name="phonenumbercustomer" onChange={(e)=>{this.phoneandnamecustomer(e)}} className="forn_fort_fromcont_inp1" placeholder="+7 (___) ___ __ __" />
                                <input id="truesught_gem1" value={this.state.namecustomer} name="namecustomer" onChange={(e)=>{this.phoneandnamecustomer(e)}} className="forn_fort_fromcont_inp112" placeholder="Ваше имя*"/>
                                <p className="forn_fort_fromcont_btn1"><button type="button" onClick={(e)=>{this.butonforsendcustomer(e)}}>Отправить заявку</button></p>
                                </div>
                                <p className="forn_fort_fromcont_otn1">*Перезвоним Вам в течении нескольких минут</p>
                            </form>
                        </div>
                </section>
                <section className="difffh2h2h21xacr">
                    <h2>Наши контакты</h2>
                    <div className="difffh2h2h21xacr12">
                        <div className="difffh2h2h21xacr12s">
                          <p className="text_01_for_cont">СК “Жибек Жолы”</p>  
                          <p className="text_02_for_cont">ул. Жибек Жолы 135/10,<br/> 4 этаж, бутик D23-24-25-26<br/> Тел. +7(705)-672-22-66<br/> email: jibek-joly@free-style.kz</p>
                        </div>    
                        <div className="difffh2h2h21xacr121s">
                        <p className="text_01_for_cont"> ТД “ARMADA”</p>  
                          <p className="text_02_for_cont">ул. Кабдолова 10,<br/> Блок 3, бутик 16<br/> Тел. +7(707)-833-71-23<br/> email: armada@free-style.kz</p>
                        </div>
                    </div>    
                </section>
            <section className="nash_ofic_lichshe1">
              <h4>Наш офис</h4> 
              <div className="nash_ofic_lichshe1div">
                  <div><p>Тел. +7 (727)-294-14-15</p></div>
                    <div><img src={Elli121pse}/></div>
                  <div><p>info@free-style.kz</p></div>

              </div>
              <p className="nash_ofic_lichshe1divppp">г.Алматы, ул.Ратушного 78</p>
            </section>
            </main>
        )
    }
}
export default Contactns;

