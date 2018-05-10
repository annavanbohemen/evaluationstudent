import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid';
//import CreateIcon from '@material-ui/icons/Create'
//import InfoOutlineIcon from '@material-ui/icons/InfoOutlineIcon'
import './batches.css'
import { getBatches } from '../../actions/batches'
import {Link} from 'react-router-dom'

class BatchesList extends PureComponent {

    componentWillMount() {
         this.props.getBatches();
        }
  

renderBatch = (batch, index) => {

    return (
        <Grid item xs={12} sm={3} key={index}>
            <Card className="batch-card">
            <CardContent>
                <Typography variant="headline" component="h2">
                    # BATCH{batch.batchNumber}
                </Typography>
                <Typography component="p">
                    Start date: {batch.startDate}<br />
                    End date: {batch.endDate}
                </Typography>
            </CardContent>
                <CardActions>
                    <Link to={`/batches/${batch.id}`} style={{textDecoration: 'none'}}>
                    <Button
                        size="small"
                        color="secondary"
                        variant="raised"
                    >
                        TO BATCH
                    </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )}

    render() {
        const {batches} = this.props

        return(
            <Grid container spacing={24}>
                {batches.map((batch, index) => this.renderBatch(batch, index))}
            </Grid>
            
        )
    }
}

const mapStateToProps = function (state) {
	return {
        batches: state.batches,
	}
}

export default connect(mapStateToProps, {getBatches})(BatchesList)