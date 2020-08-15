import React from 'react';

class Form extends React.Component {   
  constructor(props){
    super(props);
    this.state={
  //Defining states
      isSubmitted : false,
      userName: '',
      breed: '',
      age: '',
      gender: '',
      weight:'',
    };

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
}
  handleChange(event){
    this.setState({
      //settng up states with current values
      [event.target.id]: event.target.value
  })
      
      event.preventDefault();
  }

  handleSubmit(event){
    //Alerting on Submit
    alert('Thank you form has submitted')
    this.setState({
      isSubmitted: true
    });
    
      event.preventDefault();
  }

render(){  
   return(
     
       <form onSubmit = {this.handleSubmit} id='my-form'>
            
            <label> Name : 
            <input id="userName" className="field" type="text" placeholder="Dog's Name" value={this.state.userName} onChange={this.handleChange} />
            </label>
            <br/>
            <input className="field" type="file" id="myFile" name="filename"/>
            <input type="submit"/>
            <br/><br/>
            <label>Breed : 
              <input id="breed" className="field"  type="text" placeholder="Pet's Breed" value={this.state.breed} onChange={this.handleChange}/>
            </label>
            <label > Birthday :
                <input id="age" className="field" type="text" placeholder="MM/DD/YY" value={this.state.age} onChange={this.handleChange}/>
                <br></br>
            </label>  
           <br/>
            Male :
            <input type="checkbox" id="toggle" className="checkbox"/>
            <br/>
            Female :
            <input type="checkbox" id="toggle" className="checkbox"/>
            <br/>  
            Spayed or Neutered :
            <label htmlFor= "toggle" className= "switch2">
                <br/>
               <input type="checkbox" id="toggle" className="checkbox"/>
            </label>
            <br/>
            <label>
            <br/>
             Weight  : 
             <input id ="weight" className="field" type="checkbox" type="text" placeholder="lbs" value={this.state.weight} onChange={this.handleChange}/>
            </label>
            <div className= "bottomButton">
        <div className="btn1"> <button id="b_button">Back</button></div>
           <div className="btn2"> <button id="b_button">Next</button></div>
            
        </div>
       </form>
      
   );
}
}
 
export default Form;