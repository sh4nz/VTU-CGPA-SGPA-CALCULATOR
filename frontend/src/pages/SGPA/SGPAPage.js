import { React, useState } from "react";
import {
  Container,
  Button,
  ButtonGroup,
  Box,
  Typography,
  Stack,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function SGPAPage() {
  const [scheme, setScheme] = useState(null);
  const [sem, setSem] = useState(null);

  const schemeBtns = [
    <Grid item xs={4}>
      <Button
        fullWidth
        variant="contained"
        onClick={() => setScheme("2022")}
        color={scheme === "2022" ? "success" : "primary"}
      >
        2022
      </Button>
    </Grid>,
    <Grid item xs={4}>
      <Button
        fullWidth
        variant="contained"
        onClick={() => setScheme("2021")}
        color={scheme === "2021" ? "success" : "primary"}
      >
        2021
      </Button>
    </Grid>,
    <Grid item xs={4}>
      <Button
        fullWidth
        variant="contained"
        onClick={() => setScheme("2018")}
        color={scheme === "2018" ? "success" : "primary"}
      >
        2018
      </Button>
    </Grid>,
  ];

  const firstYrBtns = [
    <Grid item xs={6}>
      <Button
        fullWidth
        variant="contained"
        onClick={() => setSem("P")}
        color={sem === "P" ? "success" : "primary"}
      >
        Physics
      </Button>
    </Grid>,
    <Grid item xs={6}>
      <Button
        fullWidth
        variant="contained"
        onClick={() => setSem("C")}
        color={sem === "C" ? "success" : "primary"}
      >
        Chemistry
      </Button>
    </Grid>,
  ];

  const secYrBtns = [
    <Grid item xs={6}>
      <Button
        fullWidth
        variant="contained"
        onClick={() => setSem("3")}
        color={sem === "3" ? "success" : "primary"}
      >
        3rd Semester
      </Button>
    </Grid>,
    <Grid item xs={6}>
      <Button
        fullWidth
        variant="contained"
        onClick={() => setSem("4")}
        color={sem === "4" ? "success" : "primary"}
      >
        4th Semester
      </Button>
    </Grid>,
  ];

  const thirdYrBtns = [
    <Grid item xs={6}>
      <Button
        fullWidth
        variant="contained"
        onClick={() => setSem("5")}
        color={sem === "5" ? "success" : "primary"}
      >
        5th Semester
      </Button>
    </Grid>,
    <Grid item xs={6}>
      <Button
        fullWidth
        variant="contained"
        onClick={() => setSem("6")}
        color={sem === "6" ? "success" : "primary"}
      >
        6th Semester
      </Button>
    </Grid>,
  ];

  const fourthYrBtns = [
    <Grid item xs={6}>
      <Button
        fullWidth
        variant="contained"
        onClick={() => setSem("7")}
        color={sem === "7" ? "success" : "primary"}
      >
        7th Semester
      </Button>
    </Grid>,
    <Grid item xs={6}>
      <Button
        fullWidth
        variant="contained"
        onClick={() => setSem("8")}
        color={sem === "8" ? "success" : "primary"}
      >
        8th Semester
      </Button>
    </Grid>,
  ];

  const actionBtns = [
    <Grid item xs={6}>
      <Button
        fullWidth
        variant="contained"
        component={Link}
        to={"/"}
        color="error"
      >
        Back
      </Button>
    </Grid>,
    <Grid item xs={6}>
      <Button
        fullWidth
        variant="contained"
        component={Link}
        to={`/sgpa/scheme/${scheme}/sem/${sem}`}
        color="warning"
        disabled={scheme && sem ? false : true}
      >
        Next
      </Button>
    </Grid>,
  ];

  return (
    <Container maxWidth="sm">
      <Typography
        variant="body1"
        sx={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}
        marginY={2}
      >
        VTU SGPA CALCULATOR
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: 2,
          border: "1px solid #bbbbbb",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Typography
          variant="body1"
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
          gutterBottom
        >
          Select Scheme: {scheme}
        </Typography>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            {schemeBtns}
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          flexFlow: 1,
          marginTop: 2,
          border: "1px solid #bbbbbb",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Typography
          variant="body1"
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
          gutterBottom
        >
          Select Semester:{" "}
          {sem === "P" ? "Physics" : sem === "C" ? "Chemistry" : sem}
        </Typography>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            {firstYrBtns}
          </Grid>
          <Grid container item spacing={3} sx={{ marginTop: "2px" }}>
            {secYrBtns}
          </Grid>
          <Grid container item spacing={3} sx={{ marginTop: "2px" }}>
            {thirdYrBtns}
          </Grid>
          <Grid container item spacing={3} sx={{ marginTop: "2px" }}>
            {fourthYrBtns}
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          flexFlow: 1,
          marginTop: 2,
        }}
      >
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            {actionBtns}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
