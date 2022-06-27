import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-onboard-component',
  templateUrl: './onboard-component.component.html',
  styleUrls: ['./onboard-component.component.scss']
})

export class OnboardComponentComponent implements OnInit {
  public skills = [
    { id: 1, value: 'JAVA' },
    { id: 2, value: 'ANGULAR' },
    { id: 3, value: 'MICROSERVICES' },
    { id: 4, value: 'REACT' },
  ];
  public billtypes = [
    { id: 1, value: 'Time & Money' },
    { id: 2, value: 'Fixed Price' },
  ];
  public rates = [
    { id: 1, value: '1' },
    { id: 2, value: '2' },
    { id: 3, value: '3' },
    { id: 4, value: '4' },
    { id: 5, value: '5' },
  ];
  onboardForm!:FormGroup;
  skillForm!: FormGroup[];
  dummy:any;
  constructor(private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {

    this.onboardForm=this.formBuilder.group({

      associateName:['',Validators.required],
      ibmId:['',Validators.required],
      emailIbm:['',[Validators.email,Validators.required]],
      location:['',Validators.required],
      role:['',Validators.required],
      itExpDate:['',Validators.required],
      primaryContact:  ['',
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ],
      projectId: ['', Validators.required],
      
      engagementName: ['', Validators.required],
      majorFunction: ['', Validators.required],
      band: ['', Validators.required],
      
      emailClient: ['', [Validators.email, Validators.required]],
      xid: ['', Validators.required],
      clientManager: ['', Validators.required],
      endDate: ['', Validators.required],
      
      city: ['', Validators.required],
      billType: ['', Validators.required],
      billCode: ['', Validators.required],
      
      asOnDate: ['', Validators.required],
      clientExpDate: ['', Validators.required],
      
      ibmDate: ['', Validators.required],
      experienceWithClient: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.maxLength(2),
      ]],
      careerExperience: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.maxLength(2),
      ]],
      experienceWithIbm: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.maxLength(2),
      ]],
      resourceCriticality: ['', Validators.required],
      atImmigrationVisaRisks: ['', Validators.required],
      backupSuccessorResource: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.maxLength(2),
      ]],
      keyContingencyGroup: ['', Validators.required],
      additionalContingency: ['', Validators.required],
      visaType: ['', Validators.required],
      workPermitValidUntil: ['', Validators.required],
      extensionUpdates: ['', Validators.required],
      visaMaxOutDate: ['', Validators.required],
      timeLeftInUs: ['', Validators.required],
      visaNominations: ['', Validators.required],
      riskMitigationComments: ['', Validators.required],
      planInCaseOfExtensionAmendmentRejection: [
        '',
        Validators.required
      ],
      h1bNominations: ['', Validators.required],
      skillset:['',Validators.required]
    });

    this.skillForm = [
      this.formBuilder.group({
        skillId: new FormControl('', Validators.required),
        skillRating: new FormControl('', Validators.required),
      }),
    ];

  }
  

  addNewSkillForm() {
    this.skillForm.push(
      this.formBuilder.group({
        skillId: new FormControl('', Validators.required),
        skillRating: new FormControl('', Validators.required),
      })
    );
  }

  saveAssociateCompleteDetail(){

      let associateSkill: any[]=[];
      let i = 0;
      
      this.skillForm.forEach((skill) => {
        if (skill.invalid) {
          i++;
        } else {
          associateSkill.push(skill.value);
        }
      });
      if(this.onboardForm.valid && i == 0){
      let data={
        "associate":this.onboardForm.value,
        "associateSkill":associateSkill
      }
      data.associate.endDate=data.associate.endDate.toISOString().slice(0, 10);
      data.associate.asOnDate=data.associate.asOnDate.toISOString().slice(0, 10);
      data.associate.clientExpDate=data.associate.clientExpDate.toISOString().slice(0, 10);
      data.associate.itExpDate=data.associate.itExpDate.toISOString().slice(0, 10);
      data.associate.ibmDate=data.associate.ibmDate.toISOString().slice(0, 10);
      data.associate.visaMaxOutDate=data.associate.visaMaxOutDate.toISOString().slice(0, 10);
      
      
      console.log("data",data);
        
        this.api.postAssociate(data)
        .subscribe({
          next:(res)=>{
            alert("Associate added successfully");
  
          },
          error:()=>{
            alert("Error");
  
          },
  
        })
      }
    
  }

  addUpdateAssociateDetail(){
    let dummy={
     associate: {
         "associateName": "Rajesh Bhai",
         "ibmId": "00RH32703",
         "projectId": 3453,
         "engagementName": "Test",
         "majorFunction": "Test",
         "band": "Test",
         "primaryContact": "Test",
         "emailIbm": "Test",
         "emailClient": "Test",
         "xid": "Xr123",
         "clientManager": "Test",
         "endDate": "2022-05-14",
         "location": "Test",
         "city": "Test",
         "billType": "Test",
         "billCode": "Test",
         "role": "Test",
         "asOnDate": null,
         "clientExpDate": null,
         "itExpDate": "2022-05-31T18:30:00.000Z",
         "ibmDate": null,
         "experienceWithClient": "Test",
         "careerExperience": "Test",
         "experienceWithIbm": "Test",
         "skillset": "Test",
         "resourceCriticality": "Test",
         "atImmigrationVisaRisks": "Test",
         "backupSuccessorResource": 1,
         "keyContingencyGroup": "Test",
         "additionalContingency": "Test",
         "visaType": "Test",
         "workPermitValidUntil": "Test",
         "extensionUpdates": null,
         "visaMaxOutDate": null,
         "timeLeftInUs": "Test",
         "h1bNominations": "Test",
         "riskMitigationComments": "Test",
         "planInCaseOfExtensionAmendmentRejection": "Test"
     },
     "associateSkill": [
         {
             "skillId": 1,
             "skillRating": "2"
         },
         {
             "skillId": 4,
             "skillRating": "5"
         }
     ]
   };
    let data={
      "associate":this.onboardForm.value,
      "associateSkill":[{  "skillId": 1,"skillRating": "4"},{  "skillId": 2,"skillRating": "3"}]
    }
    console.log("dummy",dummy);
    // if(this.onboardForm.valid){
      this.api.postAssociate(dummy)
      .subscribe({
        next:(res)=>{
          alert("Associate added successfully");

        },
        error:()=>{
          alert("Error");

        },

      })
    // }
  }

  

}
