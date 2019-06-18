import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../Models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  task: any[] = [];
  constructor(private tareaService: TareaService) {

    const tarea = new Tarea();
    tarea.ID = 2;
    tarea.descripcion = 'Tarea desde App AngularJS';
    tarea.estado = true;
    // tareaService.addtask(tarea);

    tareaService.gettask()
    .subscribe((resp: any) => {
      this.task = resp;
    });
  }

  ngOnInit() {
  }

}
