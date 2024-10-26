// src/app/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

interface Task {
  id: number;
  titulo: string;
}

type TaskColumn = 'noIniciado' | 'porIniciar' | 'iniciado' | 'porConfirmar' | 'terminado';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}
  tasks: Record<TaskColumn, Task[]> = {
    noIniciado: [{ id: 1, titulo: 'Tarea 1' }, { id: 2, titulo: 'Tarea 2' }],
    porIniciar: [{ id: 3, titulo: 'Tarea 3' }],
    iniciado: [{ id: 4, titulo: 'Tarea 4' }],
    porConfirmar: [{ id: 5, titulo: 'Tarea 5' }],
    terminado: [{ id: 6, titulo: 'Tarea 6' }]
  };

  drop(event: CdkDragDrop<Task[]>, targetColumn: TaskColumn): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const sourceColumn = event.previousContainer.id as TaskColumn;
      transferArrayItem(
        this.tasks[sourceColumn],
        this.tasks[targetColumn],
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
