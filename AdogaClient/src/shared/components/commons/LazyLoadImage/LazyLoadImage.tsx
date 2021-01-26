import React, { useState, useEffect } from "react";
import { Skeleton } from "antd";
import { getThumbnails } from "video-metadata-thumbnails";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tag, Divider } from "antd";
import "./LazyLoadImage.scss";
import { video } from "@config/index";

const imageMp3 = require("@assets/images/mp3.jpg");

interface IProps {
  url: string;
  alt: string;
  w100?: boolean;
}

const LazyLoadImage = (props: IProps) => {
  const [rendered, setRendered] = useState(true);
  const [thumbnail, setThumbnail] = useState(null);

  function blobToDataURL(blob, callback) {
    var fileReader = new FileReader();
    fileReader.onload = function (e) {
      callback(e.target.result);
    };
    fileReader.readAsDataURL(blob);
  }
  const createThumbnail = async () => {
    let blob = await fetch(props.url).then((r) => r.blob());
    const thumbnails = await getThumbnails(blob, {
      quality: 0.6,
      start: 5,
    });
    blobToDataURL(thumbnails[0].blob, (result) => {
      setThumbnail(result);
    });
  };

  useEffect(() => {
    if (video.some((x) => props.url.endsWith(x))) createThumbnail();
    if (props.url.endsWith(".mp3")) setThumbnail(imageMp3);
    else {
      setThumbnail(props.url);
    }
  }, [props.url]);

  return (
    <div
      className="wrap-lazyload h-full w-full"
      style={{ borderRadius: "10px" }}
    >
      {rendered && (
        <Skeleton.Button
          className={"skeleton"}
          active={true}
          size={"large"}
          shape={"square"}
        ></Skeleton.Button>
      )}
      {thumbnail && (
        <div className="h-full relative">
          <img
            onLoad={() => {
              setRendered(false);
            }}
            style={{ maxWidth: "100%" }}
            src={thumbnail}
            alt={props.alt}
          />
          {video.some((x) => props.url.endsWith(x)) && (
            <FontAwesomeIcon
              icon={faPlayCircle}
              className="absolute z-10 text-3xl transform -translate-x-1/2 -translate-y-1/2 bg-black text-white-100 border-2 border-solid border-white rounded-full"
              style={{ right: "24%", bottom: "31%" }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default LazyLoadImage;
