import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  public empid;
  public empSearched;

  constructor(private service : TestService,private route : ActivatedRoute ,private router : Router) { }

  ngOnInit() {

    this.route.params.subscribe(params=>{
     this.empid = params.Id 

     console.log(this.empid)

     this.service.getEmployeewithId(this.empid)
                  .subscribe((result:any)=>{
                    this.empSearched = result.Data

                 //   console.log(this.empSearched)
                  })
    })
  } 


  Editemp(updateddata)
  {
     // console.log(updateddata.value);
      updateddata.value.Id = this.empid;

      this.service.editEmployee(this.empid,updateddata.value)
                  .subscribe((result:any)=>{
                    if(result.Status == "success")
                    {
                      alert("succesfully updated record....")
                        this.router.navigate(['/home'])
                    }
                    else
                    {
                        alert("Something went Wrong..!!!")
                    }
                  })
  }


}
