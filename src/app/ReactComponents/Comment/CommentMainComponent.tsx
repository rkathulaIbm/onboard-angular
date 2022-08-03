import { AddCircleOutline } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { comments } from "../../../json/response/comments";

const CommentMainComponent = () => {
  const [open, setOpen] = useState(false);
  const [allComments, setAllComments] = useState(comments);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  const handleClickOpen = () => {
    setError(false);
    setComment("");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleComment = (event: any) => {
    setComment(event.target.value);
  };

  const handleAddComments = () => {
    if (comment === null || comment === "") setError(true);
    else {
      setAllComments([...allComments, { who: "You", comment: comment }]);
      setError(false);
      setOpen(false);
    }
  };

  return (
    <>
      <Typography component="h1" style={{ margin: 0, marginLeft: "10px" }}>
        <strong>Comments</strong>
      </Typography>
      {allComments && (
        <List>
          {allComments.map((data: any, index: any) => {
            return (
              <>
                <ListItem alignItems="flex-start" key={index}>
                  <ListItemText
                    primary={
                      <Typography
                        component="h3"
                        color="black"
                        style={{ margin: 0 }}
                      >
                        <strong>{data.who}</strong>
                      </Typography>
                    }
                    secondary={
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        color="black"
                      >
                        {data.comment}
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </>
            );
          })}
        </List>
      )}

      <Button
        disableRipple
        variant="contained"
        startIcon={<AddCircleOutline />}
        onClick={handleClickOpen}
        style={{ marginLeft: "10px" }}
      >
        Add
      </Button>
      <Dialog open={open}>
        <DialogTitle>Add Comment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Comment"
            type="text"
            fullWidth
            variant="standard"
            value={comment}
            onChange={handleComment}
            error={error}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddComments}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CommentMainComponent;
