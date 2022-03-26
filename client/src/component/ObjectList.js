import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const ObjectList = (props) => {
   

    const {object, setObject} = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/objects")
    	.then((res)=>{
	    console.log(res.data);
            setObject(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
    return (
        <div>
            {
                object.map((object, index)=>{
                return (
                    <div key={index}> 
                        <p>{object.title}</p> 
                        <p>{object.price}</p>
                        <p>{object.description}</p>

                        <Link to={`/objects/${object._id}`}> {object.title}'s Page! </Link>
                    </div> 
                )})
            }
        </div>
    );
}
export default ObjectList;