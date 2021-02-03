import apiService from "./index";

export default class RoomService {
  public async GetRoomByProductService(
    productId: string,
    pageSize?: number,
    pageNumber?: number
  ): Promise<any> {
    const path = `room/getRoomByProduct?productId=${productId}&pageSize=${pageSize}&pageNumber=${pageNumber}`;
    return await apiService.executeApi({
      path,
      showSuccess: false,
      showError: false,
    });
  }

  public async GetRoomLowestService(productId: string): Promise<any> {
    const path = `room/getRoomLowestByProduct?productId=${productId}`;
    return await apiService.executeApi({
      path,
      showSuccess: false,
      showError: false,
    });
  }

  // public async getDetailProductService(productId: string): Promise<any> {
  //   const path = `product/detail?productId=${productId}`;
  //   return await apiService.executeApi({
  //     path,
  //     showSuccess: false,
  //     showError: false,
  //   });
  // }

  // public async getListLocationTop(): Promise<any> {
  //   const path = `location/locationTop`;
  //   return await apiService.executeApi({
  //     path,
  //     showSuccess: false,
  //     showError: false,
  //   });
  // }
}
