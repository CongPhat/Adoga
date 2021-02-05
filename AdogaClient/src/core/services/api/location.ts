import apiService from "./index";

export default class LocationService {
  edit: (category, code) => any;
  getDetail: (categoryId) => any;

  public async getList(): Promise<any> {
    const path = `location`;
    return await apiService.executeApi({
      path,
      showSuccess: false,
      showError: false,
    });
  }

  public async getListLocationTop(): Promise<any> {
    const path = `location/locationTop`;
    return await apiService.executeApi({
      path,
      showSuccess: false,
      showError: false,
    });
  }

  public async getDetailLocationService(locationId): Promise<any> {
    const path = `location/detail?locationId=${locationId}`;
    return await apiService.executeApi({
      path,
      showSuccess: false,
      showError: false,
    });
  }
}
