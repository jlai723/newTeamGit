import React from 'react';
import {
    Container,
    Card,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const NasaDisplay = (props) => {

    const useStyles = makeStyles({
        root: {
            maxWidth: '600px',
            justifyContent: 'center',
            marginBottom: '10px',
        },
        media: {
            height: 0,
            paddingTop: '56.25%',
        },
    })

    const classes = useStyles()

    return (
        <Container className={classes.root}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                />
                <CardContent>
                    <Typography variant="h2" color="textSecondary">YOU ARE HERE!</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default NasaDisplay;