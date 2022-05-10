import React, { Component, useEffect, useState } from "react";
const CountDown = (props) => {

    const [count, setCount] = useState(60)
    useEffect(() => {
        if (count === 0) {
            props.setIsDisableBtn(true);
            return;
        }
        const timer = setInterval(() => {
            setCount(count - 1)
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [count])
    return (
        <div>
            {count}
        </div>
    )
}


//dung class component

// class CountDown extends React.Component {
//     constructor(props) {
//         console.log("run constructor")
//         super(props);
//         this.state = {
//             count: 5
//         }
//     }

//     componentDidMount() {
//         console.log("run did mount")
//         this.timer = setInterval(() => {
//             let currentCount = this.state.count
//             this.setState({
//                 count: currentCount - 1
//             })
//         }, 1000)

//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (this.state.count === 0) {
//             clearInterval(this.timer)
//         }
//     }

//     render() {
//         console.log("run render")
//         return (
//             <div>
//                 {this.state.count}
//             </div>
//         )
//     }
// }


export default CountDown;