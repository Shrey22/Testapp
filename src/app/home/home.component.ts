import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public emplist;

  constructor( private service : TestService) { }

  ngOnInit() {
    this.service.getEmployees()
              .subscribe((result:any)=>{
                // console.log(result);
                // console.log(result.Data);
                this.emplist = result.Data
                //console.log(this.emplist);
              })
  }

  Delete(id)
  {
  //  console.log(id)

    this.service.deleteEmployee(id)
                .subscribe((result:any)=>{
                  if(result.Status == "success")
                  {
                  //  alert("Record Deleted Successfully.....")
                    this.ngOnInit()  
                  }
                })
  }

  Salary()
  {
    this.service.getSalary()
                .subscribe((result:any)=>{
                  if(result.Status == "success")
                  {
                    alert("2nd Highest Salary from the record is "+result.Data.salary +" of Mr."+result.Data.name)
                      
                  }
                })
  }
}
