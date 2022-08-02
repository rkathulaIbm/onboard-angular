import * as React from "react";
import axios from 'axios';

export interface IExcelDownloadComponentProps {
    excelData:any;
}

const ExcelDownloadReactComponent: React.FunctionComponent<IExcelDownloadComponentProps> = (props: IExcelDownloadComponentProps) => {

    const [excelData, setIExcelData] = React.useState([]);

    const exportIntoExcel = () => {
        console.log("called function to export data into excel");
        // axios.get("https://api.thedogapi.com/v1/breeds?limit=10&page=0").then((response) => {
        //     setIExcelData(response.data);
        // });
        console.log('excel data ',props.excelData);
    }


    return (
        <>
            <div className="download-icon">
                <i className="fa fa-download" onClick={() => exportIntoExcel()} aria-hidden="true"></i>
            </div>
        </>
    );
};

export default ExcelDownloadReactComponent;
