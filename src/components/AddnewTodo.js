const AddnewTodo = (props) => {

    // const todo1 = props.todo1;
    // const setTodo1 = props.setTodo1;
    // const handleClick = props.handleClick;
    //viet kieu destructure array
    const { todo1, setTodo1, handleClick } = props;


    return (
        <div>
            <lable>Todo's Name</lable>
            <input value={todo1} type="text" onChange={(event) => setTodo1(event.target.value)} />
            <button onClick={() => handleClick()}>Submit</button>
        </div>

    )
}

export default AddnewTodo;