import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const TextFieldWrapper = ({label, disabled, error, helperText, value=null, onChange=()=>{}}) => {

    return(
        <TextField style={{width:"100%"}} label={label} error={error} helperText={helperText} disabled={disabled} variant="filled" onChange={onChange} value={value}/>
    )
}

export default TextFieldWrapper