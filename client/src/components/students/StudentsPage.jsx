import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import StudentsList from './StudentsList'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {createStudent} from '../../actions/students'
import './students.css'



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
        const initialValues = this.props.initialValues || {}

        return(
            <Paper className="outer-paper">
               <form onSubmit={this.handleSubmit} className='createStudent'>
                    <TextField
                        id='student'
                        label='Student Firstname'
                        name='firstName'
                        value={this.state.firstName || initialValues.firstName || ''}
                        onChange={this.handleChange}
                        style={{margin: 10}}
                        />
                    <TextField
                        id='student'
                        label='Student Lastname'
                        name='lastName'
                        value={this.state.lastName || initialValues.lastName || ''}
                        onChange={this.handleChange}
                        style={{margin: 10}}
                        />   
                    <TextField
                        id='picture'
                        label='Picture URL'
                        name='picture'
                        value={this.state.picture || initialValues.picture || ''}
                        onChange={this.handleChange}
                        style={{margin: 10}}
                        />   
                            <Button
                                type='submit'
                                color="secondary"
                                variant="raised"
                                className="create-student"
                                >
                                Create Student
                            </Button>
                </form>
                    <div id="myProgress">
                        <div id="myBar">10%</div>
                    </div>

                <StudentsList/>

            </Paper>  
        )
    }
}

const mapStateToProps = function (state) {
	return {
        students: state.students,
	}
}

export default connect(mapStateToProps, {createStudent}) (StudentsPage);
