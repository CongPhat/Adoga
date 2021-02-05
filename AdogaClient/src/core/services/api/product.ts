import apiService from "./index";

export default class ProductService {
  edit: (category, code) => any;
  getDetail: (categoryId) => any;

  public async getProductByLocationService(
    locationId: string,
    pageSize?: number,
    pageNumber?: number
  ): Promise<any> {
    const path = `product/getProductByLocation?location=${locationId}&pageSize=${pageSize}&pageNumber=${pageNumber}`;
    return await apiService.executeApi({
      path,
      showSuccess: false,
      showError: false,
    });
  }

  public async getProductRecommendedService(optionQuery): Promise<any> {
    const path = `product/getProductRecommended${optionQuery}`;
    return await apiService.executeApi({
      path,
      showSuccess: false,
      showError: false,
    });
  }

  public async getProductsLikeByLocationService(
    locationId,
    optionString
  ): Promise<any> {
    const path = `product/getProductsLikeByLocation${optionString}&locationId=${locationId}`;
    return await apiService.executeApi({
      path,
      showSuccess: false,
      showError: false,
    });
  }

  public async getProductsLikeService(productId): Promise<any> {
    const path = `product/getProductLike?productId=${productId}`;
    return await apiService.executeApi({
      path,
      showSuccess: false,
      showError: false,
    });
  }

  public async getAllProductLocationService(optionQuery): Promise<any> {
    const path = `product/getProductByLocation${optionQuery}`;
    return await apiService.executeApi({
      path,
      showSuccess: false,
      showError: false,
    });
  }

  public async getDetailProductService(productId: string): Promise<any> {
    const path = `product/detail?productId=${productId}`;
    return await apiService.executeApi({
      path,
      showSuccess: false,
      showError: false,
    });
  }

  // public async getListLocationTop(): Promise<any> {
  //   const path = `location/locationTop`;
  //   return await apiService.executeApi({
  //     path,
  //     showSuccess: false,
  //     showError: false,
  //   });
  // }
}
