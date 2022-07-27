import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { templateSummary } from "../../../json/response/templateSummary";

const tableHeader = ["Version #", "Version Date", "Author", "Nature of Change"];

const TemplateSummary = () => {
  return (
    <>
      <TableContainer style={{ margin: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeader &&
                tableHeader.map((header) => {
                  return (
                    <TableCell key={header}>
                      <Typography component="h3">
                        <strong>{header}</strong>
                      </Typography>
                    </TableCell>
                  );
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {templateSummary &&
              templateSummary.map((tableValue: any) => {
                return (
                  <TableRow key={tableValue.version}>
                    <TableCell>{tableValue.version}</TableCell>
                    <TableCell>{tableValue.versionDate}</TableCell>
                    <TableCell>{tableValue.author}</TableCell>
                    <TableCell>{tableValue.natureOfChange}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TemplateSummary;
