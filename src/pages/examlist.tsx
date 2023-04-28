import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import { Tooltip } from "@mui/material";

export default function ExamList({ exams }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Candidate ID</TableCell>
            <TableCell align="left">Exam Title</TableCell>
            <TableCell align="left">Candidate</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exams.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left">
                {item.Candidateid}
              </TableCell>
              <TableCell align="left">{item.Description}</TableCell>
              <TableCell align="left">{item.CandidateName}</TableCell>
              <TableCell align="left">{item.Date}</TableCell>

              <TableCell align="left">
                <Tooltip title="get location">
                  <Link className="link" href={`/examschedule/${item.id}`}>
                    {item.LocationName}
                  </Link>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
