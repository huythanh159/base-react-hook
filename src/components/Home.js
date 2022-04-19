import React, { useState } from "react";
import _ from "lodash";
import AddnewTodo from "./AddnewTodo";
import DisplayTodo from "./DisplayTodo";

const Home = () => {
    //state
    const [todo1, setTodo1] = useState("");
    const [listTodo1, setListTodo1] = useState(
        [
            { id: "todo1", name: "doc bao" },
            { id: "todo2", name: " uong cafe" }
        ]
    )
    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const handleClick = () => {
        if (!todo1) {
            alert("Todo name is not empty");
            return;
        }
        let todoId1 = randomIntFromInterval(3, 9999999);
        let todoItem1 = {
            id: `id${todoId1}`, name: todo1
        }
        //setListTodo1([...listTodo1, todoItem1])
        let currentList1 = _.clone(listTodo1);
        currentList1.push(todoItem1);
        setListTodo1(currentList1);
        setTodo1("");


    }
    const deleteClick = (id) => {
        let currentList1 = _.clone(listTodo1)
        currentList1 = currentList1.filter(item => item.id !== id);
        setListTodo1(currentList1);
    }

    const [showHideDetail, setShowHideDetail] = useState(true);
    const click = () => {
        setShowHideDetail(!showHideDetail)
    }

    //jsx
    return (
        <div>
            {showHideDetail === true &&
                <div>
                    <AddnewTodo
                        todo1={todo1}
                        setTodo1={setTodo1}
                        handleClick={handleClick}
                    />

                    <DisplayTodo
                        childData={listTodo1} // x = y => x <- y
                        deleteClick={deleteClick}
                    />
                </div>
            }
            {/* <ShowHideHome
                todo1={todo1}
                setTodo1={setTodo1}
            /> */}
            <div className="btnHideShow">
                {showHideDetail === true ?
                    <div onClick={() => click()}>Hide Content</div> :
                    <div onClick={() => click()}>Show Content</div>}
            </div>

        </div>

    )
}
export default Home;