import React from "react"

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useMediaQuery } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        flexGrow: 1
      },
      header: {
        display: "flex",
        alignItems: "center",
        height: 50,
        backgroundColor: theme.palette.background.default
      },
      img: {
        height: (media) => (media.sm ? 150 : 350),
        display: "block",
        maxWidth: "100%",
        overflow: "hidden",
        width: "100%",
        objectFit: "contain"
      }
  }));
  
const SingleBanner = (props) => {
  const matches_sm = useMediaQuery("(max-width:400px)");

  const classes = useStyles({sm:matches_sm});
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = props.banner.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
                
        <div className={classes.root}>

        <img
          className={classes.img}
          src={props.banner[activeStep].bannerImageUrl}
          alt={props.banner[activeStep].bannerImageAlt}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </button>
          }
          backButton={
            <button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </button>
          }
        />
      </div>

    )

}

export default SingleBanner