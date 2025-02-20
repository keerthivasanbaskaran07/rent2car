import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
  
    constructor(private http: HttpClient) { }
  
  
    getData(apiUrl:string){
      return this.http.get(apiUrl);
    }
  
    createData(apiUrl: string, requestBody:any){
      return this.http.post(apiUrl, requestBody);
    }
  
    updateData(apiUrl:string, requestBody:any, dataId:string){
      apiUrl += '/'+dataId;
      return this.http.put(apiUrl, requestBody);
    }

    patchData(apiUrl:string,requestBody:any, dataId:string){
      apiUrl +='/'+dataId;
      return this.http.patch(apiUrl, requestBody);
    }
  
    deleteData(apiUrl:string, dataId:string){
      apiUrl += '/'+dataId;
      return this.http.delete(apiUrl);
    }
  
  
  }
  