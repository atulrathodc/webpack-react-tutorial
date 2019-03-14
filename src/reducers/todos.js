var r=0;
const todos = (state = [{i:0}], action) => {
  switch (action.type) {

    case 'increment':
      return [
     {i:action.payload}
      ]
  case 'submit1':
      return [{...state[0],i:99}]
      
    //   return [...state,
    //  {"login":false,
    //  "username":null,
    //  "passward":null}
    //   ]
     case "submit" ://'add_user':
      return [...state,  
      {users:[{"login":false,
     "username":"ram1",
     "passward":458475}]}]
      
    default:
      return state
  }
}

export default todos