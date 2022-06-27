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
  constructor(private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public associateData : any,
    private dialogRef:MatDialogRef<OnboardDialogComponent>,
    private api:ApiService) { 
      


  }

  ngOnInit(): void {


    // if(this.editData){
    //   this.actionBtn="Update";
    //   this.onboardForm.controls['associateName'].setValue(this.editData.associateName);
    //   this.onboardForm.controls['ibmId'].setValue(this.editData.ibmId);
    //   this.onboardForm.controls['emailIBM'].setValue(this.editData.emailIBM);
    //   this.onboardForm.controls['location'].setValue(this.editData.location);
    //   this.onboardForm.controls['role'].setValue(this.editData.role);
    //   this.onboardForm.controls['itExpDate'].setValue(this.editData.itExpDate);
    // }
  }

  
 

}
