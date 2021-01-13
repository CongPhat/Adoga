import { atom } from 'recoil'

export interface ScheduleBGPagination {
    data: Array<any>,
    info: {
        current: number,
        pageSize: number,
        total: number,
    },
    options: {
        search: string | number
    }
}
export const ScheduleBGPaginationStore = atom<ScheduleBGPagination>({
    key: "PaginationScheduleBG",
    default: {
        data: [],
        info: {
            current: 1,
            pageSize: 10,
            total: 0
        },
        options: {
            search: ''
        }
    }
})