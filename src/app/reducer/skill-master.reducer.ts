import { Action } from '@ngrx/store'
import { SkillMasterType } from '../models/skill-master.model';
import * as SkillMasterActions from '../action/skill-master.action';


const initialState: SkillMasterType[] = []

export function reducer(state: SkillMasterType[] = initialState, action: any) {

    switch(action.type) {
        case SkillMasterActions.GET_SKILL_MASTER:
            return [...state];
        case SkillMasterActions.LOAD_SKILL_MASTER:
             return [...state, ...action.payload];
        default:
            return state;
    }
}