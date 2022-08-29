import React, { useState } from 'react'
import {
  Grid,
  TextField,
  Button
} from "@mui/material";

const AddRecording = (props: any) => {
  const initialFormState = { recordingId: '', recordingName: '', link: '', remarks: '' }
  const [recording, setRecording] = useState(initialFormState)

  const handleInputChange = (event: any) => {
    const { name, value } = event.target

    setRecording({ ...recording, [name]: value })
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      if (!recording.recordingName || !recording.link || !recording.remarks) return
      props.addRecording(recording)
      setRecording(initialFormState)
    }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={8} md={6} lg={3}>
          <TextField
            variant="outlined"
            id="recordingName"
            name="recordingName"
            value={recording.recordingName}
            placeholder="Enter Recording Name"
            style={{ width: "80%" }}
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={8} md={6} lg={3}>

          <TextField
            variant="outlined"
            id="link"
            name="link"
            value={recording.link}
            placeholder="Enter Recording Link"
            style={{ width: "80%" }}
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>

          <TextField
            variant="outlined"
            id="remarks"
            name="remarks"
            value={recording.remarks}
            placeholder="Enter remarks (if any)"
            style={{ width: "80%" }}
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        
          <Button type='submit'
            variant="contained"
            color="success"
            sx={{ mt: 2, mr: 2 }}
          >
            Add Recording
          </Button>
        
      </Grid>
    </form>
  )
}

export default AddRecording