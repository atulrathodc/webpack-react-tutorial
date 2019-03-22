import React,{Component}  from 'react'
import { connect } from 'react-redux'
import { increment,add,toggle } from '../actions';
import Block from '../components/block'
import ContainerBlock from '../components/containerblock'


const Axios = require('axios'); 


//const AddTodo = ({ active,sendTheAlert,ss }) => {

 class Accord extends Component {
  constructor(props) {
     super(props);
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
}
  
addone(obj){
//     obj.ad={open:false};
//   return obj;  
}
    handleClick(newkey) {


  }
add(){

    const  u=  {"msg":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."};
    var yy=this;
 this.setState({mydata:[...this.state.mydata,this.addone(Object.assign({},u))]});
//     setInterval(function(){
//  this.setState({mydata:[...this.state.mydata,this.addone(Object.assign({},u))]});
//     },5000)

}
componentDidMount(){
//     this.add()
//      this.setState({add1:this.add});
//   // this.addone(Object.assign({},u))
}
 render()
  {
     
 var input;
var nextTodoId = 0

  return (
       <React.Fragment>
            <div>
     fgjhfg
      {/*<div>{this.props.active}</div>*/}
      {/*<form
        onSubmit={e => {
         // console.log(addTodo)
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
        this.props.increase() ;
        this.props.submit("payload") ;
          
//sendTheAlert();
       // dispatch (async_addTodo(input.value));
 //  this.props.ss( increment(input.value))
      // this.props.dispatch( addTodo("dfg"))

// input.value = ''
         
         
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>*/}
    <form  onSubmit={e => {
               e.preventDefault();
      this.props.increase( )
   
          console.log(this.myRef1.current.value,this.myRef2.current.value);
          }}>
  First name:<br/>
  <input type="text" name="firstname" ref={this.myRef1}/><br/>
  Last name:<br />
  <input type="text" name="lastname" ref={this.myRef2}/>
         <button type="submit">initial add</button>
    </form>
     <button type="button" onClick={()=>{ this.props.add()}}>add</button>
      
    </div>
<ContainerBlock {...this.props} toggle={(i)=>this.props.toggle(i)}/>

  </React.Fragment>
  )
  
  }
}



const mapStateToProps = function (state, ownProps) {
    console.log("state",state,ownProps);

  
  return {
   mydata:state.accord.mydata,
count:state.accord.count,
number:state.accord.number,

}}

function mapDispatchToProps(dispatch) {
    return({

        increase: () => {dispatch(increment("text"))},
        add: (paypload) => {dispatch(add(paypload))},
        toggle: (key) => {dispatch(toggle(key))},
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Accord);
