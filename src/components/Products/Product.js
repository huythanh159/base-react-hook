
import sneaker1 from "../../assets/images/sneaker1.jpg"
import sneaker2 from "../../assets/images/sneaker2.jpg"
import sneaker3 from "../../assets/images/sneaker3.jpg"
import sneaker4 from "../../assets/images/sneaker4.jpg"
import "./Product.scss";
import { useState } from "react";
import Lightbox from 'react-image-lightbox';


const images = [
    sneaker1,
    sneaker2,
    sneaker3,
    sneaker4
];
const Product = () => {

    const [currentUpImg, setcurrentUpImg] = useState(sneaker1)
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const handleClickPreImg = () => {

        let index = images.findIndex(item => item === currentUpImg);
        setPhotoIndex(index);
        setIsOpen(true);
    }
    return (
        <div>

            <div className="product-container">
                <div className="contents-left">
                    <div className="img-up">
                        <img src={currentUpImg} onClick={() => handleClickPreImg()} />
                    </div>
                    <div className="img-down">
                        <div className="img-small">
                            <img src={sneaker1} onClick={() => setcurrentUpImg(sneaker1)}
                                className={currentUpImg === sneaker1 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={sneaker2} onClick={() => setcurrentUpImg(sneaker2)}
                                className={currentUpImg === sneaker2 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={sneaker3} onClick={() => setcurrentUpImg(sneaker3)}
                                className={currentUpImg === sneaker3 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={sneaker4} onClick={() => setcurrentUpImg(sneaker4)}
                                className={currentUpImg === sneaker4 ? "active" : ""} />
                        </div>
                    </div>
                </div>
                <div className="contents-right">
                    <div className="title">Giày chạy bộ nam New Balance - M860E1</div>
                    <div className="price">1.478.000 ₫</div>
                    <div className="size">Size 30</div>
                    <div className="action">
                        <lable className="quatity">So Luong</lable>
                        <input type={"number"} min={1} placeholder={1} />
                        <button className="buy">Chon Mua</button>
                    </div>
                </div>

            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                    animationDisabled={true}
                    animationDuration={500}
                />
            )}
        </div>

    )


}
export default Product;