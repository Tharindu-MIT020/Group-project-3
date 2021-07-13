import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import "./Onlinestatus.css";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [Sensor, setSensor] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState("");

  const loadData = async (e) => {
    setSensor(e.target.value);

    if (e.target.value) {
      const key = e.target.value;
      await axios
        .get("http://localhost:8083/api/readings/sensor/" + key)
        .then((res) => {
          console.log("====================================");
          console.log(res.data);
          console.log("====================================");

          let tempLabels = [];
          let values = [];
          let tempData = res.data;

          tempData.map((element) => {
            tempLabels.push(element.date.substring(0, 10));
            values.push(element.value);
          });

          const data = {
            labels: tempLabels,
            datasets: [
              {
                label: "Sensor Readings",
                data: values,
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)",
              },
            ],
          };

          console.log("====================================");
          console.log(data);
          console.log("====================================");
          setData(data);
        })
        .catch((err) => {
          console.log("====================================");
          console.log(err);
          console.log("====================================");
        });
    } else {
      setData("");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <div class="Sensors" align="center">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Select Your Sensor
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={Sensor}
            onChange={(e) => loadData(e)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Temperature sensor</MenuItem>
            <MenuItem value={2}>Humidity sensors</MenuItem>
            <MenuItem value={3}>Pressure sensors</MenuItem>
          </Select>
        </FormControl>{" "}
        <Link to="/send" target="_blank">
          <button
            type="button"
            style={{ float: "right" }}
            class="btn btn-primary"
          >
            Activate Sensors
          </button>
        </Link>
      </div>

      <Line
        data={data}
        options={{
          title: {
            text: "Sensor Data",
            fontSize: 20,
            display: true,
          },
          legend: {
            display: true,
            position: "top",
          },
        }}
      />
    </div>
  );
}
