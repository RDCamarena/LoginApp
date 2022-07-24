import React from "react";
import {
  Card,
  CardContent,
  AppBar,
  Button,
  Avatar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";

const Profile = ({ user, Logout }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#CB5300 " }}>
          <Toolbar>
            <Box>
              <Avatar sx={{ backgroundColor: "#E07246 " }} sizes="small">
                {user.first_name[0]}
                {user.last_name[0]}
              </Avatar>
            </Box>
            <Box sx={{ flexGrow: 0.05 }} />
            <Typography> Welcome {user.first_name} !</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Button
                variant="contained"
                size="small"
                sx={{
                  width: "30px",
                  backgroundColor: "#A64312",
                  "&:hover": { backgroundColor: "#F3BD51  " },
                }}
                onClick={Logout}
              >
                Logout
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Card
          sx={{
            minWidth: 275,
            maxWidth: 275,
            marginTop: "20px",
            border: "2px solid #E07246",
          }}
        >
          <CardContent>
            <Typography>{user.first_name + " " + user.last_name}</Typography>
            <Typography>{user.address + ", " + user.region}</Typography>
            <Typography>{user.country + ", " + user.postal}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Profile;
