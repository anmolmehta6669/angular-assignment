import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Task} from "../task";
import {AppService} from "../app.service";


@Component({
  selector: 'create',
  templateUrl: './app/createTask/createTask.component.html',
  styleUrls: ['']
})

export class CreateComponent implements OnInit{
  task=new Task('dd/mm/yyyy','title','description','default');
  index:number=-1;
  constructor(private service: AppService,private route: ActivatedRoute, private router: Router) {}

  ngOnInit(){
    this.route.params.subscribe((data:Task)=>{
      this.index=this.service.taskArray.indexOf(data);
      this.service.taskArray.splice(this.index,1)
      this.task.date=data.date;
      this.task.title=data.title;
      this.task.priority=data.priority;
      this.task.description=data.description;
    });
  }
  pushTask() {
      this.service.taskArray.push(this.task)

    this.router.navigate(['show'])
  }
}
