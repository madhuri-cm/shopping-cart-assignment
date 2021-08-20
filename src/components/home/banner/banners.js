import { useTheme } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBanners } from "../../../redux/banner/bannerAction";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import { useStyles } from "./bannerStyles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Banner = (props) => {
  useEffect(() => {
    props.fetchBanners();
  }, []);

  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.banners.banners.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return props.banners.loading ? (
    <div>Loading Banners.....</div>
  ) : props.banners.error ? (
    <div>{props.banners.error}</div>
  ) : (
    <div>
      {props.banners &&
        props.banners.banners &&
        props.banners.banners.length > 0 && (
          <div className={classes.root}>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {props.banners.banners.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img
                      className={classes.img}
                      src={props.banners.banners[activeStep].bannerImageUrl}
                      alt={props.banners.banners[activeStep].bannerImageAlt}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              variant="dots"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </div>
        )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    banners: state.banners,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBanners: () => dispatch(fetchBanners()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
