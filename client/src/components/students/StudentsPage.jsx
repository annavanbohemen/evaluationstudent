import React, {PureComponent} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import StudentsList from './StudentsList'
import PercentageBar from './PercentageBar'
import AskQButton from './AskQButton'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {createStudent} from '../../actions/students'

//styling
import '../../css/students.css'



class StudentsPage extends PureComponent {
    
    state = {
        batchId : Number((window.location.href).split('/').pop())
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createStudent(this.state)   
    }

	handleChange = (event) => {
        const {name, value} = event.target

		this.setState({
          [name]: value,
		})
    }


    render() {
        const {authenticated} = this.props
        const initialValues = this.props.initialValues || {}

        if (!authenticated) return ( <Redirect to="/login" /> )

        return(
            <Paper className="outer-paper">
               <form onSubmit={this.handleSubmit} className='createStudent'>
                    <TextField
                        id='student'
                        label='Student Firstname'
                        name='firstName'
                        InputLabelProps={{
                            shrink: true,
                          }}
                        value={this.state.firstName || initialValues.firstName || ''}
                        onChange={this.handleChange}
                        style={{margin: 10}}
                        />
                    <TextField
                        id='student'
                        label='Student Lastname'
                        name='lastName'
                        InputLabelProps={{
                            shrink: true,
                          }}
                        value={this.state.lastName || initialValues.lastName || ''}
                        onChange={this.handleChange}
                        style={{margin: 10}}
                        />   
                    <TextField
                        id='picture'
                        label='Picture URL'
                        name='picture'
                        InputLabelProps={{
                            shrink: true,
                          }}
                        value={this.state.picture || initialValues.picture || ''}
                        onChange={this.handleChange}
                        style={{margin: 10}}
                        />   
                            <Button
                                type='submit'
                                color="secondary"
                                variant="raised"
                                className="customButton"
                                >
                                Create Student
                            </Button>
                </form>
                          <PercentageBar/>


                    <AskQButton/>

                <StudentsList/>

            </Paper>  
        )
    }
}

const mapStateToProps = function (state) {
	return {
        authenticated: state.currentUser !== null,
        students: state.students
	}
}

export default connect(mapStateToProps, {createStudent}) (StudentsPage);
