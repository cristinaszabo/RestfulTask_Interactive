import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Restful Task Interactive';

  tasks = [];
  one_task: any;

  constructor(private _httpService: HttpService){
  } 

  onButtonClick(): void {
    let tempObservable = this._httpService.getTasks();
    tempObservable.subscribe(data => {
      this.tasks = data["all_tasks"];
      console.log("Got our tasks!", data);
  }); 
  }
  onButtonClickParams(id:any): void {
    console.log(`Click event is working with param: ${id}`);
    let tempObservable = this._httpService.getOneTask(id);
    tempObservable.subscribe(data => {
      this.one_task = data["one_task"];
      console.log("Got our task", data);
    });
  }
}