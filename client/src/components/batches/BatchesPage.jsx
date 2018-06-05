import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import BatchesList from './BatchesList'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {createBatch} from '../../actions/batches'

//styling
import '../../css/batches.css'
import '../../css/button.css'
import '../../css/index.css'

class BatchesPage extends PureComponent {
    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createBatch(this.state)   
    }

	handleChange = (event) => {
        const {name, value} = event.target

		this.setState({
          [name]: value
		})
    }


    render() {
        const initialValues = this.props.initialValues || {}

        return(
            <Paper className="outer-paper" style={{minHeight: '40vh'}}>
               <form onSubmit={this.handleSubmit}>
                    <TextField
                        id='batch'
                        label='Batch Number'
                        name='batchNumber'
                        placeholder='#'
                        style={{margin: 10}}
                        InputLabelProps={{
                            shrink: true,
                          }}
                        value={this.state.batchNumber || initialValues.batchNumber || ''}
                        onChange={this.handleChange}
                        />
                    <TextField
                        id='startdate'
                        label='Start Date'
                        name='startDate'
                        type='date'
                        style={{margin: 10}}
                        InputLabelProps={{
                            shrink: true,
                          }}
                        value={this.state.startDate || initialValues.startDate || ''}
                        onChange={this.handleChange}
                        />    
                    <TextField
                        id='enddate'
                        label='End Date'
                        name='endDate'
                        type='date'
                        style={{margin: 10}}
                        InputLabelProps={{
                            shrink: true,
                          }}
                        value={this.state.endDate || initialValues.endDate || ''}
                        onChange={this.handleChange}
                        />   
                            <Button
                                type='submit'
                                color="secondary"
                                variant="raised"
                                className="blueButton"
                                >
                                Create Batch
                            </Button>
                </form>

                <BatchesList/>

            </Paper>  
        )
    }
}

const mapStateToProps = function (state) {
	return {
        batches: state.batches,
	}
}

export default connect(mapStateToProps, {createBatch}) (BatchesPage);

