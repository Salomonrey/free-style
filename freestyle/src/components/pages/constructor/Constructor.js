import React, { Component } from "react";
import axios from "axios";
import "./Constructor.css";
class Constructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massivestati: [],
      categories: [],
      errors: [],
      title: "",
      discription: "",
      file: null,
      main_foto:null,
      id: 1,
      namebutton: "Создать",
      changee: false,
      font: false,
      linkvalue: "",
      kategorii: "",
      podkategorii: ""
    };
  }
  async componentDidMount() {
    if (
      // eslint-disable-next-line
      localStorage.getItem("cool-jwt") == "undefined" ||
      // eslint-disable-next-line
      localStorage.getItem("cool-jwt") == undefined
    ) {
      this.props.history.replace("/");
    }

    const {
      match: { params }
    } = this.props;
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("cool-jwt");
    // eslint-disable-next-line
    if (params.postID == "new") {
      this.refresh_sel();
    } else {
      axios
        .post("http://localhost:1338/api/post", { id: params.postID })
        .then(response => {
          this.refresh_sel(response.data[0].category);
          this.create_sub_select(
            response.data[0].category,
            response.data[0].subcategory
          );
          console.log(response.data[0].main_foto)
          let img = document.createElement("img");
          img.src = "http://localhost:1338/" +response.data[0].main_foto;
          img.classList.add('mainfoto')
          this.setState({
            main_foto: response.data[0].main_foto
          });
          document.getElementById("foto").appendChild(img); 
          // eslint-disable-next-line
          if (response.data[0] == null) {
            this.props.history.replace("/");
          } else {
            this.setState({
              changee: true,
              namebutton: "Изменить статью"
            });

            let div_for_changesse = document.createElement("div");
            div_for_changesse.innerHTML = response.data[0].body;
            this.setState({
              title: response.data[0].title,
              discription: response.data[0].description
            });
            let elementos = div_for_changesse.children;
            for (let i = 0, child; (child = elementos[i]); i++) {
              // eslint-disable-next-line
              if (child.childNodes[0].tagName == "IMG") {
                this.addimgforchange(child.childNodes[0]);
              }
              // eslint-disable-next-line
              if (child.tagName == "P") {
                if (child.classList.contains("class_fonts_italica")) {
                  document.getElementById("a_2").click();
                } else if (child.classList.contains("class_fonts_bold")) {
                  document.getElementById("a_3").click();
                } else {
                  document.getElementById("a_1").click();
                }
                document.getElementById("text_aria").value = child.innerHTML;
                document.getElementById("clickbutton").click();
                document.getElementById("text_aria").value = "";
              }
            }
          }
        });
    }
  }
  addimgforchange(img) {
    let imgbutton_delete = document.createElement("button");
    let div_img = document.createElement("div");
    let imgbutton_ontop = document.createElement("button");
    let imgbutton_onbottom = document.createElement("button");
    let width_input = document.createElement("input");
    let height_input = document.createElement("input");
    width_input.classList.add("Remove_button");
    height_input.classList.add("Remove_button");
    imgbutton_delete.classList.add("Remove_button");
    imgbutton_ontop.classList.add("Remove_button");
    imgbutton_onbottom.classList.add("Remove_button");
    imgbutton_delete.innerHTML = "Удалить";
    imgbutton_ontop.innerHTML = "onTop";
    imgbutton_onbottom.innerHTML = "onBottom";
    width_input.classList.add("input_toggle");
    height_input.classList.add("input_toggle");
    width_input.setAttribute("id", "input_sizer1");
    width_input.addEventListener("change", e => {
      let sizzenn = document.getElementById("input_sizer1").value;
      if (sizzenn > 600 || sizzenn <= 0) {
        alert("Размер фото не должен привышать 600px");
      } else {
        img.classList.remove("class_imgaes");
        img.setAttribute("width", sizzenn + "px");
      }
    });
    height_input.setAttribute("id", "input_sizer2");
    height_input.addEventListener("change", e => {
      let sizzenn1 = document.getElementById("input_sizer2").value;
      if (sizzenn1 > 600) {
        alert("Размер фото не должен привышать 600px");
      } else {
        img.classList.remove("class_imgaes");
        img.setAttribute("height", sizzenn1 + "px");
      }
    });
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
    div_img.appendChild(width_input);
    div_img.appendChild(height_input);
    div_img.appendChild(imgbutton_delete);
    div_img.appendChild(imgbutton_ontop);
    div_img.appendChild(imgbutton_onbottom);
    img.classList.add("class_imgaes");
    document.getElementById("main_content").appendChild(div_img);
  }
  removejwt() {
    this.props.history.push("/admin-panel");
  }
  onclickbuttontest(e) {
    let file = this.state.file;
    let formdata = new FormData();
    formdata.append("file", file);
    axios({
      url: "http://localhost:1338/api/upload",
      method: "POST",
      headers: {
        authorization: "your token"
      },
      data: formdata
    }).then(response => {
      let imagges = document.createElement("img");
      imagges.src = "http://localhost:1338/" + response.data.path;
      this.addimgforchange(imagges);
    });
  }
  onchangerfunk(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  selectfile(e) {
    let file = e.target.files[0];
    this.setState({
      file: file
    });
  }
  selectmainfoto(e) {
    let main_foto = e.target.files[0];
    this.setState({
      main_foto: main_foto
    });
  }
  oncreatearia(e) {
    let textus = document.getElementById("text_aria").value;
    let button_change = document.createElement("button");
    let button_delete = document.createElement("button");
    let button_ontop = document.createElement("button");
    let button_onbottom = document.createElement("button");
    button_ontop.innerHTML = "onTop";
    button_onbottom.innerHTML = "onBottom";
    button_delete.innerHTML = "Удалить";
    button_change.innerHTML = "Изменить";
    button_delete.classList.add("Remove_button");
    button_change.classList.add("Remove_button");
    button_ontop.classList.add("Remove_button");
    button_onbottom.classList.add("Remove_button");
    let article = document.createElement("p");
    let classicallost = document.getElementById("text_aria").classList;
    article.classList = classicallost;
    article.id = this.state.id;
    this.setState({
      id: this.state.id + 1
    });
    button_delete.addEventListener("click", e => {
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
    button_ontop.addEventListener("click", e => {
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
    button_onbottom.addEventListener("click", e => {
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
    button_change.addEventListener("click", e => {
      article.innerHTML = "";
      let input_for_change = document.createElement("textarea");
      let button_for_change = document.createElement("button");
      button_for_change.innerHTML = "Изменить";
      button_delete.classList.add("Remove_button");
      button_change.classList.add("Remove_button");
      button_ontop.classList.add("Remove_button");
      button_onbottom.classList.add("Remove_button");
      button_for_change.classList.add("Remove_button");
      input_for_change.classList.add('dcclclddchange_button');
      input_for_change.value = textus;
      article.appendChild(input_for_change);
      article.appendChild(button_for_change);
      button_for_change.addEventListener("click", e => {
        let izmenenie = input_for_change.value;
        textus = izmenenie;
        article.innerHTML = "";
        article.innerHTML = input_for_change.value;
        article.appendChild(button_delete);
        article.appendChild(button_change);
        article.appendChild(button_ontop);
        article.appendChild(button_onbottom);
      });
    });
  
    article.innerHTML = textus;
    article.appendChild(button_delete);
    article.appendChild(button_change);
    article.appendChild(button_ontop);
    article.appendChild(button_onbottom);
    document.getElementById("main_content").appendChild(article);
  
  }
  submitallelements(e) {
    var removeone = document.getElementsByClassName("Remove_button");
    while (removeone[0]) {
      removeone[0].parentNode.removeChild(removeone[0]);
    }
    if (document.getElementById("main_content") != null) {
      var idPost = document.getElementById("main_content").innerHTML;
    }
    var jsonPost = {
      title: this.state.title,
      description: this.state.discription,
      main: idPost,
      src:  this.state.main_foto,
      category: document.getElementById("cat_select").value,
      subcategory: document.getElementById("sub_cat_select").value
    };
    if (this.state.changee) {
      jsonPost.id = this.props.match.params.postID;
      axios
        .post("http://localhost:1338/api/update", jsonPost)
        .then(response => {
          console.log(response);
          if (
            // eslint-disable-next-line
            response.status == 200 &&
            // eslint-disable-next-line
            document.getElementById("input007").value !== "" &&
            // eslint-disable-next-line
            document.getElementById("input008").value !== "" &&
            // eslint-disable-next-line
            document.getElementById("main_content").innerHTML !== ""
          ) {
            document.getElementById("main_content").innerHTML = "";
            this.props.history.replace("/admin-panel");
          } else {
            console.log("Ошибка");
          }
        });
    } else {
      axios
        .post("http://localhost:1338/api/addpost", jsonPost)
        .then(response => {
          console.log(response);
          if (
            // eslint-disable-next-line
            response.status == 200 &&
            // eslint-disable-next-line
            document.getElementById("input007").value !== "" &&
            // eslint-disable-next-line
            document.getElementById("input008").value !== "" &&
            // eslint-disable-next-line
            document.getElementById("main_content").innerHTML !== ""
          ) {
            document.getElementById("main_content").innerHTML = "";
            this.props.history.replace("/admin-panel");
          } else {
            console.log("Ошибка");
          }
        });
    }
  }
  fontsfincktion(e) {
    this.setState({
      font: this.state.value
    });
    console.log(this.state.font);
  }
  chekedonenormal(e) {
    document.getElementById("text_aria").classList.add("class_fonts_normal");
    document.getElementById("text_aria").classList.remove("class_fonts_bold");
    document
      .getElementById("text_aria")
      .classList.remove("class_fonts_italica");
  }
  chekedoneitalic(e) {
    document.getElementById("text_aria").classList.add("class_fonts_italica");
    document.getElementById("text_aria").classList.remove("class_fonts_bold");
    document.getElementById("text_aria").classList.remove("class_fonts_normal");
  }
  chekedonebold(e) {
    document.getElementById("text_aria").classList.add("class_fonts_bold");
    document
      .getElementById("text_aria")
      .classList.remove("class_fonts_italica");
    document.getElementById("text_aria").classList.remove("class_fonts_normal");
  }
  linksendtomain() {
    let linkstate = document.getElementById("link_inputzero").value;
    let linkformain = document.createElement("a");
    let ppppetrol = document.createElement("p");
    let hrefoutfor = document.getElementById("href_inputzero").value;
    let button_delete = document.createElement("button");
    button_delete.innerHTML = "Удалить";
    button_delete.classList.add("Remove_button");
    let button_ontop = document.createElement("button");
    button_ontop.innerHTML = "Поднять";
    button_ontop.classList.add("Remove_button");
    let button_onbottom = document.createElement("button");
    button_onbottom.innerHTML = "Опустить";
    button_onbottom.classList.add("Remove_button");
    linkformain.innerHTML = linkstate;
    linkformain.setAttribute("href", hrefoutfor);
    ppppetrol.id = this.state.id;
    this.setState({
      id: this.state.id + 1
    });
    button_delete.addEventListener("click", e => {
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
    button_ontop.addEventListener("click", e => {
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
    button_onbottom.addEventListener("click", e => {
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

    ppppetrol.appendChild(linkformain);
    ppppetrol.appendChild(button_delete);
    ppppetrol.appendChild(button_ontop);
    ppppetrol.appendChild(button_onbottom);
    document.getElementById("main_content").appendChild(ppppetrol);
    console.log(linkformain);
  }
  otpravkakategorii(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  sendpodkategoriuvbazu(e) {
    axios.post("url", this.state.podkategorii).then(response => {
      console.log(response);
    });
  }
  sendkategoriuvbazu(e) {
    axios.post("url", this.state.kategorii).then(response => {
      console.log(response);
    });
  }
  refresh_sel(cat, sub) {
    axios.get("http://localhost:1338/api/categories").then(response => {
      var select = this.create_select(response.data, cat);
      select.id = "cat_select";
      this.setState({
        categories: response.data
      });
      this.refresh_subsel(response.data, sub);
      document.getElementById("cat_select_content").innerHTML = "";
      document.getElementById("cat_select_content").appendChild(select);
    });
  }
  refresh_subsel(data, subcat) {
    var select = this.create_select(data[0].subcategory, subcat);
    select.id = "sub_cat_select";
    document.getElementById("subcat_select_content").innerHTML = "";
    document.getElementById("subcat_select_content").appendChild(select);
  }
  create_select(data, cat) {
    let select = document.createElement("select");
    select.id = "cat_select";
    for (var i = 0; i < data.length; i++) {
      let option = document.createElement("option");
      option.id = '0ption_'+i;
      option.value = data[i].name;
      option.innerHTML = data[i].name;
      if (cat == data[i].name) {
        console.log(cat);
        option.setAttribute("selected", "selected");
      }
      select.appendChild(option);
    }
    select.addEventListener("change", e => {
      for (var i = 0; i < this.state.categories.length; i++) {
        if (this.state.categories[i].name == e.target.value) {
          this.refresh_subsel_ch(this.state.categories[i].subcategory);
        }
      }
    });
    return select;
  }

  create_sub_select(cat, subcat) {
    axios.get("http://localhost:1338/api/categories").then(response => {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].name == cat) {
          var select = this.create_select(response.data[i].subcategory, subcat);
          select.id = "sub_cat_select";
          document.getElementById("subcat_select_content").innerHTML = "";
          document.getElementById("subcat_select_content").appendChild(select);
        }
      }
    });
  }
  refresh_subsel_ch(data, subcat) { 
    var select = this.create_select(data, subcat); 
    select.id = "sub_cat_select"; 
    document.getElementById("subcat_select_content").innerHTML = ""; 
    document.getElementById("subcat_select_content").appendChild(select); 
    }

    setmainfoto(e){
      let file = this.state.main_foto;
    let formdata = new FormData();
    formdata.append("file", file);
    axios({
      url: "http://localhost:1338/api/upload",
      method: "POST",
      data: formdata
    }).then(response => {
      let imagges = document.createElement("img");
      imagges.src = "http://localhost:1338/" + response.data.path;
      imagges.classList.add('mainfoto')
      this.setState({
        main_foto: response.data.path
      });
      document.getElementById("foto").innerHTML = "";
      document.getElementById("foto").appendChild(imagges); 
    });
    }
    removejwt11(){
      this.props.history.push("/category");
    }
  render() {
    return (
      <div className="div_panel_admin">
        <style>{"body { background-color:#F1F1F1; }"}</style>
        <h1 className="logo_admin1">
          Sal<span>Ger</span>.CMS
        </h1>
        <div className="maining">
          <button
            className="button_admin_panel"
            onClick={this.removejwt.bind(this)}
            type="button"
          >
            Назад
          </button>
          <button
            className="button_admin_panel"
            onClick={this.removejwt11.bind(this)}
            type="button"
          >
            Категории
          </button>
        </div>
        <div id="testdata" />
     
        <div>
        <div id='main_foto'>
          <div  id="foto" ></div>
          <input
              name="file"
              className="input_file_upload"
              type="file"
              onChange={e => {
                this.selectmainfoto(e);
              }}
            />
        <button
              className="button_submitinfoall"
              onClick={e => {
                this.setmainfoto(e);
              }}
            >
              Добавить главное фото
            </button>
        </div>
          <form id="pozhaluista">
            <div id="cat_select_content" />
            <br />
            <div id="subcat_select_content" />
            <br />
            <input
              name="title"
              placeholder="Название статьи"
              id="input007"
              value={this.state.title}
              onChange={e => {
                this.onchangerfunk(e);
              }}
            />
            <br />
            <input
              name="discription"
              placeholder="Краткое описание статьи"
              id="input008"
              value={this.state.discription}
              onChange={e => {
                this.onchangerfunk(e);
              }}
            />
            <br />
            <input
              name="file"
              className="input_file_upload"
              type="file"
              onChange={e => {
                this.selectfile(e);
              }}
            />
            <button
              className="button_img_upload"
              onClick={() => {
                this.onclickbuttontest();
              }}
              type="button"
            >
              Загрузить медиа файл
            </button>
            <br />
            <input
              id="link_inputzero"
              className="linkinpark"
              placeholder="Создать ссылку"
            />
            <input
              id="href_inputzero"
              className="linkinpark1"
              placeholder="URL типа http://site.ru"
            />
            <button
              className="button_zero_linin"
              type="button"
              onClick={e => {
                this.linksendtomain(e);
              }}
            >
              добавить ссылку
            </button>
            <div className="flex_div_1">
              <textarea
                id="text_aria"
                type="text"
                placeholder="Основная информация статьи"
                name="text_aria"
              />
              <br />
              <div className="div_chekboxes">
                <input
                  id="a_1"
                  onClick={e => {
                    this.chekedonenormal(e);
                  }}
                  name="namera"
                  type="radio"
                />
                <label className="radio_button_chekke">Normal</label>
                <input
                  id="a_2"
                  onClick={e => {
                    this.chekedoneitalic(e);
                  }}
                  name="namera"
                  type="radio"
                />
                <label className="radio_button_chekke">Italica</label>
                <input
                  id="a_3"
                  onClick={e => {
                    this.chekedonebold(e);
                  }}
                  name="namera"
                  type="radio"
                />
                <label className="radio_button_chekke">Bold</label>
              </div>
            </div>
            <p className="p_for_button_im">
              <button
                id="clickbutton"
                type="button"
                onClick={e => {
                  this.oncreatearia(e);
                }}
              >
                Добавить текст
              </button>
            </p>
          </form>
          <div className="div_ochen" id="main_content" />
          <p className="p_for_button_im">
            <button
              className="button_submitinfoall"
              onClick={e => {
                this.submitallelements(e);
              }}
            >
              {this.state.namebutton}
            </button>
          </p>
        </div>
     
      </div>
    );
  }
}
export default Constructor;
