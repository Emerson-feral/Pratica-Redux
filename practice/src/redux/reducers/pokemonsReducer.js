import actionTypes from '../actions/actionTypes/actionTypes'

function pokemonsReducer(pokemons = [], action){
    if(action.type === actionTypes.LOAD_POKEMONS){
        return action.pokemons;
    }
    return pokemons
}
export default pokemonsReducer