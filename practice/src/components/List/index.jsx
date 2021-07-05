import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import loadPokemons from '../../redux/actions/actionCreators/actionCreators'

function List(){
    debugger
    const dispatch = useDispatch();
    const pokemons = useSelector((store) => store.pokemons)
    
    useEffect(() => {
       if(!pokemons.length)dispatch(loadPokemons())
    },[]);

    return(
        <ul>
            {
                pokemons?.map((item) => <li>{item.name}</li>)
            }
        </ul>
    )
}

export default List