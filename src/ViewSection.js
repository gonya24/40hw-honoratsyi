import './App.css';
import {Component} from 'react'

 class View extends Component   {
  constructor (props) { 
    super(props)
    this.state = {
    idPost: props.idPost,
    post:[],
    isFetching : true
 }
  }
   



  render() {
    return(
     <div className='viewWindow'>
        <h3>Content</h3>
        <p contentEditable>{this.props.idPost}</p>
     </div>
    )
  };
}

export default View;
