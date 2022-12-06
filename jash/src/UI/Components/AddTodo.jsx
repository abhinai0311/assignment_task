import React,{useState} from "react";
import { useFirestore } from "react-redux-firebase";
import {useSelector} from "react-redux";

const AddTodo = () => {
  const [presentToDo, setPresentToDo] = useState("");
  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);
  const [two,setTwo]=useState("")
  const [three,setThree]=useState("")
  const [four,setFour]=useState("")
 // console.log(useSelector((state) => state.firebase.auth));
  const handleChange = ({ currentTarget: { name, value } }) => {
    if (name === "addTodo") {
      setPresentToDo(value);
    }
  };

  const addNewTodo = (todo) => {
    console.log(1,todo)
 
      firestore
      .collection("users")
      .doc(uid)
      .collection("todos")
      .add({
        title: todo,
        isDone: false,
      })
      
      .then((docRef) => {
        docRef.update(
            {
                todoID: docRef.id
            }
        );
      });
      firestore
      .collection("users")
      .doc(uid)
      .collection("todos")
      .add({
        title: two,
        isDone: false,
      })
      
      .then((docRef) => {
        docRef.update(
            {
                todoID: docRef.id
            }
        );
      });
      firestore
      .collection("users")
      .doc(uid)
      .collection("todos")
      .add({
        title: three,
        isDone: false,
      })
      
      .then((docRef) => {
        docRef.update(
            {
                todoID: docRef.id
            }
        );
      });
      firestore
      .collection("users")
      .doc(uid)
      .collection("todos")
      .add({
        title: four,
        isDone: false,
      })
      
      .then((docRef) => {
        docRef.update(
            {
                todoID: docRef.id
            }
        );
      });

     setPresentToDo("");
     setTwo("")
     setThree("")
     setFour("")
     
  };
  return (
    <div>
      <form action="">
        <input style={{margin:"10px"}}
          type="text"
          name="addTodo"
          value={presentToDo}
          onChange={handleChange}
          placeholder="ProductName"
        />
        <br></br> 
         <input style={{margin:"10px"}}
          type="text"
          name="addTodo"
         value={two}
          onChange={(e)=>{setTwo(e.target.value)}}
          placeholder="Price"
        />
          <br></br> 
         <input style={{margin:"10px"}}
          type="text"
          name="addTodo"
          value={three}
          onChange={(e)=>{setThree(e.target.value)}}
          placeholder="Discount Price"
        />
          <br></br>
         <input style={{margin:"10px"}}
          type="text"
          name="addTodo"
          value={four}
          onChange={(e)=>{setFour(e.target.value)}}
          placeholder="Product Description"
        />
          <br></br>
        <button
          onClick={(event) => {
            event.preventDefault();
            addNewTodo(presentToDo);
          }}
        >
          Add 
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
