import React, { useState } from "react";
import {
  Container,
  Button,
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const schemesCredits = {
  2018: [20, 20, 24, 24, 25, 24, 20, 18],
  2021: [20, 20, 20, 20, 20, 20, 24, 16],
  2022: [20, 20, 21, 19, 22, 18, 24, 16],
};

export default function CGPACalcPage() {
  const [scheme, setScheme] = useState("2022");
  const [sgpas, setSgpas] = useState(Array(8).fill(""));
  const [cgpa, setCgpa] = useState("");

  const handleReset = () => {
    setCgpa("");
    setSgpas(Array(8).fill(""));
  };

  const handleSGPAChange = (index, value) => {
    let newSgpas = [...sgpas];
    newSgpas[index] = value;
    setSgpas(newSgpas);
  };

  const handleCalculateCGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    schemesCredits[scheme].forEach((credits, index) => {
      if (sgpas[index]) {
        totalPoints += sgpas[index] * credits;
        totalCredits += credits;
      }
    });

    const cgpa =
      totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "N/A";
    setCgpa(cgpa);
  };

  const schemeBtns = [
    <Button
      key="2022"
      fullWidth
      variant="contained"
      onClick={() => setScheme("2022")}
      color={scheme === "2022" ? "success" : "primary"}
    >
      2022
    </Button>,
    <Button
      key="2021"
      fullWidth
      variant="contained"
      onClick={() => setScheme("2021")}
      color={scheme === "2021" ? "success" : "primary"}
    >
      2021
    </Button>,
    <Button
      key="2018"
      fullWidth
      variant="contained"
      onClick={() => setScheme("2018")}
      color={scheme === "2018" ? "success" : "primary"}
    >
      2018
    </Button>,
  ];

  const actionBtns = [
    <Grid item xs={6}>
      <Button
        fullWidth
        variant="contained"
        onClick={() => handleReset()}
        color="error"
      >
        Reset
      </Button>
    </Grid>,
    <Grid item xs={6}>
      <Button
        fullWidth
        variant="contained"
        onClick={handleCalculateCGPA}
        color="success"
      >
        Calculate
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
        VTU CGPA CALCULATOR
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {schemeBtns.map((button, index) => (
          <Grid item xs={4} key={index}>
            {button}
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {Array.from({ length: 8 }, (_, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <TextField
                key={index}
                label={`Semester ${index + 1} SGPA`}
                type="number"
                inputProps={{ step: "0.01", min: "0", max: "10" }}
                placeholder="Enter SGPA"
                variant="outlined"
                margin="normal"
                fullWidth
                value={sgpas[index]}
                onChange={(e) =>
                  handleSGPAChange(index, parseFloat(e.target.value))
                }
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Grid container spacing={1} marginY={1}>
        <Grid container item spacing={3}>
          {actionBtns}
        </Grid>
      </Grid>
      {cgpa && (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "24px" }}
          >
            Your CGPA is: {cgpa}
          </Typography>
        </Box>
      )}
    </Container>
  );
}
