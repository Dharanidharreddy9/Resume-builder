import { Component,Input, OnInit } from '@angular/core';

interface IEducation{
  school:string,
  program:string,
  from:number,
  to:number
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
 
  @Input () education:IEducation[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
