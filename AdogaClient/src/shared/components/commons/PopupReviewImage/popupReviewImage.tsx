import React, { useState } from "react"
import "./style.scss"
import { CloseOutlined } from "@ant-design/icons"
import LazyLoadImage from "../LazyLoadImage/LazyLoadImage";
import ReactPlayer from "react-player";
import {FaArrowCircleRight,FaArrowCircleLeft,FaTimes} from "react-icons/fa"


const PopupReviewImage = (props) => {
    // const listImage = props.listImage || [];

    // const [ currentIndex, setCurrentIndex ] = useState(0)

    // const setPopup = () => {
    //     props.setShowPopup(!props.showPopup)
    // }
    // const SlideItem = (props) => {
    //     return (
    //         <div className="item-slide">
    //             {listImage[ currentIndex ]?.ruleSource.endsWith(".mp4") ? (
    //                 <ReactPlayer
    //                     className="react-player"
    //                     url={listImage[ currentIndex ]?.ruleSource}
    //                     controls={true}
    //                     volume={100}
    //                     muted={false}
    //                     width="100%"
    //                     height="100%"
    //                     playing={true}
    //                 />
    //             ) : (
    //                     <LazyLoadImage url={listImage[ currentIndex ]?.ruleSource} alt={"media"} />
    //                 )}
    //         </div>
    //     );
    // }
    
    // const goTo = (direction) => {
    //     let index = 0;
    //     switch (direction) {
    //         case 'prev':
    //             index = currentIndex - 1;
    //             setCurrentIndex(index < 0 ? listImage.length - 1 : index)
    //             break;
    //         case 'next':
    //             index = currentIndex + 1;
    //             setCurrentIndex(index >= listImage.length ? 0 : index)
    //             break;
    //         default:
    //             setCurrentIndex(direction)
    //             break;
    //     }
    // };
    const SliderImage= props.listImage || [];
    console.log(SliderImage,"SliderImage");
    
    const [current,setCurrent]=useState(0);
    const length=SliderImage.length;
    if(!Array.isArray(SliderImage)||SliderImage.length<=0){
        return null;
    }
    const nextSlide=()=>{
        setCurrent(current===length-1?0:current+1)
    }
    
    const prevSlide=()=>{
        setCurrent(current===0?length-1:current-1);
    }
    const Indicators = () => {
        const listIndicators = SliderImage.map((item, index) =>
            <li
                key={index}
                className={current === index ? 'active' : ''}
                onClick={() => setCurrent(index)}
            >
                <LazyLoadImage url={item.image} alt='index-image' />
            </li>
        );
        return (
            <ul className="indicators">
                {listIndicators}
            </ul>
        );
    };
    return (
        // <div className="popup__container">
        //     <div className="popup">
        //         <div className="popup_inner">
        //             <div className="slideshow-simple">

        //                 <SlideItem
        //                     url={listImage[ currentIndex ]?.ruleSource}
        //                 />
        //                 <Indicators changeSlide={goTo} />
        //                 <div className="wrap-control">
        //                     <button className="btn btn-prev" value="Prev" onClick={() => goTo('prev')}> <span>&lt;</span> </button>
        //                     <button className="btn btn-next" value="Next" onClick={() => goTo('next')}>	 <span>&gt;</span></button>
        //                 </div>
        //             </div>
        //         </div>
        //         <button className="closeOutlined__icon" onClick={() => setPopup()}>X</button>
        //     </div>
        // </div>
        <section className="slider">
            <FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
            <FaTimes className="remove-icon" onClick={()=>props.setShowPopup(!props.showPopup)} />
            {SliderImage.map((item,index)=>{
                return <div className={index===current?"slide active":"slide"}>
                    {
                        index===current&&(
                            item.ruleSource.endsWith(".mp4") ? (
                                <ReactPlayer
                                    className="react-player"
                                    url={item.ruleSource}
                                    controls={true}
                                    volume={100}
                                    muted={false}
                                    width="100%"
                                    height="100%"
                                    playing={true}
                                  classNae="image"
                                />
                            ) : (
                                    <div className="image">
                                        <LazyLoadImage url={item.ruleSource} alt={"media"} />
                                    </div>
                                    
                                   
                                )
                        )
                    }    
                </div>
                
            })}
            <div className="List__image">
                <ul className="indicators">
                    {SliderImage.map((item,index)=>{
                        return (
                            <li
                                key={index}
                                className={current === index ? 'active' : ''}
                                onClick={() => setCurrent(index)}
                            >
                                 <LazyLoadImage url={item.ruleSource} alt='index-image' />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>

    )
}
export default PopupReviewImage