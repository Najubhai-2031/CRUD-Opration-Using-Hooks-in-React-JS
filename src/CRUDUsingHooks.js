import React from 'react';
import { useState, useRef } from 'react';

function CRUDUsingHooks(props) {
    const focuss = useRef()

    const [number, setNumber] = useState('');
    const [ans, setAns] = useState([]);

    const handleChange = (event) => {
        setNumber(event.target.value)
    }

    const handleClick = () => {
        let n1 = {
            value: number,
            id: Date.now()
        }
        ans.push(n1)
        setAns(ans)
        setNumber('')
        focuss.current.focus();
    }

    const handleDelete = (id) =>{
        let aaa = ans.filter(item=> item.id !==id)
        setAns(aaa)
    }

    const handleEdit =(id) =>{
        let bb = window.prompt("Enter New Value");
        let cc = ans.map(item=>{
            if(item.id===id){
                return{
                    ...item,
                    value:bb,
                    id:id
                }
            }
            return item;
        });
        setAns(cc)
    }

    return (
        <React.Fragment>
            Enter Value:- <input onChange={handleChange} value={number} autoFocus ref={focuss} />
            <button onClick={handleClick}>Add</button>
            {ans.map(item => {
                return (
                    <li key={item.id}>
                        {item.value}
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                        <button onClick={()=>handleEdit(item.id)}>Edit</button>
                    </li>
                )
            })}
        </React.Fragment>
    );
}

export default CRUDUsingHooks;