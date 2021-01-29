import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private empListurl = "http://localhost:64392/api/User";
  private addEmpurl = "http://localhost:64392/api/User";
  private editEmpurl = "http://localhost:64392/api/User/";
  private deleteEmpurl = "http://localhost:64392/api/User/";
  private empwithIdurl = "http://localhost:64392/api/User/";
  private salaryurl = "http://localhost:64392/api/user/SecondMaxSalay";

  constructor(private http : HttpClient) { }

  // get list of all employees
  getEmployees(){
    return this.http.get(this.empListurl);
  }

  // get employee with specific Id
  getEmployeewithId(id){
    return this.http.get(this.empwithIdurl+id);
  }

  //add employee
  addEmployee(data){
    return this.http.post(this.addEmpurl,data)
  }

  //edit employee
  editEmployee(Id,data){
    return this.http.put(this.editEmpurl+Id,data)
  }

  //delete employee
  deleteEmployee(id){
    return this.http.delete(this.deleteEmpurl+id)
  }

  //Get 2nd Hihest Salary
  getSalary()
  {
    return this.http.get(this.salaryurl)
  }
}

