import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tarea } from '../Models/Tarea';


@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) {

   }

   gettask() {
    return this.http.get('http://localhost:23614/api/v1/Tarea');
   }

   addtask(task: Tarea) {

    this.http.post('http://localhost:23614/api/v1/Tarea', task)
    .subscribe(resp => {
      console.log(resp);
    });

   }
}
