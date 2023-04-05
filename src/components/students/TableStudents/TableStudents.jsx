import * as React from "react";
import { makeStyles, styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./TableStudent.css"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {

    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const makeStyle = (status) => {
    if (status === 'Present'){
        return {
            background: 'rgb(145 254 159 /47%)',
            color: 'green',
        }
    }else if (status === 'Absent'){
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    }        
}

function createData(name, gender,Age, className, Status) {
  return { name,gender,Age, className, Status};
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, "Absent"),
  createData("Ice cream sandwich", 237, 9.0, 37,"Present"),
  createData("Eclair", 262, 16.0, 24,"Absent"),
  createData("Cupcake", 305, 3.7, 67,"Present"),
  createData("Gingerbread", 356, 16.0, 49,"Present"),
];

export default function CustomizedTables() {
  return (
    <div className="Table">
    
    <TableContainer component={Paper}
    style={{
        marginTop: '30px',
        boxShadow: '0px 13px 20px 0px #80808029'}}
    
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student</StyledTableCell>
            <StyledTableCell align="left">Gender</StyledTableCell>
            <StyledTableCell align="left">Age</StyledTableCell>
            <StyledTableCell align="left">Class</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.gender}</StyledTableCell>
              <StyledTableCell align="left">{row.Age}</StyledTableCell>
              <StyledTableCell align="left">{row.className}</StyledTableCell>
              <StyledTableCell align="left">

                <span className="status" style={makeStyle(row.Status)}>{row.Status}</span>
              </StyledTableCell>
              <StyledTableCell align="left">details</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );
}
