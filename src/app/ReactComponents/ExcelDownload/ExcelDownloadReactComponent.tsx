import * as React from "react";
import axios from "axios";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";

export interface IExcelDownloadComponentProps {
  inputExcelData: any;
}

const ExcelDownloadReactComponent: React.FunctionComponent<
  IExcelDownloadComponentProps
> = (props: IExcelDownloadComponentProps) => {
  const [excelData, setIExcelData] = React.useState([]);

  const exportIntoExcel = () => {
    console.log("called function to export data into excel");
    // axios.get("https://api.thedogapi.com/v1/breeds?limit=10&page=0").then((response) => {
    //     setIExcelData(response.data);
    // });
    setIExcelData(props.inputExcelData);
    console.log("excel data ", props.inputExcelData);
    if (props.inputExcelData.checkListDetails)
      exportAsExcelFile(props.inputExcelData.checkListDetails, "CheckList");
    else exportAsExcelFile(props.inputExcelData, "AllAssociates");
  };

  const exportAsExcelFile = (json: any[], excelFileName: string): void => {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    var wscols = [
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
    ];

    worksheet["!cols"] = wscols;
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ["data"],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    saveAsExcelFile(excelBuffer, excelFileName);
  };

  const saveAsExcelFile = (buffer: any, fileName: string): void => {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    );
  };

  return (
    <>
      <div className="download-icon">
        <i
          className="fa fa-download"
          onClick={() => exportIntoExcel()}
          aria-hidden="true"
        ></i>
      </div>
    </>
  );
};

export default ExcelDownloadReactComponent;
