import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
//import CreateIcon from '@material-ui/icons/Create'
//import InfoOutlineIcon from '@material-ui/icons/InfoOutlineIcon'
import './students.css'
import { getStudents, deleteStudent } from '../../actions/students'
import {Link} from 'react-router-dom'

  
class StudentsList extends PureComponent {


    state = {
        batchId: Number((window.location.href).split('/').pop())
    }

    deleteStudent = (studentId) => {
        this.props.deleteStudent(studentId)
      }

    componentWillMount() {
         this.props.getStudents(this.state.batchId);
        }
  

    renderStudent = (student, index) => {

        return (<div key={index}>
            <Card  className="student-card">
            <CardContent>
                <Typography variant="headline" component="h2">
                    {student.firstName} {student.lastName}
                </Typography>
                <CardMedia
                className='media'
                title='foto of student'
                src={student.picture}
                />
            </CardContent>
                <CardActions>
                    <Link to={`/students/edit/${student.id}`}>
                    <Button
                        size="small"
                        variant="raised"
                        > 
                            STUDENT INFO 
                    </Button> 
                    </Link>
                    <Button
                        size="small"
                        variant="raised"
                        onClick={ () => this.deleteStudent(student.id) }
                        > 
                            DELETE STUDENT 
                    </Button> 
                </CardActions>
            </Card>
        </div>
    )}

    render() {
        const {students} = this.props

        return(
            <div>
                {students.map((student, index) => this.renderStudent(student, index))}
            </div>
            
        )
    }
}

const mapStateToProps = function (state) {
	return {
        students: state.students,
        batches: state.batches
	}
}

export default connect(mapStateToProps, {getStudents, deleteStudent})(StudentsList)