import React, { useState, useEffect } from 'react'
import {
  Grid,
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";


const EditRecording = (props: any) => {
  const [recording, setRecording] = useState(props.currentRecording)
  useEffect(
    () => {
      setRecording(props.currentRecording)
    },
    [ props ]
  )

  const handleInputChange = (event: any) => {
		const { name, value } = event.target

		setRecording({ ...recording, [name]: value })
  }
  
  return (
    <form onSubmit={event => {
      event.preventDefault()
      if (!recording.recordingName || !recording.link || !recording.remarks) return

      props.updateRecording(recording.recordingId, recording)
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
        <Grid item xs={8} md={6} lg={3}>

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
          sx={{ mt: 2, mr: 2 }}
        >
          Edit Recording
        </Button>
        <Button type='reset'
          onClick={() => props.setEditing(false)}
          variant="contained"
          sx={{ mt: 2, mr: 2 }}
        >
          Cancel
        </Button>
      </Grid>
    </form>
  )
}

export default EditRecording