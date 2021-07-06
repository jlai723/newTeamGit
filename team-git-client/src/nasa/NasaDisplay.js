import React from 'react'; 
import {
    Card,
    CardMedia
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const NasaDisplay = (props) => {

    const useStyles = makeStyles({ 
        media: {
            height: 0,
            paddingTop: '56.25%',
    
        },
    })
    
    const classes = useStyles()

    return(
    <Card> 
        <CardMedia 
        className = {classes.media}
            image = {props.image} 
        />
    </Card>
    )
}

export default NasaDisplay;