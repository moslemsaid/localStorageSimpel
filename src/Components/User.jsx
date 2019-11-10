import React, { Component } from 'react'

export default class User extends Component {

    render() {
        const users = this.props.users.map((user,i)=>
        
            <div className="userItem" key={i}>{user.name}
            <span onClick={()=>{ 
                 this.props.onEdit(user.name)}}
                  className="editRight">&#9998;</span> 
            <span 
                onClick={()=>{this.props.onDelete(user.name)}} 
                className="closeRight">&times;</span>
            </div>
        )
     
        return (
        <div className="user">
            {users}
        </div>
        )
    }
}
