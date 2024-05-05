import {useEffect, useState} from "react";

import  Container from "react-bootstrap/Container";
import {Itemlist} from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";



export const ItemDetailContainer = () => { 
 const [product, setProduct] = useState (null);

 const {id} = useParams ();

    useEffect (() => {
        const db = getFirestore();

        const refDoc = doc(db, "items", id);
    
        getDoc(refDoc).then((snapshot) => {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        });
      }, [id]);

if (!product) return <div> loading...</div>

    return <Container className= "mt-4">
        <h1>{product.title}</h1>
        <img src={product.imageUrl} 
        style= {{height:300, width:"auto"}}
        alt={product.title}/>
        <p>{product.description}</p>
        <div>{`stock ${product.stock}`}</div>
        <div>{`price ${product.price}`}</div>
        </Container>;
};