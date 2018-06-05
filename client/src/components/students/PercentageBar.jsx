import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

//styling
import '../../css/percentagebar.css'
import '../../css/index.css'

class PercentageBar extends PureComponent {





 render () {
    const {students} = this.props

    if (students.filter(student => student.evaluations[0]).length === 0)
    return(
      <div id='myProgress'>
        Not all students have been evaluated yet
      </div>
      )
    
    if (students.filter(student => student.evaluations[0]).length < students.length) 
    return(
    <div id='myProgress'>
      Not all students have been evaluated yet
    </div>
    )


    const allStudents = students.length
  
    const redStudents = students.filter(student => student.evaluations[student.evaluations.length -1].color === 'red').length
    const redStudentsPercentage = (redStudents / allStudents * 100)
   
    const yellowStudents = students.filter(student => student.evaluations[student.evaluations.length -1].color === 'yellow').length
    const yellowStudentsPercentage = (yellowStudents / allStudents * 100)
  
    const greenStudents = students.filter(student => student.evaluations[student.evaluations.length -1].color === 'green').length
    const greenStudentsPercentage = (greenStudents / allStudents * 100)

    return(
        <div id="myProgress">
          <div id="myGreenBar" style={{width: greenStudentsPercentage + '%'}}>{greenStudentsPercentage.toFixed(2)}%</div>
          <div id='myYellowBar' style={{width: yellowStudentsPercentage + '%'}}>{yellowStudentsPercentage.toFixed(2)}%</div>
          <div id='myRedBar' style={{width: redStudentsPercentage + '%'}}>{redStudentsPercentage.toFixed(2)}%</div>
        </div>
    )
  
 }
}

const mapStateToProps = function (state) {
	return {
        students: state.students
	}
}

export default connect(mapStateToProps) (PercentageBar);