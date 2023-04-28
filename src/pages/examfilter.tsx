import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function ExamFilter({ onFilter }) {
  const dateOptions = [
    "05/05/2023 14:30:00",
    "17/06/2023 16:30:00",
    "25/08/2023 09:30:00",
  ];
  const candidateOptions = ["Donnelly", "Mateos", "Ward", "Wilmers"];
  const locationOptions = [
    "New York",
    "London",
    "Leeds",
    "Sydney",
    "Milan",
    "Berlin",
    "Woking",
  ];
  const handleChange = (name, value) => {
    onFilter(name, value);
  };

  return (
    <div className="flex flex-row justify-center items-center pb-2 gap-3 bg-slate-100">
      <Autocomplete
        className="w-60"
        options={dateOptions}
        onInputChange={(event, value) => handleChange("date", value)}
        renderInput={(params) => <TextField {...params} label="Date" />}
      />
      <Autocomplete
        className="w-60"
        options={candidateOptions}
        onInputChange={(event, value) => handleChange("candidate", value)}
        renderInput={(params) => <TextField {...params} label="Candidate" />}
      />
      <Autocomplete
        className="w-60"
        options={locationOptions}
        onInputChange={(event, value) => handleChange("location", value)}
        renderInput={(params) => <TextField {...params} label="Location" />}
      />
    </div>
  );
}
