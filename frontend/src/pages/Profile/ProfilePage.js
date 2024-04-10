import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: 8,
        },
      },
    },
  },
});

export default function ProfilePage() {
  const { user } = useAuth();

  const { fullName, usn, currentSem, email } = user;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <Paper elevation={3} sx={{ my: 4, p: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: "primary.main", width: 56, height: 56 }}
            >
              <AccountCircleIcon sx={{ width: 40, height: 40 }} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Profile
            </Typography>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItem>
                <ListItemText primary="Full Name" secondary={fullName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="USN" secondary={usn} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Current Semester"
                  secondary={currentSem}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email Address" secondary={email} />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
