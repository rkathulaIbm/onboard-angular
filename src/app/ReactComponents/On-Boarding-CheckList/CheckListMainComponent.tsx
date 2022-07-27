import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import CheckListTable from "./CheckListTable";
import Form from "./Form";
import TemplateSummary from "./TemplateSummary";
import VerticalLinearStepper from "./VerticalLinearStepper";

const CheckListMainComponent = () => {
  const [info, setInfo] = React.useState("");
  const [data, setData] = React.useState("");
  const handleInfoDetails = (data: any) => {
    setInfo(data);
  };
  const handleChecklistDetails = (data: any) => {
    setData(data);
    console.log("Submit Button: ", data);
  };
  return (
    <>
      <TemplateSummary />
      <Typography
        style={{ margin: "20px" }}
        variant="h2"
        color="red"
        sx={{ textDecoration: "underline" }}
      >
        Prudential Retirement Services On-boarding Checklist
      </Typography>

      {/* <Form onInfoSubmit={handleInfoDetails} sendInfo={info} />
      <CheckListTable
        infoData={info}
        onCheckListSubmit={handleChecklistDetails}
      /> */}
      <VerticalLinearStepper />
    </>
  );
};

export default CheckListMainComponent;
