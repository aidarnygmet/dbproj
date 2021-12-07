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
    return this.httpClient.get('http://localhost:3000/country');
  }
  insertCountry(id:string, desc:string):Observable<any>{
    return this.httpClient.post('http://localhost:3000/country',{id:id, desc:desc});
  }
  deleteCountry(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('http://localhost:3000/country', options);
  }
  updateCountry(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('http://localhost:3000/country', {col: col,val: val,cond:cond,cval:cval},);
  }



  getDiscover(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/discover');
  }
  insertDiscover(cname:string, disC:string, fed:string):Observable<any>{
    return this.httpClient.post('http://localhost:3000/discover',{cname:cname, disC:disC, fed:fed});
  }
  deleteDiscover(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('http://localhost:3000/discover', options);
  }
  updateDiscover(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('http://localhost:3000/discover', {col: col,val: val,cond:cond,cval:cval},);
  }



  getDisease(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/disease');
  }
  insertDisease(disc:string, pat:string, desc:string, id:string):Observable<any>{
    return this.httpClient.post('http://localhost:3000/disease',{disc: disc, pat:pat, desc:desc, id:id});
  }
  deleteDisease(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('http://localhost:3000/disease', options);
  }
  updateDisease(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('http://localhost:3000/disease', {col: col,val: val,cond:cond,cval:cval},);
  }



  getDiseaseType(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/disease-type');
  }
  insertDiseaseType(id:string, desc:string):Observable<any>{
    return this.httpClient.post('http://localhost:3000/disease-type',{id:id, desc:desc});
  }
  deleteDiseaseType(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('http://localhost:3000/disease-type', options);
  }
  updateDiseaseType(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('http://localhost:3000/disease-type', {col: col,val: val,cond:cond,cval:cval},);
  }



  getDoctor(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/doctor');
  }
  insertDoctor(id:string, desc:string):Observable<any>{
    return this.httpClient.post('http://localhost:3000/doctor',{id:id, desc:desc});
  }
  deleteDoctor(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('http://localhost:3000/doctor', options);
  }
  updateDoctor(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('http://localhost:3000/doctor', {col: col,val: val,cond:cond,cval:cval},);
  }



  getps(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/public-servant');
  }
  insertps(id:string, desc:string):Observable<any>{
    return this.httpClient.post('http://localhost:3000/public-servant',{id:id, desc:desc});
  }
  deleteps(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('http://localhost:3000/public-servant', options);
  }
  updateps(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('http://localhost:3000/public-servant', {col: col,val: val,cond:cond,cval:cval},);
  }




  getRec(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/record');
  }
  insertRec(disc:string, pat:string, desc:string, id:string, tp:string):Observable<any>{
    return this.httpClient.post('http://localhost:3000/record',{email: disc, cname:pat, disc:desc, td:id, tp:tp});
  }
  deleteRec(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('http://localhost:3000/record', options);
  }
  updateRec(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('http://localhost:3000/record', {col: col,val: val,cond:cond,cval:cval},);
  }



  getSpec(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/specialize');
  }
  insertSpec(id:string, desc:string):Observable<any>{
    return this.httpClient.post('http://localhost:3000/specialize',{id:id, desc:desc});
  }
  deleteSpec(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('http://localhost:3000/specialize', options);
  }
  updateSpec(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('http://localhost:3000/specialize', {col: col,val: val,cond:cond,cval:cval},);
  }




  getUser(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/user');
  }
  insertUser(disc:string, pat:string, desc:string, id:string, tp:string, cname:string):Observable<any>{
    return this.httpClient.post('http://localhost:3000/user',{id: disc, desc:pat, sur:desc, sal:id, ph:tp, cname:cname});
  }
  deleteUser(col:string, val:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {
        col: col,
        val: val,
        },
    };
    return this.httpClient.delete('http://localhost:3000/user', options);
  }
  updateUser(col:string, val:string, cond:string, cval:string):Observable<any>{
    return this.httpClient.put('http://localhost:3000/user', {col: col,val: val,cond:cond,cval:cval},);
  }
}
