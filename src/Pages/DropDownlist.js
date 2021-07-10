import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './Onlinestatus.css'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [Sensor, setSensor] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setSensor(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
         <div class='Sensors' align='center'>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Select Your Sensor</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={Sensor}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Temperature sensor</MenuItem>
          <MenuItem value={20}>Humidity sensors</MenuItem>
          <MenuItem value={30}>Pressure sensors</MenuItem>
          <MenuItem value={40}>Vibration sensors</MenuItem>
        </Select>
      </FormControl>
    </div>
    </div>
  );
}

