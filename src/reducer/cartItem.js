const cartItem =(state=[],action) =>{
    switch(action.type){
        case 'ADD':
            return [...state,action.payload ]
        case 'REMOVE':
            return state.filter(cartItem =>cartItem.id !== action.payload.id)
       
        
    } return state
}
export default cartItem;