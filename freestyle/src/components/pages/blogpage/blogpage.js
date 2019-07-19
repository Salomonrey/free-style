import React,{Component} from 'react';
import './blogpage.css';
import axios from 'axios';
import $ from 'jquery';
import Header from '../headertop';
import Footer from '../footerbottom';
import { throwStatement } from '@babel/types';

class Blogpage extends Component{
    constructor(props){
        super(props)
        this.state={
            elementskateg:[],
            postyforblogacttiv:[]
        }
    }
    componentDidMount(){
                window.scrollTo(0,0);
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("cool-jwt");
              axios.get("/api/categories")
              .then(response=>{
                  this.setState({
                      elementskateg:response.data
                  })
                  console.log(this.state.elementskateg)
                  let kirkland =  document.getElementsByName('1');
                     $(kirkland).click()
       
              })     
      }
      ffffforrrtuna(e){
        document.getElementById("div_for_subcategory").innerHTML="";
       $('.buttondi_for_find').removeClass('afterclick_button_class1') &&  $('.buttondi_for_find').addClass('normal_button_class1')
       $(e.target).addClass('afterclick_button_class1') &&  $(e.target).removeClass('normal_button_class1')
        for(let i=0; i<this.state.elementskateg[e.target.id].subcategory.length; i++){
            let div_fro_sub_sub_cat = document.createElement('div');
            let obsahxnudiv = document.createElement('div');
            div_fro_sub_sub_cat.innerHTML = this.state.elementskateg[e.target.id].subcategory[i].name;
            div_fro_sub_sub_cat.classList.add("classfor_subtitle_for_sucat");
            let h210201 = document.createElement('button');
            h210201.innerHTML="Все статьи тематики";
            h210201.classList.add("hookfor_our_posts_for_link");
            axios.post("/api/posts",{sub_cat_name:this.state.elementskateg[e.target.id].subcategory[i].name, cat_name:this.state.elementskateg[e.target.id].name})
            .then(response=>{
               
               for(let i =0; i<response.data.length; i++){
               
                   let divchik001 = document.createElement('div');
                   obsahxnudiv.classList.add("div_for_img_posts_an");
                   divchik001.classList.add("div_for_img_posts_an_single");
                   let imgg001 = document.createElement('img');
                   let h2001 = document.createElement('p');
                   h2001.classList.add("hookfor_our_posts_title");
                   let h3001 = document.createElement('p');
                   h3001.classList.add("hookfor_our_posts_discr");
                   h2001.innerHTML=response.data[i].title;
                   h3001.innerHTML=response.data[i].description;
                   imgg001.src = "http://localhost:1338/"+response.data[i].main_foto;
                    divchik001.id =response.data[i]._id;
                   divchik001.appendChild(imgg001);
                   divchik001.appendChild(h2001);
                   divchik001.appendChild(h3001);
                   if (i>3 || i==3){
                    divchik001.classList.add("hidden_element01")
                }
                   obsahxnudiv.appendChild(divchik001);
                   div_fro_sub_sub_cat.appendChild(obsahxnudiv)

                      h210201.addEventListener('click',()=>{
                divchik001.classList.remove("hidden_element01")
               })
               divchik001.addEventListener('click',(e)=>{
                this.props.history.push(
                    "/post/" + e.target.parentNode.id
                  );   
               })
               }
            })
            div_fro_sub_sub_cat.appendChild(h210201)
            document.getElementById("div_for_subcategory").appendChild(div_fro_sub_sub_cat)
            
        }
      }
  
    render(){
        
      const {elementskateg} =  this.state;
        return(
            <React.Fragment>
            <Header/>
            <div>
        <div className="blog_main_content">
                <h1 className="wordtext_h1_one">Блог о мебели и дизайне</h1>
                <h2 className="wordtext_h2_one">Полезные советы и рекомендации по выбору мебели, новости и статьи<br className="dudte1"/> для всех, кто делает ремонт или увлекается дизайном интерьера</h2>
        </div>
       <main>
            
                <nav className="classfor_ullu">
                    <ul className="fotofirstlive">
                        {
                            elementskateg.map((elemnt,index)=><li  key={index}><button name={index+1} id={index} className="buttondi_for_find normal_button_class1" onClick={(e,element)=>{this.ffffforrrtuna(e,element)}}>{elemnt.name}</button></li>)
                        }
                    </ul> 
                </nav>
          
            <div id="div_for_subcategory">

            </div>
       </main>
   </div>
            <Footer/>
             </React.Fragment>
        )
    }
}
export default Blogpage;