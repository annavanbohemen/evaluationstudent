import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';

//styling
import '../../css/students.css'
import '../../css/button.css'
import '../../css/index.css'

class AskQButton extends PureComponent {

    randomStudent = (event) => {
        event.preventDefault()
        const {students} = this.props
        const studentsToChose = []

    const pushRandomByColor = (color, allStudents) => {
        const {students} = this.props

        let studentsColor = students.filter(student => student.evaluations[0].color === color)
        if (studentsColor.length === 0 ) return null
        let colorToAdd = studentsColor[Math.floor(Math.random()*studentsColor.length)]
        studentsToChose.push(colorToAdd)
    }

    while (studentsToChose.length<100) {
        while(studentsToChose.length<53) {
            const statusRed = pushRandomByColor('red', students)
            if(statusRed === null) {
                const statusGrey = pushRandomByColor('Not Graded Yet!', students)
                if(statusGrey === null) break
            }
        }
        while(studentsToChose.length<81) {
            const statusYellow = pushRandomByColor('yellow', students)
            if(statusYellow === null) {
                const statusGrey = pushRandomByColor('Not Graded Yet!', students)
                if(statusGrey === null) break
            }
        }
        
        const statusGreen = pushRandomByColor('green', students)
        if(statusGreen === null) {
            const statusGrey = pushRandomByColor('Not Graded Yet!', students)
            if(statusGrey === null) break
        }
          
    }
    const chosenStudent = studentsToChose[Math.floor(Math.random()*studentsToChose.length)];
    return alert(chosenStudent.firstName + ' ' + chosenStudent.lastName)
}


    render() {
        const {students} = this.props

        if (students.filter(student => student.evaluations[0]).length === 0) return null

        return (
            <div className="ask-question">
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="AlgoButton"
                    onClick={ this.randomStudent }
                     >
                    ASK RANDOM QUESTION
                </Button>
            </div>
        )
    }
}


const mapStateToProps = function (state) {
	return {
        students: state.students
	}
}

export default connect(mapStateToProps) (AskQButton);