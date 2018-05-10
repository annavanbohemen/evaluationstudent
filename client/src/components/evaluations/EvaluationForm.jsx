import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card, { CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button'
import Radio from 'material-ui/Radio';
import TextField from 'material-ui/TextField'
import green from 'material-ui/colors/green'
import yellow from 'material-ui/colors/yellow'
import red from 'material-ui/colors/red'
import './EvaluationPage.css'
import {createEvaluation} from '../../actions/evaluations'

class EvaluationForm extends PureComponent {
    state = {
        color: 'green',
        studentId: Number((window.location.href).split('/').pop())
    };

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createEvaluation(this.state) 
    }
    
    // var inventory = [
    //     {name: 'apples', quantity: 2},
    //     {name: 'bananas', quantity: 0},
    //     {name: 'cherries', quantity: 5}
    // ];
    
    // function isCherries(fruit) { 
    //     return fruit.name === 'cherries';
    // }
    
    // console.log(inventory.find(isCherries)); 

	handleChange = (event) => {
        const {name, value} = event.target
        const {evaluations} = this.props

        if (evaluations.find(evaluation => evaluation.date === value)) {
            alert ('date already exists!')}
            else {
                this.setState({
                    [name]: value,
                })
            }
    }


    render() {
        const initialValues = this.props.initialValues || {}

        return(
            <Card className='evaform'>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id='date'
                        name='date'
                        type='date'
                        value={this.state.date || initialValues.date || ''}
                        onChange={this.handleChange}
                        placeholder="DD/MM/YYYY"
                    /> <br/>
                    <TextField
                        id='remark'
                        label='Remarks'
                        name='remark'
                        value={this.state.remark || initialValues.remark || ''}
                        onChange={this.handleChange}
                        fullWidth
                    /> <br/>
                <Radio name="color" value="green" label="Green" checked={this.state.color === 'green'} onChange={ this.handleChange } 
                style={{color: green[600]}}/>
                <Radio name="color" value="yellow" label="Yellow" checked={this.state.color === 'yellow'} onChange={ this.handleChange }
                style={{color: yellow[600]}}/>
                <Radio name="color" value="red" label="Red" checked={this.state.color === 'red'} onChange={ this.handleChange }
                style={{color: red[600]}}/>

                    <CardActions>
                        <Button 
                            type='submit'
                            variant="raised" 
                            className="question-action"
                            onClick={window.history.go(1)}
                        > 
                        Save and Next 
                        </Button>
                    </CardActions>

                </form>
            </Card>
        )
    }
}

const mapStateToProps = function (state) {
	return {
        evaluations: state.evaluations,
	}
}

export default connect(mapStateToProps, {createEvaluation}) (EvaluationForm);

