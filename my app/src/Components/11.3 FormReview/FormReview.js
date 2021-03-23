import React, { Component } from 'react'
import Input from './Input'
import Select from './Select'
import Text_Area from './Text_Area'
import './style.css'


class FormReview extends Component {

    state={
        stage: 1,
        firstName: '',
        lastName: '',
        age: '1',
        freeText: '',
    }

    onInputChange(event){
        this.setState({[event.target.name] : event.target.value})
    }

    submitDetails(event){
        event.preventDefault();

        this.setState({stage:2});
    }


    fromRender(){
        if(this.state.stage === 1){ 
            return(
                <form className="form" onSubmit={(event)=>this.submitDetails(event)}>
                  <Input
                    label="First Name: "
                    name="FirstName"
                    value={this.props.FirstName}
                    onChange={(event)=> this.onInputChange(event)}/>

                  <Input
                    label="Last Name: "
                    name="LastName"
                    value={this.props.LastName}
                    onChange={(event)=> this.onInputChange(event)}/>

                  <Select
                    label="Age: "
                    name="Age"
                    onChange={(event)=> this.onInputChange(event)}/>

                 <Text_Area
                  label="Free Text: "
                  name="FreeText"
                  onChange={(event)=> this.onInputChange(event)}/>

                <input className="submit" type={'submit'} value={'Continue'}/>
                </form>
            )
        }

        else if(this.state.stage === 2){
            return(
                <div>
                  {this.state.firstName}
                  <br />
                  {this.state.lastName}
                  <br />
                  {this.state.age}
                  <br />
                  {this.state.freeText}
                  <br />
                  <botton onClick={()=>this.setState({stage: 1})}
                  >Back
                  </botton>
                  <br />
                  <botton onClick={()=>this.setState({stage: 3})}
                  >Send...</botton>
                </div>
            )
        }
        else{
            return(
                <div>The form has been sent successfully</div>
            )
        }
    }
    render() {
        return (
            this.fromRender()
        );
    }
}

export default FormReview;