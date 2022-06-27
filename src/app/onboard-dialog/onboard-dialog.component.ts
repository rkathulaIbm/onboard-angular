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
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef:MatDialogRef<OnboardDialogComponent>,
    private api:ApiService) { 
      


  }

  ngOnInit(): void {

    // this.onboardForm=this.formBuilder.group({

    //   associateName:['',Validators.required],
    //   ibmId:['',Validators.required],
    //   emailIBM:['',[Validators.email,Validators.required]],
    //   location:['',Validators.required],
    //   role:['',Validators.required],
    //   itExpDate:['',Validators.required],
    //   primaryContact:  ['',
    //     Validators.required,
    //     Validators.pattern('^[0-9]*$'),
    //     Validators.minLength(10),
    //     Validators.maxLength(10),
    //   ],
    //   projectId: ['', Validators.required],
      
    //   engagementName: ['', Validators.required],
    //   majorFunction: ['', Validators.required],
    //   band: ['', Validators.required],
      
    //   emailClient: ['', [Validators.email, Validators.required]],
    //   xid: ['', Validators.required],
    //   clientManager: ['', Validators.required],
    //   endDate: ['', Validators.required],
      
    //   city: ['', Validators.required],
    //   billType: ['', Validators.required],
    //   billCode: ['', Validators.required],
      
    //   asOnDate: ['', Validators.required],
    //   clientExpDate: ['', Validators.required],
      
    //   ibmDate: ['', Validators.required],
    //   experienceWithPru: ['', [
    //     Validators.required,
    //     Validators.pattern('^[0-9]*$'),
    //     Validators.maxLength(2),
    //   ]],
    //   careerExperience: ['', [
    //     Validators.required,
    //     Validators.pattern('^[0-9]*$'),
    //     Validators.maxLength(2),
    //   ]],
    //   experienceWithIbm: ['', [
    //     Validators.required,
    //     Validators.pattern('^[0-9]*$'),
    //     Validators.maxLength(2),
    //   ]],
    //   resourceCriticality: ['', Validators.required],
    //   atImmigrationVisaRisks: ['', Validators.required],
    //   backupSuccessorResource: ['', [
    //     Validators.required,
    //     Validators.pattern('^[0-9]*$'),
    //     Validators.maxLength(2),
    //   ]],
    //   keyContingencyGroup: ['', Validators.required],
    //   additionalContingency: ['', Validators.required],
    //   visaType: ['', Validators.required],
    //   workPermitValidUntil: ['', Validators.required],
    //   extensionUpdates: ['', Validators.required],
    //   visaMaxOutDate: ['', Validators.required],
    //   timeLeftInUs: ['', Validators.required],
    //   visaNominations: ['', Validators.required],
    //   riskMitigationComments: ['', Validators.required],
    //   planInCaseOfExtensionAmendmentRejection: [
    //     '',
    //     Validators.required
    //   ],
    //   skillset: ['', Validators.required],
    // });

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
