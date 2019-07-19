import React, { Component } from "react";
import axios from "axios";
import "./admin-panel.css";
class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massivestati: [],
      errors: [],
      title: "",
      discription: "",
      file: null,
      id: 1
    };
  }
  componentDidMount() {
    
    if (
      // eslint-disable-next-line
      localStorage.getItem("cool-jwt") == "undefined" ||
      // eslint-disable-next-line
      localStorage.getItem("cool-jwt") == undefined
    ) {
      this.props.history.push("/");
    }
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("cool-jwt");
    axios
      .post("http://localhost:1338/api/posts")
      .then(response => {
        console.log(response);
        for (let i = 0; i <= response.data.length; i++) {
          let discription_div = document.createElement("div");
          let button_changerrr = document.createElement("button");
          let button_delete_article = document.createElement("button");
          let div_for_article = document.createElement("div");
          let div_title = document.createElement("div");
          div_title.classList.add("add_div_title");
          discription_div.innerHTML = response.data[i].description;
          discription_div.classList.add("add_div_disc_rip");
          button_changerrr.innerHTML = "Изменить статью";
          button_changerrr.classList.add("button_change_delete_tog");
          button_delete_article.innerHTML = "Удалить статью";
          button_delete_article.classList.add("button_change_delete_tog");
          div_title.innerHTML = response.data[i].title;
          div_for_article.innerHTML = response.data[i].body;
          div_for_article.id = response.data[i]._id;
          div_for_article.prepend(discription_div);
          div_for_article.prepend(div_title);
          div_for_article.appendChild(button_changerrr);
          div_for_article.appendChild(button_delete_article);
          document.getElementById("testdata").appendChild(div_for_article);
          div_for_article.classList.add("Game_of_throne");
          button_changerrr.addEventListener("click", e => {
            this.props.history.push(
              "/constructor/" + e.target.parentNode.id
            );
          });
          button_delete_article.addEventListener("click", e => {
            console.log(e.target.parentNode.id);
            if (window.confirm("Действительно удалить?")) {
              axios
                .post("http://localhost:1338/api/delete", {
                  id: e.target.parentNode.id
                })
                .then(response => {});
              e.target.parentNode.remove();
            }
          });
        }
      })
      .catch(error => {
        this.setState({
          errors: error
        });
      });
  }
  addimgforchange(img) {
    let imgbutton_delete = document.createElement("button");
    let div_img = document.createElement("div");
    let imgbutton_ontop = document.createElement("button");
    let imgbutton_onbottom = document.createElement("button");
    imgbutton_delete.classList.add("Remove_button");
    imgbutton_ontop.classList.add("Remove_button");
    imgbutton_onbottom.classList.add("Remove_button");
    imgbutton_delete.innerHTML = "Удалить";
    imgbutton_ontop.innerHTML = "onTop";
    imgbutton_onbottom.innerHTML = "onBottom";
    div_img.id = this.state.id;
    this.setState({
      id: this.state.id + 1
    });
    imgbutton_delete.addEventListener("click", e => {
      e.preventDefault();
      e.target.parentNode.remove();
      for (let i = e.target.parentNode.id; i <= this.state.id; i++) {
        let lm = document.getElementById(i);
        if (lm != null) {
          lm.id = lm.id - 1;
        }
      }
      this.setState({
        id: this.state.id - 1
      });
    });
    imgbutton_ontop.addEventListener("click", e => {
      var elemnts1 = e.target.parentNode.id;
      var elemnts2 = parseInt(e.target.parentNode.id) - 1;
      // eslint-disable-next-line
      if (elemnts1 == 1) {
        return console.log("123");
      }
      var success = document
        .getElementById("main_content")
        .insertBefore(
          document.getElementById(elemnts1),
          document.getElementById(elemnts2)
        );
      if (success) {
        document.getElementById(elemnts2).id =
          parseInt(document.getElementById(elemnts2).id) + 1;
        document.getElementById(elemnts1).id =
          parseInt(document.getElementById(elemnts1).id) - 1;
      }
    });
    imgbutton_onbottom.addEventListener("click", e => {
      var elemnts1 = e.target.parentNode.id;
      var elemnts2 = parseInt(e.target.parentNode.id) + 1;
      // eslint-disable-next-line
      if (elemnts1 == this.state.id - 1) {
        return console.log("123");
      }
      var success = document
        .getElementById("main_content")
        .insertBefore(
          document.getElementById(elemnts2),
          document.getElementById(elemnts1)
        );
      if (success) {
        document.getElementById(elemnts1).id =
          parseInt(document.getElementById(elemnts1).id) + 1;
        document.getElementById(elemnts2).id =
          parseInt(document.getElementById(elemnts2).id) - 1;
      }
    });
    div_img.appendChild(img);
    div_img.appendChild(imgbutton_delete);
    div_img.appendChild(imgbutton_ontop);
    div_img.appendChild(imgbutton_onbottom);
    img.classList.add("class_imgaes");
    document.getElementById("main_content").appendChild(div_img);
  }
  removejwt() {
    localStorage.removeItem("cool-jwt");
    this.props.history.replace("/");
  }
  removejwt11(){
    this.props.history.push("/category");
  }
  createnewarticle(e) {
    this.props.history.replace("/constructor/new");
  }
  render() {
    return (
      <div className="div_panel_admin">
        <style>{"body { background-color:#F1F1F1; }"}</style>
        <h1 className="logo_admin1">
          Sal<span>Ger</span>.CMS
        </h1>
        <button
          className="button_admin_panel"
          onClick={this.removejwt.bind(this)}
          type="button"
        >
          Выход
        </button>
        <button
            className="button_admin_panel"
            onClick={this.removejwt11.bind(this)}
            type="button"
          >
            Категории
          </button>
        <div id="testdata">
          <h2 className="text_for_catalog">Весь каталог статей</h2>
        </div>
        <button
          className="button_for_new_article"
          onClick={e => {
            this.createnewarticle(e);
          }}
        >
          Добавить новую статью
        </button>
      </div>
    );
  }
}
export default AdminPanel;
