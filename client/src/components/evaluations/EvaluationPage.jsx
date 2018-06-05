import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getStudent, updateStudent } from '../../actions/students'
import { getEvaluations } from '../../actions/evaluations'
import EvaluationForm from './EvaluationForm'
import Card, {CardMedia, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import StudentEditForm from './StudentEditForm'
import './EvaluationPage.css'

class EvaluationPage extends PureComponent {

  state = {
    studentId: Number((window.location.href).split('/').pop()),
    edit: false
}

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
}

  updateStudent = (student) => {
    this.props.updateStudent(this.state.studentId, student)
    this.toggleEdit()
}

   componentWillMount() {
    this.props.getStudent(this.state.studentId)
    this.props.getEvaluations(this.state.studentId)
   }


   renderEvaluation = (evaluation, index) => {
    return (
      <Grid item xs={12} sm={1} key={index}>
        <img src={`/notebook-${evaluation.color}.png`} alt={evaluation.color} />
        </Grid>
    )}

  render() {
    const {student, evaluation} = this.props
   
    return(
      <div>
      {
        this.state.edit &&
        <StudentEditForm initialValues={student} onSubmit={this.updateStudent} />
      }
      {
          !this.state.edit &&
      <Paper className='outer-paper'>
        <Card className='evaluation-card'>
          <div className="edit-button">
            <Button 
                type='submit'
                variant="raised" 
                color="secondary"
                className="pinkButton"
                onClick={ this.toggleEdit }
                > 
                            EDIT 
              </Button>
            </div>
        <CardMedia
                    className='media'
                    title='foto of student'
                    image={student.picture || '/placeholder.png'} 
                    style={{width: 151, height: 151,}}
                />
        <CardContent>
                <Typography variant="headline" component="h2">
                    {student.firstName} {student.lastName}
                </Typography>
                <Typography variant="subheading" component="h4">
                <div>
                <h6> Evaluations </h6>
                  <Grid container spacing={24}>
                      {evaluation.map((evaluation, index) => this.renderEvaluation(evaluation, index))}
                  </Grid>
                </div>
                </Typography>
            </CardContent>
            <div className='evaluations'>
            </div>
        </Card>
    
        <div>
          <EvaluationForm/>
          </div>
      </Paper>
      }
      </div>
    )
  }

}

const mapStateToProps = function (state) {
	return {
        student: state.student,
        evaluation: state.evaluations
        
	}
}

export default connect(mapStateToProps, {getStudent, getEvaluations, updateStudent})(EvaluationPage)
