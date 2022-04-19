import { flatMap } from "lodash";
import { useState } from "react";
const AddnewProduct = () => {
    const [isShowContent, setIsShowContent] = useState(false)

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState("");
    const handleAddNewBtn = () => {

        let object = {
            name: name,
            price: price,
            size: size,
            color: color
        }
        let productList = localStorage.getItem("productList");
        if (productList) {
            let arr = JSON.parse(productList);
            arr.push(object);
            localStorage.setItem("productList", JSON.stringify(arr))
        } else {
            localStorage.setItem("productList", JSON.stringify([object]))
        }



        setName("");
        setPrice(0);
        setSize(0);
        setColor("");

    }

    const handleClickShowHide = (status) => {
        //cach hard code luon
        setIsShowContent(status);

        // setIsShowContent(!isShowContent)
    }



    return (
        <div>
            {isShowContent === true &&
                <fieldset>
                    <legend>Add New Product</legend>

                    <div className="input">
                        <label>Name</label>
                        <input value={name} type="text" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="input">
                        <label>Price</label>
                        <input value={price} type="text" onChange={(event) => setPrice(event.target.value)} />
                    </div>
                    <div className="input">
                        <label>Size</label>
                        <input value={size} type="text" onChange={(event) => setSize(event.target.value)} />
                    </div>
                    <div className="input">
                        <label>Color</label>
                        <input value={color} type="text" onChange={(event) => setColor(event.target.value)} />
                    </div>
                    <div>
                        <button onClick={() => { handleAddNewBtn() }}>Add New</button>
                    </div>

                </fieldset>
            }
            {/* {isShowContent === true && <div onClick={() => { handleClickShowHide(false) }}>Hide this Form</div>}
            {isShowContent === false && <div onClick={() => { handleClickShowHide(true) }}>Show this form</div>} */}
            {isShowContent === true ?
                <div className="btnHideShow" onClick={() => { handleClickShowHide(false) }}>Hide this Form</div>
                :
                <div className="btnHideShow" onClick={() => { handleClickShowHide(true) }}>Show this form</div>}
            <div>
                {localStorage.getItem("productList")}
            </div>
        </div>
    )
}
export default AddnewProduct;