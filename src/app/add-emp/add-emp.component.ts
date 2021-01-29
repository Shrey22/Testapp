import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor( private service:TestService , private router:Router) { }

  ngOnInit() {
  }

  Addemp(newEmp)
  {
    //console.log(newEmp.value)

    this.service.addEmployee(newEmp.value)
                .subscribe((result:any)=>{
                  if(result.Status == "success")
                  {
                    alert("Employee added Successfully.....")
                    this.router.navigate(['/home'])  
                  }
                  else
                  {
                    alert("Somthing Went Wrong!!!")
                    this.router.navigate(['/addemp']) 
                  }
                })
  }
}
