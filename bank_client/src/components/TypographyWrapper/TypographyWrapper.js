import { Autocomplete, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const TypographyWrapper = ({text}) => {

    return(
        <Typography gutterBottom style={{textAlign:"start", color:"rgba(0, 0, 0, 0.6)"}}>
            {text}
        </Typography>
    )
}

export default TypographyWrapper