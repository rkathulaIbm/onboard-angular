import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-onboard-dialog',
  templateUrl: './onboard-dialog.component.html',
  styleUrls: ['./onboard-dialog.component.scss']
})
export class OnboardDialogComponent implements OnInit {
  onboardForm!:FormGroup;
  actionBtn:string="Save";
  associateBasicData:any;
  associateSkillsData:any;
   skills = [{"skillId":3,"skillName":"MICROSERVICES","status":"ACTIVE"},{"skillId":5,"skillName":"ADOBE FLEX","status":"ACTIVE"},{"skillId":6,"skillName":"ACME","status":"ACTIVE"},{"skillId":7,"skillName":"ARCHITECTURE","status":"ACTIVE"},{"skillId":9,"skillName":"AJAX","status":"ACTIVE"},{"skillId":4,"skillName":"REACT","status":"ACTIVE"},{"skillId":1,"skillName":"JAVA","status":"ACTIVE"},{"skillId":2,"skillName":"ANGULAR","status":"ACTIVE"},{"skillId":8,"skillName":"AUTOSYS","status":"ACTIVE"},{"skillId":10,"skillName":"ANGULAR JS","status":"ACTIVE"}];
  
  constructor(private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public associate : any,
    private dialogRef:MatDialogRef<OnboardDialogComponent>,
    private api:ApiService) { 
      


  }

  ngOnInit(): void {
    
    this.getAssociates(this.associate);
    
  }
   
  getSkillName(skillId:any){
    return this.skills.find(item => item.skillId === skillId)?.skillName;

  }

  getAssociates(associate:any){
    this.api.getSingleAssociateCompleteDetails(associate)
    .subscribe({
      next:(res)=>{
        
         this.associateBasicData=res.associate;
         this.associateSkillsData=res.associateSkill;

      },
      error:()=>{
        alert("Error");

      },

    })
  }

  
 

}
