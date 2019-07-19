import React,{Component} from 'react';
import './blogpagess.css';
import axios from 'axios';
import Header from '../headertop';
import Footer from '../footerbottom';
class Blogpagess extends Component{
    componentDidMount(){
        window.scrollTo(0,0);
        const {
            match: { params }
          } = this.props;
        axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("cool-jwt");
    // eslint-disable-next-line
      axios
        .post("http://localhost:1338/api/post", { id: params.postID })
        .then(response => {
          if (response.data[0] == null) {
            this.props.history.push("/");
          } else {
            let discription_div = document.createElement("div");
            let div_for_article = document.createElement("div");
            let div_title = document.createElement("div");
            div_title.classList.add("add_div_title");
            discription_div.innerHTML = response.data[0].description;
            discription_div.classList.add("add_div_disc_rip");
            div_title.innerHTML = response.data[0].title;
            div_for_article.innerHTML = response.data[0].body;
            div_for_article.classList.add("pooor_body_mainclass");
            div_for_article.id = response.data[0]._id;
            document.getElementById('fortune_fortune_tutle').appendChild(div_title);
            document.getElementById('fortune_fortune_discrue').appendChild(discription_div);
            document.getElementById("testdata").appendChild(div_for_article);
            div_for_article.classList.add("Game_of_throne");
          }
        });
  
  
    }
    render(){

        return(
            <React.Fragment>
            <Header/>
            <div className="for_artical_bloger_open">
     <h1  id="fortune_fortune_tutle" className="bloh_page_h1_one"></h1>
               <h2 id="fortune_fortune_discrue" className="bloh_page_h2_one"></h2>
   </div>
   <div id="testdata">

        </div>
            <Footer/>
           </React.Fragment>    
        )
    }
}
export default Blogpagess;
