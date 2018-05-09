import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import green from './notebook-green.png'
import yellow from './notebook-yellow.png'
import red from './notebook-red.png'
import Card, {CardMedia, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

class EvaluationForm extends PureComponent {
    state = {}

    render() {
        const initialValues = this.props.initialValues || {}

        return(
            <Card>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id='date'
                        label='Date'
                        name='date'
                        value={this.state.date || initialValues.date || ''}
                        onChange={this.handleChange}
                    />
                    <TextField
                        id='remark'
                        label='Remarks'
                        name='remark'
                        value={this.state.remark || initialValues.remark || ''}
                        onChange={this.handleChange}
                    />
                </form>
                <RadioGroup
                    aria-label="evaluation"
                    name="color"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                <Button name='color' variant="fab" aria-label="green" style={{margin: 3}}>
                 <img src={green}/>
                </Button>
                <Button name='color' variant="fab" aria-label="yellow" style={{margin: 3}}>
                 <img src={yellow}/>
                </Button>
                <Button name='color' variant="fab" aria-label="red" style={{margin: 3}}>
                 <img src={red}/>
                </Button>
                </RadioGroup>
            </Card>
        )
    }
}

export default connect(null)(EvaluationForm)
