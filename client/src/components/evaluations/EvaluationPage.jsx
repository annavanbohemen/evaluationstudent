import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getStudent } from '../../actions/students'
import { getEvaluations } from '../../actions/evaluations'
import EvaluationForm from './EvaluationForm'
import Card, {CardMedia, CardContent} from 'material-ui/Card';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid';
import './EvaluationPage.css'

class EvaluationPage extends PureComponent {

  state = {
    studentId: Number((window.location.href).split('/').pop())
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
      <Paper className='outer-paper'>
        <Card className='evaluation-card'>
        <CardMedia
                    className='media'
                    title='foto of student'
                    image={student.picture} 
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
    )
  }

}

const mapStateToProps = function (state) {
	return {
        student: state.students,
        evaluation: state.evaluations
        
	}
}

export default connect(mapStateToProps, {getStudent, getEvaluations})(EvaluationPage)
