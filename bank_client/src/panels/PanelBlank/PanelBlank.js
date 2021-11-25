import { Autocomplete, Slider, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import './PanelBlank.css'

const PanelBlank = ({children, title}) => {

    return(
        <div className="PanelBlank">
            <div className="PanelBlank__title">{title}</div>
            <div className="PanelBlank__container">
                {children}
            </div>
        </div>
    )
}

export default PanelBlank