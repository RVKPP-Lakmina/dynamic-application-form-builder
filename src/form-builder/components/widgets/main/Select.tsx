import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

const SelectField = ({ elementId, metaData }) => {
  return (
    <FormControl className="w-[320px]">
      <InputLabel id={`${elementId}-Box-FormControl-InputLabel`}>
        {metaData.title}
      </InputLabel>
      <Select
        labelId={`${elementId}-Box-FormControl-InputLabel`}
        id={`${elementId}-Box-FormControl-Select`}
        label="Age"
      >
        <MenuItem value={10}>Option 1</MenuItem>
        <MenuItem value={20}>Option 2</MenuItem>
        <MenuItem value={30}>Option 3</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectField;
