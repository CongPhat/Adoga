import PaginationInfo from "@entities/paginationInfo";
import { apiServiceCRM } from ".";

class RatingService {
  getAllRatingPagination = async (
    info: PaginationInfo,
    option: { sorter; search: string, DateFrom, DateTo }
  ) => {
    let params = {}
    if (info) {
      params = {
        PageSize: info?.pageSize || 10,
        PageNumber: info?.current || 1,
      }
    }

    if (option) {
      params = {
        ...params,
        OrderByQuery: option?.sorter ? `${ option?.sorter?.sortField } ${ option?.sorter?.sortOrder == "ascend" ? "asc" : "desc" }` : '',
        SearchContent: option?.search || "",
        DateFrom: option.DateFrom,
        DateTo: option.DateTo,
      }
    }

    return await apiServiceCRM.executeApi({
      path: "/api/Rating",
      payload: { params },
      showSuccess: false,
      showError: false,
    });
  };
}

export default RatingService;
