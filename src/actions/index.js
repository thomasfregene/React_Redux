import{
    MOVIES_LIST
}from '../types'

export function moviesList(){
    return{
        type: MOVIES_LIST,
        payload:[
            {id:'1', name: 'Pulp Friction'},
            {id:'2', name: 'Pacific Rim'},
            {id:'3', name: 'Rambo'},
        ]
    }
}