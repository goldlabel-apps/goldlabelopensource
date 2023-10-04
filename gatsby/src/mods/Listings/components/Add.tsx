import * as React from 'react'
import {
  Box,
  Container,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
} from "@mui/material"
import {getTranslation} from "../../Lingua"
import {
  Font,
  usePwaSelect,
  selectLocale,
} from "../../../goldlabel"



export default function Add() {
  const locale = usePwaSelect(selectLocale)

  const steps = [
    {
      label: getTranslation("ADD_LISTING", locale ),
      description: getTranslation("FREE_LISTING", locale ),
    },
    // {
    //   label: 'Create an ad group',
    //   description:
    //     'An ad group contains one or more ads which target a shared set of keywords.',
    // },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ]

  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Container maxWidth="md">

      <Stepper 
        activeStep={activeStep} 
        orientation="vertical">

        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Font variant="caption">
                    Last step
                  </Font>
                ) : null
              }>
              <Font>
                {step.label}
              </Font>
            </StepLabel>
            <StepContent>
              <Font>{step.description}</Font>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    <Font>
                      {index === steps.length - 1 ? 'Finish' : 'Next'}
                    </Font>
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}>
                    <Font>
                      Back
                    </Font>
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Font>All steps completed - you are finished</Font>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
          <Font>Reset</Font>
          </Button>
        </Paper>
      )}
      
      
    </Container>
  )
}
