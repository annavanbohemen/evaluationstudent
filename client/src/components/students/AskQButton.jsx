import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import './students.css'

class AskQButton extends PureComponent {

    generatePercentageColor = (colors, percentages) => {
        let percentage_colors = []
         
        colors.forEach((color, index) => {
            let colorArray = Array(percentages[index]).fill(color)
            percentage_colors.push(...colorArray)
        })
        
        return percentage_colors;
    }

    randomStudent = (event) => {
        event.preventDefault()
        const {students} = this.props

        const colors = ['red', 'yellow', 'green']
        const percentages = [53, 28, 19]
        const percentage_colors = this.generatePercentageColor(colors, percentages)

        let pickedColor = percentage_colors[Math.floor(Math.random()*percentage_colors.length)]

        let selectedStudents = students.filter(student => student.evaluations[0].color === pickedColor)

        let chosenStudent = selectedStudents[Math.floor(Math.random()*selectedStudents.length)]

        if(!chosenStudent) {
            alert("not enough student evaluations, please try again!")
        } else {
            alert(chosenStudent.firstName + ' ' + chosenStudent.lastName)
        }
    }





    render() {


        return (
            <div className="ask-question">
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    style={{backgroundColor:'#3f51b5'}}
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
        students: state.students,
	}
}

export default connect(mapStateToProps) (AskQButton);