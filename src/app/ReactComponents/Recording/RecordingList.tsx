import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,
    Typography,
    TablePagination,
} from "@mui/material";
import React, { Fragment } from 'react';

const tableHeader = ["Recording", "Link", "Remarks"];
const RecordingList = (props: { recordings: any[]; editRecording: any; deleteRecording: (arg0: any) => void; }) => (

    <TableContainer style={{ margin: "0px" }}>
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

                {props.recordings.length > 0 ? (
                    props.recordings.map(item => (
                        <TableRow key={item.recordingId}>
                            <TableCell>{item.recordingName}</TableCell>
                            <TableCell><a target="_blank" href={item.link}>{item.link} </a></TableCell>
                            <TableCell>{item.remarks}</TableCell>
                            <TableCell>
                                <Button type='submit'
                                    onClick={() => props.editRecording(item)}
                                    variant="contained"
                                    size="small"
                                    
                                >
                                    Edit
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button type='submit'
                                    onClick={() => props.deleteRecording(item.recordingId)}
                                    variant="contained"
                                    size="small"
                                    color="error"
                                    
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))
                ) : (
                    <tr>
                        <td colSpan={4}>No recording available</td>
                    </tr>
                )}

            </TableBody>

        </Table>
    </TableContainer >

)

export default RecordingList
