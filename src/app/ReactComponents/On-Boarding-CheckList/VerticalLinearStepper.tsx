import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Form from "./Form";
import CheckListTable from "./CheckListTable";
import ExcelDownloadReactComponent from "../ExcelDownload/ExcelDownloadReactComponent";
const VerticalLinearStepper = () => {
  const [info, setInfo] = React.useState("");
  const [onBoardingData, setOnBoardingData] = React.useState({});
  const handleInfoDetails = (data: any) => {
    setInfo(data.info);
    setOnBoardingData({ checkListDetails: data.result });
    handleNext();
  };
  const handleChecklistDetails = (data: any) => {
    setOnBoardingData(data);
  };

  const infoDetails = <Form onInfoSubmit={handleInfoDetails} sendInfo={info} />;

  const checkList = (
    <CheckListTable
      infoData={info}
      onBoardingData={onBoardingData}
      onCheckListSubmit={handleChecklistDetails}
    />
  );

  const steps = [
    {
      label: "Boarding Details",
      description: infoDetails,
    },
    {
      label: "On-Boarding Checklist",
      description: checkList,
      buttonName: "Submit",
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (buttonName?: any) => {
    if (buttonName === "Submit") {
      console.log("Submit Button: ", info, onBoardingData);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        style={{ margin: "20px" }}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === steps.length + 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              <Typography variant="h2" style={{ margin: 0 }}>
                <strong>{step.label}</strong>
              </Typography>
            </StepLabel>
            <StepContent>
              {step.description}
              {step.buttonName && (
                <Box sx={{ mt: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={() => handleNext(step.buttonName)}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {step.buttonName}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            All steps completed - you&apos;re finished. Sent to review.
          </Typography>
          <ExcelDownloadReactComponent inputExcelData={onBoardingData} />
        </Paper>
      )}
    </Box>
  );
};

export default VerticalLinearStepper;
