

export const initialState={basket:[] ,
                           user: null          
                          }

 export const cartreducer=(state,action)=>{
     
    switch (action.type) 
    {
        

        case 'ADD_TO_BASKET':
            return{...state,
                basket:[...state.basket,action.item]}
            
            

        case 'REMOVE_FROM_BASKET':
             
           const index=state.basket.findIndex(
                      (basketitem)=>basketitem.id===action.id)
                      let newBasket=[...state.basket];
                      if(index>=0)
                      {
                          newBasket.splice(index,1)
                           return {...state,basket:newBasket}
                      }
                      else
                      {
                        console.log(action.id)
                        console.warn("cant remove(id:${action.id})as it is not in the basket")
                      }
                      return{
                        ...state,
                        basket:newBasket
                      }

                      case 'SET_USER':

                     return{
                           ...state,
                           user:action.user
                     }
                      
             
           default:
            return state 
        
      
    }
    
 }