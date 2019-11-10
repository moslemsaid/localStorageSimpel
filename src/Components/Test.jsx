import React from 'react'
import LocalStorage from "../Services/LocalStorage";
export default function Test() {
    const f = LocalStorage.edit(794 ,'class one');
    console.log(f);
    return (
        <div>
            
        </div>
    )
}
