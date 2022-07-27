import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Box } from "@mui/system";
import * as React from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const Form = (props: any) => {
  const sendInfo = props.sendInfo;
  const data = {
    employeeName: sendInfo.employeeName ? sendInfo.employeeName : "",
    onBoardingDate: sendInfo.onBoardingDate
      ? sendInfo.onBoardingDate
      : new Date(),
    coordinatorName: sendInfo.coordinatorName ? sendInfo.coordinatorName : "",
    onBoardingCompletionDate: sendInfo.onBoardingCompletionDate
      ? sendInfo.onBoardingCompletionDate
      : new Date(),
    isIBMNewHire: sendInfo.isIBMNewHire ? sendInfo.isIBMNewHire : "Y/N",
  };
  const [info, setInfo] = useState(data);
  const [isButtonHidden, setIsButtonHidden] = useState(false);
  const handleChange = (e: any, keyName: any) => {
    if (keyName === "onBoardingDate")
      return setInfo({ ...info, onBoardingDate: e });
    else if (keyName === "employeeName")
      return setInfo({ ...info, employeeName: e.target.value });
    else if (keyName === "coordinatorName")
      return setInfo({ ...info, coordinatorName: e.target.value });
    else if (keyName === "isIBMNewHire")
      return setInfo({ ...info, isIBMNewHire: e.target.value });
    else if (keyName === "onBoardingCompletionDate")
      return setInfo({ ...info, onBoardingCompletionDate: e });
  };
  const handleSubmit = () => {
    setIsButtonHidden(true);
    props.onInfoSubmit(info);
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={8} md={6} lg={3}>
            <Typography id="employeeName" variant="h3" style={{ margin: 0 }}>
              <strong>Employee Name</strong>
            </Typography>
            <TextField
              variant="outlined"
              id="employeeName"
              value={info.employeeName}
              style={{ width: "80%" }}
              size="small"
              onChange={(e: any) => handleChange(e, "employeeName")}
            />
          </Grid>
          <Grid item xs={8} md={6} lg={3}>
            <Typography id="coordinatorName" variant="h3" style={{ margin: 0 }}>
              <strong>On-Boarding Coordinator Name</strong>
            </Typography>
            <TextField
              id="coordinatorName"
              variant="outlined"
              value={info.coordinatorName}
              style={{ width: "80%" }}
              size="small"
              onChange={(e: any) => handleChange(e, "coordinatorName")}
            />
          </Grid>
          <Grid item xs={8} md={4} lg={2}>
            <Typography id="isIBMNewHire" variant="h3" style={{ margin: 0 }}>
              <strong>New Hire to IBM(Y/N)</strong>
            </Typography>
            <FormControl style={{ width: "80%" }}>
              <Select
                id="isIBMNewHire"
                value={info.isIBMNewHire}
                style={{ width: "80%" }}
                size="small"
                onChange={(e: any) => handleChange(e, "isIBMNewHire")}
                //   inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="Y/N">
                  None
                </MenuItem>
                <MenuItem value="Yes">Y</MenuItem>
                <MenuItem value="No">N</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={8} md={4} lg={2}>
            <Typography id="onBoardingDate" variant="h3" style={{ margin: 0 }}>
              <strong>On-Boarding Date</strong>
            </Typography>
            <FormControl style={{ width: "80%" }}>
              <DatePicker
                inputFormat="MM/dd/yyyy"
                value={info.onBoardingDate}
                onChange={(e: any) => handleChange(e, "onBoardingDate")}
                renderInput={(params) => <TextField size="small" {...params} />}
                minDate={
                  new Date(new Date().setFullYear(new Date().getFullYear() - 1))
                }
                disableFuture
                maxDate={new Date()}
              />
            </FormControl>
          </Grid>
          <Grid item xs={8} md={4} lg={2}>
            <Typography
              id="onBoardingCompletionDate"
              variant="h3"
              style={{ margin: 0 }}
            >
              <strong>On-Boarding Activities Completion Date</strong>
            </Typography>
            <FormControl style={{ width: "80%" }}>
              <DatePicker
                inputFormat="MM/dd/yyyy"
                value={info.onBoardingCompletionDate}
                onChange={(e: any) =>
                  handleChange(e, "onBoardingCompletionDate")
                }
                renderInput={(params) => <TextField size="small" {...params} />}
                minDate={
                  new Date(new Date().setFullYear(new Date().getFullYear() - 1))
                }
                disableFuture
                maxDate={new Date()}
              />
            </FormControl>
          </Grid>
        </Grid>
        {!isButtonHidden && (
          <Box sx={{ mb: 2 }}>
            <div>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 1, mr: 1 }}
              >
                Continue
              </Button>
            </div>
          </Box>
        )}
      </LocalizationProvider>
    </>
  );
};

export default Form;
