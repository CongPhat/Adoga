import { useState, useCallback, useEffect } from "react";

interface IState<T> {
  status: "ready" | "loading" | "error";
  value: T;
  error: any;
}

interface IOptions {
  showError?: boolean;
  showSuccess?: boolean;
  initialData?: any;
}

export function useSingleAsync<T>(asyncFunction?, options?: IOptions) {
  if (!asyncFunction) return;
  const { showError = true, showSuccess = false, initialData = null } =
    options || {};

  const [state, setState] = useState<IState<T>>({
    status: "ready",
    value: initialData,
    error: null,
  });

  const onSuccess = (response) => {
    setState((prevState) => ({
      ...prevState,
      status: "ready",
      value: response,
    }));
    return Promise.resolve(response);
  };

  const onError = (error) => {
    setState((prevState) => ({
      ...prevState,
      status: "error",
      error: error,
    }));
    return Promise.reject(error);
  };

  const setDataInitial = useCallback(
    async (data) => {
      setState((prevState) => ({
        ...prevState,
        value: data,
      }));
    },
    [asyncFunction]
  );

  const execute = useCallback(
    async (...args) => {
      setState((prevState) => ({
        ...prevState,
        status: "loading",
        value: initialData,
        error: null,
      }));

      return await asyncFunction(...args)
        .then((response) => {
          return onSuccess(response);
        })
        .catch((error) => {
          return onError(error);
        });
    },
    [asyncFunction]
  );

  return { execute, setDataInitial, ...state };
}

interface IMutipleAsync extends IState<any> {
  execute: Function;
}

export const useAsync = function (
  ...params: Array<Function | [Function, IOptions?]>
) {
  let result: Array<IMutipleAsync> = [];

  params.map((item) => {
    let prepare: any = [item];
    if (Array.isArray(item)) {
      prepare = item;
    }
    result.push(useSingleAsync(...prepare));
  });
  return result;
};
