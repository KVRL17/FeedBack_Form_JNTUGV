import React from "react";
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { NavLink } from "react-router-dom";

const Main=()=>{
    return(
        <div>
            <img src='https://dhondi.ai/logos/jntugv.png' width='200px' height='200px' alt='logo'></img>
        <Typography variant="h5" gutterBottom margin={0}>
        Jawaharlal Nehru Technological University-Gurajada Vizianagaram<br></br>
        College of Engineering,Vizianagaram
      </Typography>
      <hr height={2}></hr>
      <Typography variant='h5' style={{marginTop:'10px'}}>
        Student Feed-Back Report
      </Typography>
      <br></br>
  <Button variant='contained' ><NavLink to='/Form' style={{textDecoration:'none', color: "inherit"}}>Fill Form</NavLink></Button>&emsp;&emsp;
  <Button variant='contained' ><NavLink to='/Report' style={{textDecoration:'none', color: "inherit"}}>View Feed-Back</NavLink></Button>
      </div>
    );
}

export default Main;