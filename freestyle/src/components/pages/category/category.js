import React, { Component } from "react";
import axios from "axios";
import './category.css';
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massivestati: [],
      errors: [],
      new_name: "",
      new_discription: ""
    };
  }
  componentDidMount() {
    if (
      // eslint-disable-next-line
      localStorage.getItem("cool-jwt") == "undefined" ||
      // eslint-disable-next-line
      localStorage.getItem("cool-jwt") == undefined
    ) {
      this.props.history.replace("/");
    } else {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("cool-jwt");
      this.refresh_sel();
    }
  }
  selectcat(e) {
    var id = document.getElementById("cat_select").value;
    axios
      .post("http://localhost:1338/api/category", { name: id })
      .then(response => {
        var cat_div = document.getElementById("cat_div_content");
        cat_div.innerHTML = "";
        let div = document.createElement("div");
        div.id = response.data[0]._id;
        cat_div.appendChild(div);
        let div_info = document.createElement("div");
        div_info.id = "cat_info";
        this.create_p(div_info, "Название - " + response.data[0].name);
        this.create_p(div_info, "Описание - " + response.data[0].description);
        div.appendChild(div_info);
        var button = this.create_button("Удалить");
        button.addEventListener("click", e => {
          console.log(e.target.parentNode.id);
          axios
            .post("http://localhost:1338/api/deletecategory", {
              id: e.target.parentNode.id
            })
            .then(response => {
              cat_div.innerHTML = "";
              this.refresh_sel();
            });
        });
        div.appendChild(button);
        button = this.create_button("Изменить");
        button.addEventListener("click", e => {
          this.create_input("New name", "upd_cat_name", div_info);
          this.create_input("New description", "upd_cat_desc", div_info);
          var button_cancel = this.create_button("Отмена");
          button_cancel.addEventListener("click", e => {
            this.selectcat();
          });
          var button_change = this.create_button("Изменить");
          button_change.addEventListener("click", e => {
            var cat_name = document.getElementById("upd_cat_name").value;
            var desc = document.getElementById("upd_cat_desc").value;
            axios
              .post("http://localhost:1338/api/updatecategory", {
                id: div_info.parentNode.id,
                name: cat_name,
                description: desc
              })
              .then(response => {
                cat_div.innerHTML = "";
                this.refresh_sel();
              });
          });
          div_info.appendChild(button_cancel);
          div_info.appendChild(button_change);
        });

        div.appendChild(button);
        this.create_ul(div, response.data[0].subcategory);
        this.create_input("Название подкотегории", "new_subcat_name", div);
        this.create_input("Описание подкотигории", "new_subcat_desc", div);
        button = this.create_button("Add");
        button.addEventListener("click", e => {
          var name = document.getElementById("new_subcat_name").value;
          var desc = document.getElementById("new_subcat_desc").value;
          var cat_name = document.getElementById("cat_select").value;
          axios
            .post("http://localhost:1338/api/addsubcategory", {
              cat_name: cat_name,
              name: name,
              description: desc
            })
            .then(response => {
              this.selectcat();
            });
        });
        div.appendChild(button);
      });
  }
  create_select(data) {
    let select = document.createElement("select");
    select.id = "cat_select";
    for (var i = 0; i < data.length; i++) {
      let option = document.createElement("option");
      option.id = data[i]._id;
      option.value = data[i].name;
      option.innerHTML = data[i].name;
      select.appendChild(option);
    }
    return select;
  }
  create_p(parent, text) {
    var p_cat = document.createElement("p");
    p_cat.innerHTML = text;
    parent.appendChild(p_cat);
  }
  create_ul(parent, data) {
    var ul = document.createElement("ul");
    ul.innerHTML = "Подкатегории:";
    for (var i = 0; i < data.length; i++) {
      let li = document.createElement("li");
      li.id = data[i].name;
      li.innerHTML = "Название:" + data[i].name + " Описание:" + data[i].name;
      var button = this.create_button("Delete");
      button.addEventListener("click", e => {
        var cat_name = document.getElementById("cat_select").value;
        axios
          .post("http://localhost:1338/api/deletesubcategory", {
            cat_name: cat_name,
            name: li.id
          })
          .then(response => {
            this.selectcat();
          });
      });
      li.appendChild(button);
      ul.appendChild(li);
    }
    parent.appendChild(ul);
  }

  create_button(text) {
    var button = document.createElement("button");
    button.innerHTML = text;
    return button;
  }

  create_input(text, id, parent) {
    var input = document.createElement("input");
    input.id = id;
    input.placeholder = text;
    parent.appendChild(input);
  }

  onchangerfunk(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addcat() {
    var jsonPost = {
      name: this.state.new_name,
      description: this.state.new_discription
    };
    axios
      .post("http://localhost:1338/api/addcategory", jsonPost)
      .then(response => {
        this.refresh_sel();
      });
  }

  refresh_sel() {
    axios.get("http://localhost:1338/api/categories").then(response => {
      var select = this.create_select(response.data);
      select.id = "cat_select";
      document.getElementById("cat_select_content").innerHTML = "";
      document.getElementById("cat_select_content").appendChild(select);
    });
  }
  removejwt() {
    this.props.history.replace("/admin-panel");
  }
  removejwt121(){
    this.props.history.push("/constructor/new");
  }
  render() {
    return (
      
      <div id="main">
         <style>{"body { background-color:#F1F1F1; }"}</style>
         <h1 className="logo_admin1">
          Sal<span>Ger</span>.CMS
        </h1>
        <button
            className="button_admin_panel"
            onClick={this.removejwt.bind(this)}
            type="button"
          >
            Назад
          </button>
          <button
            className="button_admin_panel"
            onClick={this.removejwt121.bind(this)}
            type="button"
          >
            Конструктор
          </button>
      <div id="main_meni_cat">
        <div id="new_category">
          <input
            name="new_name"
            placeholder="Название категории"
            id="new_cat_name"
            value={this.state.new_name}
            onChange={e => {
              this.onchangerfunk(e);
            }}
          />
          <br />
          <input
            name="new_discription"
            placeholder="Краткое описание категории"
            id="new_desc"
            value={this.state.new_discription}
            onChange={e => {
              this.onchangerfunk(e);
            }}
          />
         <p> <button
            type="button"
            onClick={() => {
              this.addcat();
            }}
          >
            Добавить
          </button></p>
        </div>
        <div id="cat_select_content" />
        <button
          type="button"
          onClick={() => {
            this.selectcat();
          }}
        >
          Выбрать
        </button>
        <div id="cat_div_content" />
        </div>
      </div>
    );
  }
}
export default Category;
