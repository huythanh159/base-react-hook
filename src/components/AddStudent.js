
import { useState } from "react"
const AddStudent = () => {
    const [isShowHide, setisShowHide] = useState(true)

    const [studentId, setstudentId] = useState("");
    const [studentName, setstudentName] = useState("");
    const [studentAge, setstudentAge] = useState("");
    const [studentAdd, setstudentAdd] = useState("");
    const handleAddBtn = () => {
        console.log("check add student", studentId, studentName, studentAge, studentAdd)
    }
    const handleclickShowHideContent = (status) => {
        //setisShowHide(!isShowHide) //co 2 cach 1 truyen tham so cung cho arrow func. 2 la dung dau ! de set lai gia tri cua state
        setisShowHide(status);
    }

    return (
        <div>
            {isShowHide === false && <fieldset>
                <legend>Add Student</legend>
                <div className="input">
                    <label>Student Id</label>
                    <input value={studentId} type="text" onChange={(event) => { setstudentId(event.target.value) }} />
                </div>
                <div className="input">
                    <label>Student Name</label>
                    <input value={studentName} type="text" onChange={(event) => { setstudentName(event.target.value) }} />
                </div>
                <div className="input">
                    <label>Age</label>
                    <input value={studentAge} type="text" onChange={(event) => { setstudentAge(event.target.value) }} />
                </div>
                <div className="input">
                    <label>Address</label>
                    <input value={studentAdd} type="text" onChange={(event) => { setstudentAdd(event.target.value) }} />
                </div>
                <div>
                    <button onClick={() => { handleAddBtn() }}>Add new student</button>
                </div>
            </fieldset>}
            {isShowHide === true && <div className="btn" onClick={() => { handleclickShowHideContent(false) }}>Show</div>}
            {isShowHide === false && <div className="btn" onClick={() => { handleclickShowHideContent(true) }}>Hide</div>}
        </div>
    )
}

export default AddStudent;