import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid';
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

        return (
        <Grid item xs={12} sm={4} key={index}>
            <Card key={student.id} className="student-card">
                <CardMedia
                    className='media'
                    title='foto of student'
                    image={student.picture} 
                    style={{height: 0, paddingTop: '56.25%'}}
                />
            <CardContent>
                <Typography variant="headline" component="h2">
                    {student.firstName} {student.lastName}
                </Typography>
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
        </Grid>
    )}

    render() {
        const {students} = this.props

        return(
            <Grid container spacing={24}>
                {students.map((student, index) => this.renderStudent(student, index))}
            </Grid>
            
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