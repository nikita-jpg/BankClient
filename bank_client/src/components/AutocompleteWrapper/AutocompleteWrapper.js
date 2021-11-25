import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextFieldWrapper from "../TextFieldWrapper/TextFieldWrapper";

const AutocompleteWrapper = ({options, label, onInputChange=()=>{}}) => {

    return(
        <Autocomplete
            options={options}
            sx={{ width: 300 }}
            onInputChange={onInputChange}
            renderInput={(params) => <TextField {...params} label={label} />}
      />
    )
}

export default AutocompleteWrapper