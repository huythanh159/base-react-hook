import React from "react";
// const TodoList = () => {
//     return (
//         <div>
//             Hello Todo List
//         </div>
//     );
// }

//cach viet component bag class
class TodoList extends React.Component {
    //khai bao state
    state = {
        name: " ",
        address: ""
    }
    //gan lai gia tri cua state
    render() {
        return (
            <div>
                <label>Name </label>
                <input type="text" onChange={(event) => this.setState({ name: event.target.value })} /><br />
                <label>Address </label>
                <input type="text" onChange={(event) => this.setState({ address: event.target.value })} /><br />
                Hello {this.state.name} den thu {this.state.address}
            </div>
        )
    }



}
export default TodoList;