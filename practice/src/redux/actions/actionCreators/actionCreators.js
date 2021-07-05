import axios from 'axios'
import actionTypes from '../actionTypes/actionTypes'

const URL = "https://pokeapi.co/api/v2/pokemon/"

function loadPokemons(){
    return async (dispatch) =>{
        try {
            const {data} = await axios.get(URL)
            
            dispatch(
                {
                    type: actionTypes.LOAD_POKEMONS,
                    pokemons : data.results
                }
            );
        } catch (error) {
            dispatch({
                type: actionTypes.LOAD_POKEMONS_ERROR
            })
        }
    }
}

export default loadPokemons;