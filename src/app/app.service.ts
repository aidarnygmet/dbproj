import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient:HttpClient) { }

  getCountry(): Observable<any>{
    return this.httpClient.get('https://aidar-dbback.herokuapp.com/country');
  }
  insertCountry(id:string, desc:string):Observable<any>{
    return this.httpClient.post('https://aidar-dbback.herokuapp.com/country',{id:id, desc:desc});
  }
  deleteCountry(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('https://aidar-dbback.herokuapp.com/country', options);
  }
  updateCountry(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('https://aidar-dbback.herokuapp.com/country', {col: col,val: val,cond:cond,cval:cval},);
  }



  getDiscover(): Observable<any>{
    return this.httpClient.get('https://aidar-dbback.herokuapp.com/discover');
  }
  insertDiscover(cname:string, disC:string, fed:string):Observable<any>{
    return this.httpClient.post('https://aidar-dbback.herokuapp.com/discover',{cname:cname, disC:disC, fed:fed});
  }
  deleteDiscover(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('https://aidar-dbback.herokuapp.com/discover', options);
  }
  updateDiscover(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('https://aidar-dbback.herokuapp.com/discover', {col: col,val: val,cond:cond,cval:cval},);
  }



  getDisease(): Observable<any>{
    return this.httpClient.get('https://aidar-dbback.herokuapp.com/disease');
  }
  insertDisease(disc:string, pat:string, desc:string, id:string):Observable<any>{
    return this.httpClient.post('https://aidar-dbback.herokuapp.com/disease',{disc: disc, pat:pat, desc:desc, id:id});
  }
  deleteDisease(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('https://aidar-dbback.herokuapp.com/disease', options);
  }
  updateDisease(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('https://aidar-dbback.herokuapp.com/disease', {col: col,val: val,cond:cond,cval:cval},);
  }



  getDiseaseType(): Observable<any>{
    return this.httpClient.get('https://aidar-dbback.herokuapp.com/disease-type');
  }
  insertDiseaseType(id:string, desc:string):Observable<any>{
    return this.httpClient.post('https://aidar-dbback.herokuapp.com/disease-type',{id:id, desc:desc});
  }
  deleteDiseaseType(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('https://aidar-dbback.herokuapp.com/disease-type', options);
  }
  updateDiseaseType(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('https://aidar-dbback.herokuapp.com/disease-type', {col: col,val: val,cond:cond,cval:cval},);
  }



  getDoctor(): Observable<any>{
    return this.httpClient.get('https://aidar-dbback.herokuapp.com/doctor');
  }
  insertDoctor(id:string, desc:string):Observable<any>{
    return this.httpClient.post('https://aidar-dbback.herokuapp.com/doctor',{id:id, desc:desc});
  }
  deleteDoctor(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('https://aidar-dbback.herokuapp.com/doctor', options);
  }
  updateDoctor(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('https://aidar-dbback.herokuapp.com/doctor', {col: col,val: val,cond:cond,cval:cval},);
  }



  getps(): Observable<any>{
    return this.httpClient.get('https://aidar-dbback.herokuapp.com/public-servant');
  }
  insertps(id:string, desc:string):Observable<any>{
    return this.httpClient.post('https://aidar-dbback.herokuapp.com/public-servant',{id:id, desc:desc});
  }
  deleteps(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('https://aidar-dbback.herokuapp.com/public-servant', options);
  }
  updateps(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('https://aidar-dbback.herokuapp.com/public-servant', {col: col,val: val,cond:cond,cval:cval},);
  }




  getRec(): Observable<any>{
    return this.httpClient.get('https://aidar-dbback.herokuapp.com/record');
  }
  insertRec(disc:string, pat:string, desc:string, id:string, tp:string):Observable<any>{
    return this.httpClient.post('https://aidar-dbback.herokuapp.com/record',{email: disc, cname:pat, disc:desc, td:id, tp:tp});
  }
  deleteRec(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('https://aidar-dbback.herokuapp.com/record', options);
  }
  updateRec(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('https://aidar-dbback.herokuapp.com/record', {col: col,val: val,cond:cond,cval:cval},);
  }



  getSpec(): Observable<any>{
    return this.httpClient.get('https://aidar-dbback.herokuapp.com/specialize');
  }
  insertSpec(id:string, desc:string):Observable<any>{
    return this.httpClient.post('https://aidar-dbback.herokuapp.com/specialize',{id:id, desc:desc});
  }
  deleteSpec(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('https://aidar-dbback.herokuapp.com/specialize', options);
  }
  updateSpec(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('https://aidar-dbback.herokuapp.com/specialize', {col: col,val: val,cond:cond,cval:cval},);
  }




  getUser(): Observable<any>{
    return this.httpClient.get('https://aidar-dbback.herokuapp.com/user');
  }
  insertUser(disc:string, pat:string, desc:string, id:string, tp:string, cname:string):Observable<any>{
    return this.httpClient.post('https://aidar-dbback.herokuapp.com/user',{id: disc, desc:pat, sur:desc, sal:id, ph:tp, cname:cname});
  }
  deleteUser(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('https://aidar-dbback.herokuapp.com/user', options);
  }
  updateUser(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('https://aidar-dbback.herokuapp.com/user', {col: col,val: val,cond:cond,cval:cval},);
  }
}
