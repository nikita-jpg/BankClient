import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const TextFieldWrapper = ({label, disabled, value=null, onChange=()=>{}}) => {

    return(
        <TextField style={{width:"100%"}} label={label} disabled={disabled} variant="filled" onChange={onChange} value={value}/>
    )
}

export default TextFieldWrapper