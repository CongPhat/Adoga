import { useAsync } from "@hook/useAsync";
import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { InitPagination, IPagination } from "./interface";
import { IBEPaginationTable, InitOption, IOption } from "./interface";

interface IState {
  pagination: IPagination;
  option: IOption;
  selection: Array<any>;
}

const TableComponent = (props: IBEPaginationTable) => {
  let { apiServices, columns = [], register, selectable } = props;

  const [ { execute: getListData, value: listData, status } ] = useAsync(
    apiServices
  );
  const [ state, setState ] = useState<IState>({
    pagination: InitPagination,
    option: InitOption,
    selection: [],
  });

  useEffect(() => {
    getDataWithCurrentState();
  }, []);

  const getDataWithCurrentState = (_state?: {
    pagination?: IPagination;
    option?: any;
  }) => {
    const currentState = {
      pagination: state.pagination,
      option: state.option,
    };

    let { pagination = state.pagination, option = state.option } =
      _state || currentState;

    pagination = {
      current: pagination?.current || state.pagination.current,
      pageSize: pagination?.pageSize || state.pagination.pageSize,
      total: pagination?.total || state.pagination.total,
    };

    let {
      search = state.option.search,
      filter = state.option.filter,
      sorter = state.option.sorter,
    } = option;

    setState((prev) => ({
      ...prev,
      option: { search, filter, sorter },
      pagination,
    }));

    getListData(pagination, search, sorter, filter).then((res) => {
      setState((prev) => ({ ...prev, pagination: res.info }));
    });
  };

  const handleChangePage = (newPagination: IPagination, _filter, _sorter) => {
    let option = state.option;
    if (_sorter) {
      option.sorter = {
        sortOrder: _sorter.order || "",
        sortField: _sorter.field,
      };
    }
    getDataWithCurrentState({
      pagination: newPagination,
      option,
    });
    setState((prev) => ({ ...prev, selection: [] }));
  };

  const getData = () => {
    return {
      data: listData?.data || [],
      ...state,
    };
  };

  if (register) {
    register.getData = getData;
    register.fetchData = getDataWithCurrentState;
    register.setOption = (value) =>
      setState((prev) => ({ ...prev, option: { ...prev.option, ...value } }));
    register.setPagination = (value) =>
      setState((prev) => ({
        ...prev,
        pagination: { ...prev.pagination, ...value },
      }));
    register.setSelection = (value) =>
      setState((prev) => ({ ...prev, selection: value }));
  }

  return (
    <div className="BE-pagination-table">
      <Table
        dataSource={listData?.data || []}
        columns={columns}
        loading={status == "loading"}
        pagination={state.pagination}
        onChange={handleChangePage}
      // rowSelection={
      //   selectable && {
      //     selection: state.selection,
      //     onChange: (selection) =>
      //       setState((prev) => ({ ...prev, selection })),
      //   }
      // }
      />
    </div>
  );
};

export default TableComponent;
