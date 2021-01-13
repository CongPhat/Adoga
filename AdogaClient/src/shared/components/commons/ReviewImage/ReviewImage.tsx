import React, { useState } from "react"
import LazyLoadImage from "../LazyLoadImage/LazyLoadImage";
import PopupReviewImage from "../PopupReviewImage/popupReviewImage";
import "./style.scss"
const ReviewImage = (props) => {
    const [ showPopup, setShowPopup ] = useState(false)
    const togglePopup = () => {
        setShowPopup(!showPopup)
    }
    const imagenumber = props.listImage.length;
    return (
        <div className="content__image">
            <div>
                {
                    props.listImage.map((item, index) => {
                        if (index < 1) {
                            return <div className="image__more">
                                <LazyLoadImage w100 url={item.ruleSource} alt="" />
                            </div>
                        }
                    })
                }
            </div>
            <div className="image__more">

                {
                    props.listImage.map((item, index) => {
                        if (index >= 1) {
                            return (
                                <span onClick={() => togglePopup()}>
                                Xem thêm {imagenumber - 1} hình
                            </span>
                            )
                        }
                        else return ""
                    })

                }
               
                

            </div>
            {
                    showPopup ? <PopupReviewImage showPopup={showPopup} setShowPopup={setShowPopup} listImage={props.listImage} /> : null
                }
        </div>
    )
}
export default ReviewImage