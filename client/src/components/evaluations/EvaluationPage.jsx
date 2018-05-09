import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import green from './notebook-green.png'
import yellow from './notebook-yellow.png'
import red from './notebook-red.png'
import { getStudent } from '../../actions/students'
import EvaluationForm from './EvaluationForm'
//import { getBatch } from '../../actions/batches'
import Card, {CardMedia, CardContent} from 'material-ui/Card';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import './EvaluationPage.css'

class EvaluationPage extends PureComponent {

  state = {
    studentId: Number((window.location.href).split('/').pop())
}

   componentWillMount() {
    this.props.getStudent(this.state.studentId)
   }

  render() {
    const {student} = this.props

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
                Evaluations
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
        batch: state.batches
	}
}

export default connect(mapStateToProps, {getStudent})(EvaluationPage)
