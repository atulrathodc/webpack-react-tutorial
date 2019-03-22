var r=0;

const todos = (state = {mydata:[],count: 0,number:[1, 2, 3, 4, 5]}, action) => {
  console.log(state)
  switch (action.type) {

    case 'increment':

 state.mydata=[
          {"msg":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},
          
       
      ]
          
var newone=state.mydata.map((value,key) =>{
           //value={};
          value.ad={}
          value.ad.open=false;
      return value;
      });

    state = {mydata:newone,count: 0,number:[1, 2, 3, 4, 5]};
     //this.add = this.add.bind(this);
    //  this.handleClick = this.handleClick.bind(this);
  


      return state;


   case 'add':
    const  u=  {"msg":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."};
   // var yy=this;
//  this.setState({mydata:[...this.state.mydata,addone(Object.assign({},u))]});
      state={...state,mydata:[...state.mydata,addone(Object.assign({},u))]};
      return state;
   case 'toggle':
   
      
      var newkey=action.textkey;
         console.log(newkey)
 var newone=state.mydata.map((value,key) =>{
           //value={};
            value.ad.open=false;
                console.log("changing",newkey,key);
         if(newkey==key)
          value.ad.open=true;
      return value;
    });
      state={...state,mydata: newone};
   return state;
    default:
      return state
  }
}
function addone(obj){
    obj.ad={open:false};
  return obj;  
}

export default todos