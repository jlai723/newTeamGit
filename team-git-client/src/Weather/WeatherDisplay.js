import React, { useState } from 'react';
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

const WeatherDisplay = (props) => {
    const [unit, setUnit] = useState(' \u00b0F');
    const [btn, setBtn] = useState('Change to Celsius');
    const [currTemp, setCurrentTemp] = useState(props.weatherInfo.main.temp);
    const [feelsTemp, setFeelsTemp] = useState(props.weatherInfo.main.feels_like);

    const toggleBtn = () => {
        if (unit === ' \u00b0F') {
            setUnit(' \u00b0C');
            setBtn('Change to Fahrenheit');
            setCurrentTemp(((currTemp - 32) * 0.5556).toFixed(2));
            setFeelsTemp(((feelsTemp - 32) * 0.5556).toFixed(2));
        } else {
            setUnit(' \u00b0F');
            setBtn('Change to Celsius');
            setCurrentTemp(props.weatherInfo.main.temp);
            setFeelsTemp(props.weatherInfo.main.feels_like);
        }
    }

    const useStyles = makeStyles({
        root: {
            display: 'flex',
        },
        media: {
            height: 0,
            paddingTop: '56.25%',
        },
    });

    const classes = useStyles();

    const display = () => {
        if (props.weatherInfo) {
            return (
                <Card className={classes.root}>
                    <CardHeader
                        title={props.weatherInfo.name}
                    />
                    <CardMedia
                        className={classes.media}
                        image={`http://openweathermap.org/img/w/${props.weatherInfo.weather[0].icon}.png`}
                    />
                    <CardContent>
                        <Typography>
                            {props.weatherInfo.weather[0].description}
                        </Typography>
                        <Typography>
                            {`Current Temp: ${currTemp}${unit}`}
                        </Typography>
                        <Typography>
                            {`Feels Like: ${feelsTemp}${unit}`}
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button size="small" color="secondary" variant="contained" onClick={toggleBtn}>{btn}</Button>
                    </CardActions>
                </Card>
            )
        }
    }

    return (
        <div>
            {display()}
        </div>
    )
}


export default WeatherDisplay;