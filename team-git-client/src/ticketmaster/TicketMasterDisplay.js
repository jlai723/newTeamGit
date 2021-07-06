import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Card,
    CardHeader,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid
} from '@material-ui/core';
//import '@fontsource/roboto';

const TMDisplay = (props) => {
    const useStyles = makeStyles({
        root: {
            minWidth: 200,
            marginTop: 12,
        },
        media: {
            height: 0,
            paddingTop: '56.25%',
        },
        gridContainer: {
            paddingRight: '20px',
            paddingLeft: '20px',
        },
        cardContent: {
            paddingTop: '0px',
        },
        cardHeader: {
            paddingBottom: '0px',
        },
    });

    const classes = useStyles();

    const eventMapper = () => {
        if (props.result) {
            return props.result.map((e) => {
                return (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardHeader
                                className={classes.cardHeader}
                                title={e.name}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography>
                                    {e._embedded.venues[0].name}
                                </Typography>
                                <Typography>
                                    {e.dates.start.localDate}
                                </Typography>
                                <Typography>
                                    {e.dates.start.localTime}
                                </Typography>
                            </CardContent>
                            <CardMedia
                                className={classes.media}
                                image={e.images[6].url}
                            />
                            <CardActions style={{ justifyContent: 'center' }}>
                                <Button href={e.url} target="_blank" size="small" color="secondary" variant="contained">Buy Tickets</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })
        }
    }

    return (
        <div>
            <Grid container className={classes.gridContainer} spacing={4} justify="center">
                {eventMapper()}
            </Grid>
        </div>
    )
}

export default TMDisplay;