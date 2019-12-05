import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private countryEndPoint = 'https://api.worldbank.org/v2/country';
  private regionEndPoint = 'https://api.worldbank.org/v2/region';
  private format = '?per_page=1000&format=json';
  private incomeLevelEndPoint = 'https://api.worldbank.org/v2/incomeLevel';
  private lendingTypeEndPoint = 'https://api.worldbank.org/v2/lendingType';

  constructor(private httpClient: HttpClient) {}

  getAllCountries$() {
    const url = this.countryEndPoint + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }

  getCountryById$(countryId) {
    const url = this.countryEndPoint + '/' + countryId + this.format;
    return this.httpClient.get<any>(url).pipe(map(result => result[1][0]));
  }

  getAllRegions$() {
    const url = this.regionEndPoint + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }
  getRegionByCode(regionCode: any) {
    const url = this.regionEndPoint + '/' + regionCode + this.format;
    return this.httpClient.get<any>(url).pipe(map(result => result[1][0]));
  }

  getCountriesByRegionCode(regionCode: any) {
    const url = this.countryEndPoint + this.format + '&region=' + regionCode;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }
  getCountriesByFilter(filter: any) {
    // https://api.worldbank.org/v2/country?
    // lendingType = LNX &
    // incomeLevel = HIC &
    // region = ECS
    let url = this.countryEndPoint + this.format; // + '&region=' + regionCode;
    if (filter.incomeLevel) {
      url += '&incomeLevel=' + filter.incomeLevel;
    }
    if (filter.lendingType) {
      url += '&lendingType=' + filter.lendingType;
    }
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }
  getIncomeLevels$() {
    const url = this.incomeLevelEndPoint + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }

  getLendingTypes$() {
    const url = this.lendingTypeEndPoint + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }
}
