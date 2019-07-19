import React,{Component} from 'react';
import axios from 'axios';
import "./admin.css";
class Admin extends Component{
    constructor(props){
        super(props)
        this.state={
                username:'',
                password:'',
                erors:[]
    }
        this.onsubmitbutton = this.onsubmitbutton.bind(this);
        this.changedatainput = this.changedatainput.bind(this);
    }
    onsubmitbutton(event){
        event.preventDefault();
        axios.post("http://localhost:1338/api/login",this.state)
        .then(responce=>{
            localStorage.setItem('cool-jwt',responce.data.token)
            if(responce.data.success){
                    this.props.history.replace('/admin-panel')
            }
        })
        .catch(eror=>{
            this.setState({
                erors:eror
            })
        })
    }
    changedatainput(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render(){  
    return(
        <div className="bg_admin_panel">
            <style>{'body { background-color:#F1F1F1; }'}</style>
        <form className="form_admin" onSubmit={event=>{this.onsubmitbutton(event)}}>
            <h1 className="logo_admin">Sal<span>Ger</span>.CMS</h1>
                <p className="next_label_play1"><label htmlFor="inputt1">Имя пользователя</label></p>
                <input id="inputt1" name="username" value={this.state.username} required onChange={event=>{this.changedatainput(event)}} />
                <p className="next_label_play"><label htmlFor="inputt2">Пароль</label></p>
                <input id="inputt2" type="password" name="password" value={this.state.password} required onChange={event=>{this.changedatainput(event)}} />
               <div className="div_admin_submit"><span><a href="#">Забыли пароль?</a></span><button type="submit">Войти</button></div> 
        </form>
        </div>
    )
    }
}
export default Admin