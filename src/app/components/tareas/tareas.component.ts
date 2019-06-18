import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../Models/Tarea';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  todoForm: FormGroup;
  task: any[] = [];
   _tareaService: any;
  constructor(private tareaService: TareaService, private formbiulder: FormBuilder) {
   this._tareaService = tareaService;

   this._tareaService.gettask()
   .subscribe((resp: any) => {
     this.task = resp;
   });
  }


  ngOnInit() {
    this.todoForm = this.formbiulder.group({
      descripcion: [''],
      estado: false
    });
  }

  createtask(FormsValue: any) {

    const tarea = new Tarea();
    tarea.descripcion = FormsValue.descripcion;
    tarea.estado = FormsValue.estado;
    console.log(FormsValue);
    this._tareaService.addtask(tarea);


  }
}
