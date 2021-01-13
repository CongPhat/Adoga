import { async } from 'rxjs';
import RatingService from "@api/rating";
import PaginationInfo from '@entities/paginationInfo';

class RatingInteractor extends RatingService {
    constructor() {
        super()
        this.getAllRatingPagination = async (info: PaginationInfo, option) => {
            const service = new RatingService()
            return await service.getAllRatingPagination(info, option).then(res => {
                const { totalCount, pageSize, currentPage } = res?.data?.data?.pageInfo
                return {
                    data: res?.data?.data?.pagedData || [],
                    info: { pageSize, current: currentPage, total: totalCount }
                }
            })
        }
    }
}

export default RatingInteractor

