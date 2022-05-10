import React, { useState } from "react";
import _ from "lodash";
const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [listTodo, setListTodo] = useState(
        [
            { id: "todo1", name: "watching youtuube" },
            { id: "todo2", name: "Using Facebook" },
            { id: "todo3", name: "Reading Book" },
        ]
    )
    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handleClickBtn = (event, msg) => {
        let todoId = randomIntFromInterval(4, 9999999999);
        let todoItem = {
            id: `todo${todoId}`, name: todo //goole string template
        }
        let currentTodoList = _.clone(listTodo);
        currentTodoList.push(todoItem);
        setListTodo(currentTodoList);
        //setListTodo([...listTodo, todoItem]); // spread operator(copy)
    }
    const handleDeteleTodo = (id) => {
        let currentTodoList = _.clone(listTodo);
        currentTodoList = currentTodoList.filter(item => item.id !== id);
        setListTodo(currentTodoList);
    }

    return (
        <div>
            <label>Todo's Name </label>
            <input value={todo} type="text" onChange={(event) => setTodo(event.target.value)} />


            <button type="button" onClick={() => { handleClickBtn() }}>Submit</button><br />


            <div>------List todo: --------</div>
            {listTodo.map((item, index) => {
                return (
                    <div id={item.id} key={item.id} onClick={() => handleDeteleTodo(item.id)}>{item.name}</div>
                )
            })}



        </div>
    );
}

//cach viet component bag class
// class TodoList extends React.Component {
//     //khai bao state
//     state = {
//         name: " ",
//         address: ""
//     }
//     //gan lai gia tri cua state
//     render() {
//         return (
//             <div>
//                 <label>Name </label>
//                 <input type="text" onChange={(event) => this.setState({ name: event.target.value })} /><br />
//                 <label>Address </label>
//                 <input type="text" onChange={(event) => this.setState({ address: event.target.value })} /><br />
//                 Hello {this.state.name} den thu {this.state.address}
//             </div>
//         )
//     }




export default TodoList;