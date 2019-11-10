import React, { Component } from 'react'
import AddUser from './Components/AddUser';
import User from './Components/User';
import Loading from "./partialComponent/Loading";
import LocalStorage from "./Services/LocalStorage";


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
        users:[] ,
        editing:false
     
    }
  }

  componentDidMount = ()=>{
    const all =  LocalStorage.getAll();
    const users = [];
    Object.keys(all).forEach((item,i)=>{
      users.push({name:all[item] , id:item})
    })
   
    this.setState(prevState=>{
      return {
        users
      }
    });
  
  }
  deleteHandler= (value)=>{
    const newUsers = this.state.users.filter(user=>{
      return value !== user.name
    });
    this.setState(prevState=>{
      return {
        users:newUsers 
      }
    });
    const selectedUser = this.state.users.find(user=>{
      return value === user.name ? user.id : "";
    });
    LocalStorage.remove(selectedUser.id);
  }

  saveHandler = (value)=>{
   if(!this.state.editing){
     //add
      const key = Math.floor(Math.random()*1000);
      LocalStorage.save(key , value);
      this.setState(prevState=>{
        return {
          users:[...prevState.users , {name:value ,id:key}]
        }
      });
  }else{
    //edit
    const el = document.querySelector('#addUser');

    const users = this.state.users.map(user=>{
      if(user.id===el.dataset.userId){
        user.name = value; 
        return user;
      }else{
        return user;
      }
    })
    this.setState(prevState=>{
      return {
        users , 
        editing:false
      }
    });
    LocalStorage.edit(el.dataset.userId ,value);
 }
  
  }
  editHandler = (value)=>{
    
    const selectedUser = this.state.users.find(user=>{
      return value === user.name ? user.id : "";
    });
    let inputValue = document.querySelector('#addUser');
    let editing=true;
    if(inputValue.value == value){
      inputValue.value='';
      editing = false;
    }else{
      inputValue.value = value;
      inputValue.dataset.userId=selectedUser.id;
      this.setState(prevState=>{
        return  {
          editing 
        }
      });
    }
    
  }
  render() {
    document.title = "add user";
    return (

        <div className="containerMain">
          <br />
            <AddUser 
            onSave={this.saveHandler}/>
            <User 
            onDelete={this.deleteHandler}
            onEdit={this.editHandler}
            users={this.state.users}/>
            <Loading  />
        </div>
    )
  }
}

