import React from "react";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

function Letter(){
                   const location = useLocation();
                   const { state } = location;



                   const { a, b, c, d, e, inputValue } = state || {};
                   const subject = useSelector(state => state.subject);
                   const faculty = useSelector(state => state.faculty);
                   return(
        <div>
            <div >
            <img src="https://dhondi.ai/logos/jntugv.png" alt="JNTUGV LOGO" height="140" width="140" style={{float:'left'}}></img>
            {/* <img src="https://dhondi.ai/logos/jntugv.png" alt="JNTUGV LOGO" height="100" width="100"></img> */}
            <div id="logo">
                <h2>
                    JNTUGV COLLEGE OF ENGINEERING, VIZIANAGARAM (AUTONOMOUS)
                </h2>
                <h3>
                    JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY GURAJADA, VIZIANAGARAM
                </h3>
                <Typography variant='h7'>DWARAPUDI, VIZIANAGARAM, ANDHRA PRADESH - 535 003.
                </Typography>
                <Typography variant='h8'>
                    (A constituent College of JNTUGV & Approved by AICTE, New Delhi) (Recognised by UGC under section 2(F) & 12(B) of UGC Act 1956)
                </Typography>
                <h4>DEPARTMENT OF INFORMATION TECHNOLOGY</h4>
                <hr></hr>
                </div>
                <br></br>
                <div style={{marginLeft:'140px'}}>
                <Typography paragraph textAlign={"left"}>
                    To
                    <br></br>
                    {faculty}
                    <br></br>
                    Assistant
                    <br></br>
                    JNTUGV-CEV
                </Typography>
                <Typography paragraph textAlign={"left"}>
                {e}
                </Typography>
                <Typography paragraph textAlign={"justify"}>
                From the feedback by the students pertaining to the classes and subjects taught by you during the {b} Semester of {c} &emsp; {a}, on the basis of the total number of points scored by you, your overall performance in that semester has been rated as shown against the subjects as follows:
                </Typography>
                <Typography paragraph>
                    Subject:&emsp;{subject}&emsp;&emsp;&emsp;&emsp;&emsp;Class:&emsp;{b}-{c}&emsp;{d}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;%feedback:&emsp;96.4
                </Typography>
                <Typography paragraph textAlign={"justify"}>
                I congratulate you on this achievement and appreciate your excellent positive contribution to enhance the effectiveness of the teaching-learning process. Please keep up the good work and continue to strive to excel, and please remember that there is always room to further excel.
                </Typography>
                <Typography paragraph textAlign={"justify"}>
                Please feel free to discuss with the undersigned for any suggestions regarding the way the Management can be of help to you in further strengthening your contribution.
                </Typography>
                <br></br>
                <br></br>
                <br></br>
                <Typography paragraph textAlign={"right"}>
                PRINCIPAL&emsp;&emsp;&emsp;
                </Typography>
                </div>
                </div>
        </div>
    );
}


export default Letter;