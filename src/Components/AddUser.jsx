import React from 'react'

export default function AddUser({onSave}) {
    return (
        <form>
            <div className="addUserContainer">
                <div className="textBoxHolder">
                    <input type="text" placeholder="&nbsp;" id="addUser" />
                    <label>some placeholder</label>
                </div>
                <button onClick={(e)=>{
                    e.preventDefault();
                    const el = document.querySelector('#addUser')
                    const value = el.value;
                    if(value != ""){
                        onSave(value);
                    }
                    el.value='';
                    
                }} className="addUserBtn">save</button>
            </div>
           
        </form>
    )
}
