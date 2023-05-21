import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { city } from '../new-booking/city.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
baseurl:string='http://localhost:3000/'
  constructor(private http:HttpClient) { }
  getDataFormServer(endPoint:string):any{
const url=this.baseurl+endPoint;
return this.http.get(url)
  }
  postDatatoserver(endPoint:string,data:any):any{
const url=this.baseurl+endPoint;
return this.http.post(url,data)
  }
  putDatatoserver(endPoint:string,data:any):any{
    const url=this.baseurl+endPoint;
    return this.http.put(url,data)
      }
      getCIties(searchText:string): Observable<city[]>{
return this.http.get<city[]>(`http://localhost:3000/cities?cityName_like=^${searchText}`);
      }
      deleteDatae(city:any){
        
        return this.http.delete(`http://localhost:3000/cities/${city.id}`)
          
      }
    putData(data:any,id:number){
return this.http.put("http://localhost:3000/cities/"+id,data)
    }
}
