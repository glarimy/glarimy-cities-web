import {ACTION_TYPES} from '../actions/actions.js';

export default function reducer (state={
    articals:[],
    more: true
}, action){
    switch(action.type){
        case ACTION_TYPES.ARTICALS_FIRST_PAGE:
            return {
                articals: action.articals,
                more: true
            }
        case ACTION_TYPES.ARTICALS_NEXT_PAGE:
            return {
                articals: [...state.articals, ...action.articals],
                more: true
            }
        case ACTION_TYPES.ARTICALS_NO_MORE:
            return {
                articals: state.articals,
                more: false
            }
        default:
            return state;
    }
}