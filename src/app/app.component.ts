import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{  

  resume: any =null;  

 constructor(private http:HttpClient){}
 
 ngOnInit():void {
    this.http.get('https://gist.githubusercontent.com/Dharanidharreddy9/a82cc90a62b8dde0f5418d3fdd6ad31a/raw/2a020225b85e9d01b0d9429979553d0172820010/resume.json')
    .subscribe(res => {
      this.resume=res;
        console.log(res);
      });
  } 
}


  // resume ={
  // name : 'DHARANIDHAR ',  
  // title : 'Frontend Developer ',
  // contact : [
  //   {
  //     mobile:8106030130, 
  //     Email:'dbheemavarapu@gmail.com',
  //     Location:'nandyal(ap)',
  //   }
  // ],
  // skills:['HTML','CSS','JavaScript','Angular2+','problem solving'],
  // goals:['TO GET A GOOD JOB IN REPUTED COMPANY','IN FUTURE I WILL BE IN GOOD POSITION LIKE CEO  TO MY OWN COMPANY OR A GOOD BRANDED COMPANY.'],
  // languages:['English','Telugu'],


  // objective :`Critical thinker with an instinct for design who plans to use these qualities in a 
  //                 front-end developer role that allows me to further develop my skills.`,
  

  // projects: [
  //   {
  //     title:'E-commerce site',
  //     Technologies:'HTML,CSS, and JavaScript',
  //   }
  // ],

  // hobbies:['Playing cricket and volleybal','Watching movies and series','Debugging the code' ],

  // education: [
  //   {
  //     school:'sri chaitanya college',
  //     program:'Intermediate(MPC)',
  //     from:'2014 ',
  //     to:'2016'
  //   },
  //   {
  //     school:'sri Ramakrishna Degree college',
  //     program:'Bsc(Bachelor Of science)',
  //     from:'2016',
  //     to:'2019'
  //   },
  //   {
  //     school:'Loyola Academy',
  //     program:'MCA(Master Of Computer Applications',
  //     from:'2019',
  //     to:'2022'   
  //   }  
  // ] , 
  // }


  
