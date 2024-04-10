import React, { useReducer, useEffect, useState } from "react";
import {
  Container,
  Button,
  Box,
  Grid,
  TextField,
  Badge,
  Typography,
} from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { getSubjects } from "../../services/semService";

const initialState = { subjects: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "SUBJECTS_LOADED":
      return { ...state, subjects: action.payload };
    default:
      return state;
  }
};

const convertMarksToGradePoint = (marks) => {
  marks = parseInt(marks, 10); // Ensure that marks are treated as numbers
  if (marks >= 90) return 10;
  else if (marks >= 80) return 9;
  else if (marks >= 70) return 8;
  else if (marks >= 60) return 7;
  else if (marks >= 45) return 6;
  else if (marks >= 40) return 4;
  else return 0;
};

const calculateSGPA = (subjects, marks) => {
  let totalGradePoints = 0;
  let totalCredits = 0;

  subjects.forEach((subject) => {
    const gradePoint = convertMarksToGradePoint(marks[subject._id]);
    if (gradePoint !== undefined && !isNaN(gradePoint)) {
      totalGradePoints += gradePoint * subject.credit;
      totalCredits += subject.credit;
    } else {
      console.log(
        `Grade point for subject with ID ${subject._id} is undefined or not a number.`
      );
    }
  });

  const sgpa =
    totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : "N/A";
  console.log(
    `Total Grade Points: ${totalGradePoints}, Total Credits: ${totalCredits}, SGPA: ${sgpa}`
  );
  return sgpa;
};

export default function SGPACalcPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { subjects } = state;
  const { scheme, sem } = useParams();
  const [marks, setMarks] = useState({});
  const [sgpa, setSgpa] = useState("");

  useEffect(() => {
    getSubjects(scheme, sem).then((subjects) =>
      dispatch({ type: "SUBJECTS_LOADED", payload: subjects })
    );
  }, [scheme, sem]);

  const handleMarksChange = (subjectId, value) => {
    setMarks({ ...marks, [subjectId]: value });
  };

  const handleCalculateSGPA = () => {
    // Ensure all subjects have marks entered
    for (let subject of subjects) {
      if (!marks[subject._id]) {
        console.log(`Missing marks for subject with ID: ${subject._id}`);
        return;
      }
    }

    const sgpa = calculateSGPA(subjects, marks);
    setSgpa(sgpa);
  };

  const subInputs = subjects.map((subject, index) => (
    <Grid item xs={12} sm={6} key={subject._id}>
      <Badge
        color="info"
        badgeContent={`Credits: ${subject.credit}`}
        sx={{ width: "100%", marginLeft: "-10px" }}
      >
        <TextField
          label={subject.sub_code}
          type="number"
          placeholder="Enter marks"
          variant="outlined"
          margin="normal"
          fullWidth
          value={marks[subject._id] || ""}
          onChange={(e) => handleMarksChange(subject._id, e.target.value)}
          sx={{ marginLeft: "15px" }}
        />
      </Badge>
    </Grid>
  ));

  const actionBtns = [
    <Grid item xs={6}>
      <Button
        fullWidth
        variant="contained"
        component={Link}
        to={"/sgpa"}
        color="error"
      >
        Back
      </Button>
    </Grid>,
    <Grid item xs={6}>
      <Button
        fullWidth
        variant="contained"
        onClick={handleCalculateSGPA}
        color="success"
        disabled={scheme && sem ? false : true}
      >
        Calculate
      </Button>
    </Grid>,
  ];

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginY={2}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", fontSize: "18px" }}
        >
          Enter Total Marks for each subject below:
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: 2,
          border: "1px solid #bbbbbb",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Grid container spacing={2}>
          {subInputs}
          <Grid container item spacing={3}>
            {actionBtns}
          </Grid>
          {sgpa && (
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Your SGPA is: {sgpa}
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
}
