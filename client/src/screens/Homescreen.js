import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getAllPizzas } from '../actions/pizzaAction.js'

// import pizzas from '../pizzasdata'
import Pizza from '../components/Pizza'
import Loading from '../components/loading'
import Error from '../components/error'


export default function Homescreen() {

    const dispatch = useDispatch();

    const pizzasstate = useSelector(state => state.getAllPizzasReducer);

    const { pizzas, error, loading } = pizzasstate;


    useEffect(() => {

        dispatch(getAllPizzas());

    }, []);



    return (
        <div>
            <div className='row justify-content-center'>

                {loading ? (<Loading/>) : error ? (<Error error='Something Went Wrong'/>) : 
                        (

                    pizzas.map(pizza => {

                        return ( <div className='col-md-3 m-3' key={pizza._id} >
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                        );

                    })

 
                )}


            </div>
        </div>
    )
}



// import React from 'react'
// import pizzas from '../pizzasdata'
// import Pizza from '../components/Pizza'

// export default function Homescreen() {
//     return (
//         <div>
//             <div className='row'>
//                 {pizzas.map(pizza => {

//                     return <div className='col-md-4'>
//                         <div>
//                             <Pizza pizza={pizza}/>
//                         </div>
//                     </div>

//                 })}

//             </div>
//         </div>
//     )
// }
