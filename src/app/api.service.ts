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
  getCountriesByFilters() {
    const url = this.countryEndPoint + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));

  }
  getIncomes(){
    return [
    {id: "HIC", description: "high"},
    {id: "INX", description: "high"},
    {id: "LIC", description: "high"},
    {id: "LMC", description: "high"},
    {id: "LMY", description: "high"},
    {id: "MIC", description: "high"},
    {id: "UMC", description: "high"}
  ];
  }
}
