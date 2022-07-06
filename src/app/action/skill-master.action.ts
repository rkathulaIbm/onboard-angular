import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { SkillMasterType } from 'src/app/models/skill-master.model'

export const GET_SKILL_MASTER = 'GET_SKILL_MASTER'
export const LOAD_SKILL_MASTER = 'LOAD_SKILL_MASTER'


export class GetSkillMaster implements Action {
    readonly type = GET_SKILL_MASTER
    constructor() {}
}

export class loadSkillMaster implements Action {
    readonly type = LOAD_SKILL_MASTER
    constructor(public payload: SkillMasterType[]) {}
}

export type Actions = GetSkillMaster | loadSkillMaster