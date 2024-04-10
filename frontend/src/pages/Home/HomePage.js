import React from "react";
import {
  Button,
  Typography,
  Paper,
  Container,
  Box,
  Grid,
  Link,
} from "@mui/material";
import { School, Calculate } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Box textAlign="center" my={5}>
        <Typography variant="h2" gutterBottom fontWeight={400}>
          CGPA/SGPA Calculator
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Accurately calculate your academic performance with ease
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<School />}
          onClick={() => navigate("/sgpa")}
          sx={{ margin: 2 }}
        >
          SGPA Calculator
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<Calculate />}
          onClick={() => navigate("/cgpa")}
          sx={{ margin: 2 }}
        >
          CGPA Calculator
        </Button>
      </Box>
      <Paper
        elevation={3}
        sx={{ padding: 3, margin: "auto", maxWidth: 600, marginTop: 5 }}
      >
        <Typography variant="h5" gutterBottom>
          What are CGPA and SGPA?
        </Typography>
        <Typography variant="body1" paragraph textAlign={"justify"}>
          CGPA (Cumulative Grade Point Average) and SGPA (Semester Grade Point
          Average) are used to represent a student's performance. They aggregate
          your individual course grades and credits into a single, comprehensive
          score.
        </Typography>
      </Paper>

      <Box my={5}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Trusted by Students Worldwide
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ padding: 2 }}>
              <Typography variant="body1">
                "The CGPA calculator made it so easy to track my academic
                progress throughout college!"
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ padding: 2 }}>
              <Typography variant="body1">
                "I always recommend this SGPA calculator to my peers for its
                accuracy and ease of use."
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box
        component="footer"
        sx={{ bgcolor: "primary.dark", padding: 3, mt: 5 }}
      >
        <Typography variant="body2" color="white" textAlign="center">
          © {new Date().getFullYear()} CGPA/SGPA Calculator. All rights
          reserved.
          <Link color="inherit" href="/privacy">
            {" "}
            Privacy Policy
          </Link>{" "}
          |
          <Link color="inherit" href="/terms">
            {" "}
            Terms of Service
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
