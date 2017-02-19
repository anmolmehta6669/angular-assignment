import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {Task} from "../task";
import {Router} from "@angular/router";

@Component({
  selector: 'show',
  templateUrl: './app/showTask/showTask.component.html',
  styleUrls: ['']
})

export class ShowComponent implements OnInit{
  constructor(private service: AppService, private router: Router) {}
  myTask:Task[];
  ngOnInit(){
    this.myTask=this.service.taskArray;
  }
  goToHome(task:Task){
    this.service.taskArray.splice(this.service.taskArray.indexOf(task),1)
    this.router.navigate(['home'])
  }
  editing(task:Task){
    this.router.navigate(['create',task])
  }
}
