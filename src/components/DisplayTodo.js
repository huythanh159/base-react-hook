const DisplayTodo = (props) => {
    // react ho tro san props cho minh roi chi lay va xai thoi
    const deleteTodofromChild = (id) => {
        props.deleteClick(id);
    }
    const listTodo1 = props.childData;

    return (
        <div>
            <div>-----To do list -------</div>
            {listTodo1.map((item, index) => {
                return (
                    <div id={item.id} key={item.id} onClick={() => deleteTodofromChild(item.id)}> {item.name} </div>
                )
            })}
        </div>
    )
}

export default DisplayTodo;