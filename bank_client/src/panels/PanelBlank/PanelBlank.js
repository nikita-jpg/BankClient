import { Autocomplete, Slider, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import './PanelBlank.css'

const PanelBlank = ({children, className=""}) => {

    return(
        <div className={`PanelBlank ${className}`}>
            <div className="PanelBlank__container">
                {children}
            </div>
        </div>
    )
}

export default PanelBlank