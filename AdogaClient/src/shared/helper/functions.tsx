import React, { useContext } from "react";
import { useLocation } from "react-router";

export const correctEmail = (value) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  }
  return false;
};
const dateFormat = require("dateformat");
export const correctLink = (str) => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
};

export const debounce = (callback, delay) => {
  let timeoutHandler = null;
  return (...args) => {
    if (timeoutHandler) {
      clearTimeout(timeoutHandler);
    }
    timeoutHandler = setTimeout(() => {
      callback(...args);
      timeoutHandler = null;
    }, delay);
  };
};

export const indexOfArrObject = (arr, key, value) => {
  let index = -1;
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i][key] === value) {
      index = i;
      break;
    }
  }
  return index;
};

export const findItemOfArrayObject = (arr, key, value) => {
  const index = indexOfArrObject(arr, key, value);
  return arr[index];
};

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const hasSameItem = (
  arr1: Array<number | string>,
  arr2: Array<number | string>
) => {
  for (let index = 0; index < arr1.length; index++) {
    const item1 = arr1[index];
    if (arr2.includes(item1)) {
      return true;
    }
  }
  return false;
};
export const converDateTimePicker = (value) => {
  var date = `${value} 00:00:00`;
  const pattern = /^(\d{4})\-(\d{1,2})\-(\d{1,2}) (\d{1,2})\:(\d{1,2})\:(\d{1,2})$/;
  var arrDateStart = date.match(pattern);
  var dstart = new Date(
    `${arrDateStart[1]}-${arrDateStart[2]}-${
      parseInt(arrDateStart[3]) - 1
    } 17:00:00`
  );

  const DateStart = dateFormat(dstart, "yyyy-mm-dd HH:MM:ss");
  return (date = DateStart);
};
export const converDateTimePicker2 = (value) => {
  var pattern = /^(\d{4})\-(\d{1,2})\-(\d{1,2}) (\d{1,2})\:(\d{1,2})\:(\d{1,2})$/;
  var arr = value.match(pattern);
  var dt = new Date(
    `${arr[1]}-${arr[2]}-${arr[3]} ${parseInt(arr[4]) + 7}:${arr[5]}:${arr[6]}`
  );
  var test2 = dateFormat(dt, "d/m/yyyy");
  return test2;
};
export const converDateTimePicker3 = (value) => {
  var pattern = /^(\d{4})\-(\d{1,2})\-(\d{1,2}) (\d{1,2})\:(\d{1,2})\:(\d{1,2})$/;
  var arr = value.match(pattern);
  var dt = new Date(
    `${arr[1]}-${arr[2]}-${arr[3]} ${parseInt(arr[4]) + 7}:${arr[5]}:${arr[6]}`
  );
  var test2 = dateFormat(dt, "yyyy-mm-dd HH:MM:ss");
  return test2;
};
export const option_date = [
  {
    key: 0,
    value: "no",
  },
  {
    key: 1,
    value: "daily",
  },
  {
    key: 2,
    value: "weekly",
  },
  {
    key: 3,
    value: "monthly",
  },
  {
    key: 4,
    value: "yearly",
  },
];
export const option_key = [
  {
    key: 0,
    value: "DateStart",
  },
  {
    key: 1,
    value: "DateEnd",
  },
  {
    key: 2,
    value: "Content",
  },
];

export const parseSearchToObject = (string) => {
  if (string == "") return {};
  var search = string.substring(1);
  return JSON.parse(
    '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
    function (key, value) {
      return key === "" ? value : decodeURIComponent(value);
    }
  );
};

export const parseObjectToSearch = (object) => {
  let string = "";
  Object.keys(object).map((key, index) => {
    string = `${string}${index == 0 ? "?" : "&"}${key}=${object[key]}`;
  });
  return string;
};

export const parseMoneyVND = (money) => {
  if (money == 0) return 0;
  return Math.floor(money)
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};

export const diffInDays = (dateFrom, dateTo) => {
  const diffInMs = dateTo - dateFrom;
  return diffInMs / (1000 * 60 * 60 * 24);
};

export const priceDiscount = (price: number, discount: number) => {
  if (discount == 0) return price;
  return (price * (100 - discount)) / 100;
};

export const spliceArray = (arr: Array<any>, start: number, end: number) => {
  return [...arr].splice(start, end);
};

export const spliceDate = (string: string) => {
  return string.split("-").map((x, index) => {
    if (index == 1) return parseInt(x) - 1;
    return parseInt(x);
  });
};
