import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { removeStyles } from '@angular/flex-layout';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http:HttpClient) { }
  getAuthToken(){
    const token="adddfdfdf33da"
    return token
  }
  setToken(authToken:string){
localStorage.setItem("token",authToken)
  }
  getToken(){
    const token=localStorage.getItem("token")
    return token;
  }
  removeToken(authToken:string){
localStorage.removeItem(authToken)
  }
}
