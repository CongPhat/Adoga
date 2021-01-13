import React, { useState, useEffect, useCallback } from "react";
import ModalComponent from "../ModalComponent";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

import LazyLoadImage from "../LazyLoadImage/LazyLoadImage";
import SearchComponent from "../SearchComponent/SearchComponent";
import { PaginationLoad } from "@view/Media/interface";
import { Button, Modal } from "antd";
import { debounce } from "@helper/functions";
import MediaService from "@api/media"
import './style.scss'
const { getMediaAssetWithPagination } = new MediaService()

interface IProps {
  url: string;
  onChange: (url) => void;
  label: any;
  require?: boolean;
}
export const InitLimit = 18;

export const initPaginationLoad: PaginationLoad = {
  searchType: "KeyWord",
  searchContent: "",
  page: 1,
  limit: InitLimit,
  totalRecord: 0,
};

const UploadMediaComponent = (props: IProps) => {
  const [ visible, setVisible ] = useState(false);
  const [ listMedia, setListMedia ] = useState([]);
  const [ idFocused, setIdFocused ] = useState("");
  const [ url, setUrl ] = useState("");
  const [ paginatinLoad, setPaginationLoad ] = useState<PaginationLoad>(
    initPaginationLoad
  );

  useEffect(() => {
    getListMedia(initPaginationLoad);
  }, []);

  const getListMedia = (_pagination, isLoadMore?) => {
    delete _pagination.totalRecord;
    _pagination.searchContent = _pagination.searchContent.trim();
    getMediaAssetWithPagination(_pagination).then((res) => {
      if (isLoadMore) {
        setListMedia([ ...listMedia ].concat(res.data.data.data))
      } else {
        setListMedia(res.data.data.data);
      }
      setPaginationLoad({
        ...paginatinLoad,
        limit: res.data.data.info.limit,
        page: res.data.data.info.page,
        totalRecord: res.data.data.info.totalRecord,
      });
    });
  };

  useEffect(() => {
    setUrl(props.url);
  }, [ props.url ]);

  const handleCancel = () => {
    setVisible(false);
  };

  const chooseMedia = () => {
    props.onChange(url);
    handleCancel();
  };

  const handleSearch = debounce(function (_value) {
    getListMedia({ ...paginatinLoad, page: 1, searchContent: _value });
  }, 500);

  return (
    <div className="upload-component w-100">
      <div className="wrap-open-modal w-100 h-100">
        <label
          style={{
            whiteSpace: "nowrap",
            display: "inline-block",
            minWidth: "300px",
          }}
          className={`labelInput`}
        >
          <div className="label">
            {props.label}
          </div>
          {props.require && <span style={{ color: "red" }}>*</span>}
        </label>
        <div
          className="wrap-image w-100 d-flex"
          style={{ height: "340px", justifyContent: "center" }}
        >
          {props.url && <LazyLoadImage url={props.url} alt={"media"} />}
          <DeleteOutlined
            className="delete-btn"
            style={{ fontSize: "20px" }}
            onClick={() => {
              setUrl("");
              props.onChange("");
            }}
          />
          <div
            className="open-modal d-flex"
            onClick={() => {
              setVisible(true);
            }}
          >
            <PlusOutlined />
          </div>
        </div>
      </div>
      <Modal
        className="modal-media"
        footer={false}
        onCancel={handleCancel}
        visible={visible}
        title={'Choose media'}
      >
        <SearchComponent onChange={handleSearch} width={"500px"} />
        <div className="mb-4"></div>
        <div className="list-media-to-choose">
          <div className="wrap-list mb-4">
            {listMedia?.map((item) => {
              return (
                <div
                  onDoubleClick={chooseMedia}
                  onClick={() => {
                    setIdFocused(item.mediaID);
                    setUrl(item.mediaFullPath);
                  }}
                  className={`item-image m-3 ${ idFocused == item.mediaID && "active"
                    }`}
                  style={{
                    height: "200px",
                    width: "200px",
                    display: "inline-block",
                  }}
                >
                  <LazyLoadImage
                    w100
                    url={item.mediaFullPath}
                    alt={item.mediaTitle}
                  />
                  <p>{item.mediaTitle}</p>
                </div>
              );
            })}
            {paginatinLoad.totalRecord > listMedia.length && (
              <div
                className="w-100 d-flex"
                style={{ justifyContent: "center" }}
              >
                <Button onClick={() => getListMedia({ ...paginatinLoad, page: paginatinLoad.page + 1 }, true)}>Load more</Button>
              </div>
            )}
          </div>
          <div className="d-flex justify-content-end">
            <Button onClick={handleCancel}>Cancle</Button>
            <Button
              disabled={false}
              onClick={chooseMedia}
            >Choose</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UploadMediaComponent;
