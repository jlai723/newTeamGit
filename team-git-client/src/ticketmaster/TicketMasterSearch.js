import React, { useState } from 'react';
import {
    makeStyles,
    InputLabel,
    MenuItem,
    FormControl,
    Select
} from '@material-ui/core';

const TMSearch = () => {

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }));

    const classes = useStyles();
    const [distance, setDistance] = useState('');

    const handleChange = (event) => {
        setDistance(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Distance</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={distance}
                onChange={handleChange}
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={40}>40</MenuItem>
                <MenuItem value={50}>50</MenuItem>
            </Select>
        </FormControl>
    )
}

export default TMSearch;