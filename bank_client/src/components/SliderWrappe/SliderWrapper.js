import { Autocomplete, Slider, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const SliderWrapper = ({disabled, value, min, step, max, onChange=()=>{}}) => {

    return(
        <Slider
            disabled={disabled}
            style={{color:"rgba(0, 0, 0, 0.6)"}}
            value={value}
            min={min}
            step={step}
            max={max}
            onChange={onChange}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
      />
    )
}

export default SliderWrapper