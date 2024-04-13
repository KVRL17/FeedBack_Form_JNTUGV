import React from "react";
import '../Components/Maintable.css';
import { Button, Stack, Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import axios from 'axios';

const FillTable=()=>{
    const [age, setAge] = React.useState('');
    const [age1, setAge1] = React.useState('');
    const [age2, setAge2] = React.useState('');
    const [age3, setAge3] = React.useState('');
    const [age4, setAge4] = React.useState('');
    const [subject, setsubject] = React.useState('');
    const [q1, setq1] = React.useState('');
    const [q2, setq2] = React.useState('');
    const [q3, setq3] = React.useState('');
    const [q4, setq4] = React.useState('');
    const [q5, setq5] = React.useState('');
    const [q6, setq6] = React.useState('');
    const [q7, setq7] = React.useState('');
    const [q8, setq8] = React.useState('');
    const [q9, setq9] = React.useState('');
    const [q10, setq10] = React.useState('');
    const [q11, setq11] = React.useState('');
    const [q12, setq12] = React.useState('');
    const [q13, setq13] = React.useState('');
    const [q14, setq14] = React.useState('');
    const [q15, setq15] = React.useState('');
    const [currentDateTime, setCurrentDateTime] = React.useState('');


    const handleReset = () => {
      setAge('');
      setAge1('');
      setAge2('');
      setAge3('');
      setAge4('');
      setsubject('');
      setq1('');
      setq2('');
      setq3('');
      setq4('');
      setq5('');
      setq6('');
      setq7('');
      setq8('');
      setq9('');
      setq10('');
      setq11('');
      setq12('');
      setq13('');
      setq14('');
      setq15('');

      const radioInputs = document.querySelectorAll('input[type="radio"]');
      radioInputs.forEach((input) => {
      input.checked = false;
  });
    };
  
    const handleSubmit = async () => {
      try {
        const response = await axios.post('http://localhost:3000/submitFeedback', {
          academic_year: age,
          year: age1,
          semester: age2,
          branch: age3,
          faculty: age4,
          subject: subject,
          q1:q1,
          q2:q2,
          q3:q3,
          q4:q4,
          q5:q5,
          q6:q6,
          q7:q7,
          q8:q8,
          q9:q9,
          q10:q10,
          q11:q11,
          q12:q12,
          q13:q13,
          q14:q14,
          q15:q15,
        });
  
        console.log(q1)
        if (response.data.success) {
          // Handle success
        } else {
          // Handle failure
        }
      } catch (error) {
        console.error('Error submitting feedback:', error);
        // Handle error
      }
    };
    

    const handleChange10 = (event) => {
      setq6(event.target.value);
    };
    const handleChange11 = (event) => {
      setq7(event.target.value);
    };
    const handleChange12 = (event) => {
      setq8(event.target.value);
    };
    const handleChange13 = (event) => {
      setq9(event.target.value);
    };
    const handleChange14 = (event) => {
      setq10(event.target.value);
    };
    const handleChange15 = (event) => {
      setq11(event.target.value);
    };
    const handleChange16 = (event) => {
      setq12(event.target.value);
    };
    const handleChange17 = (event) => {
      setq13(event.target.value);
    };
    const handleChange18 = (event) => {
      setq14(event.target.value);
    };
    const handleChange19 = (event) => {
      setq15(event.target.value);
    };
    const handleChange6 = (event) => {
      setq1(event.target.value);
      console.log(q1);
    };
    const handleChange7 = (event) => {
      setq2(event.target.value);
      console.log(q2);
    };
    const handleChange20 = (event) => {
      setq3(event.target.value);
      console.log(q3);
    };
    const handleChange8 = (event) => {
      setq4(event.target.value);
    };
    const handleChange9 = (event) => {
      setq5(event.target.value);
    };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };
  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };
  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };
  const handleChange4 = (event) => {
    setAge4(event.target.value);
  };
  const handleChange5 = (event) => {
    setsubject(event.target.value);
  };

  const setCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Formatting to match the input type "datetime-local" format (YYYY-MM-DDTHH:mm)
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
    setCurrentDateTime(formattedDateTime);
  };

  // Call setCurrentDate when the component mounts to set the current date and time
  React.useEffect(() => {
    setCurrentDate();
  }, []);
  
    return(
        <div>
          <Typography variant="h5" gutterBottom margin={0}>
        Jawaharlal Nehru Technological University-Gurajada Vizianagaram<br></br>
        College of Engineering,Vizianagaram
      </Typography>
      <hr height={2}></hr>
            <div id="container1">
                <form action="#" id="stdform">
                <h3>STUDENT FEED-BACK REPORT</h3>
                <div id="sfbrmain">
                    <p>
                        <label>
                            Academic Year: &emsp;
        <FormControl variant="standard" sx={{ m: -1, minWidth: 150 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'2020-2021'}>2020-2021</MenuItem>
          <MenuItem value={'2021-2022'}>2021-2022</MenuItem>
          <MenuItem value={'2022-2023'}>2022-2023</MenuItem>
          <MenuItem value={'2023-2024'}>2023-2024</MenuItem>
          <MenuItem value={'2024-2025'}>2024-2025</MenuItem>
          <MenuItem value={'2025-2026'}>2025-2026</MenuItem>
          <MenuItem value={'2027-2028'}>2027-2028</MenuItem>
        </Select>
      </FormControl>
      </label>
      <label>
                            Year: &emsp;
        <FormControl variant="standard" sx={{ m: -1, minWidth: 150 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age1}
          onChange={handleChange1}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'I'}>I</MenuItem>
          <MenuItem value={'II'}>II</MenuItem>
          <MenuItem value={'III'}>III</MenuItem>
          <MenuItem value={'IV'}>IV</MenuItem>
        </Select>
      </FormControl>
      </label>
      <label>
                            Semester:&emsp;
        <FormControl variant="standard" sx={{ m: -1, minWidth: 150 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age2}
          onChange={handleChange2}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
        </Select>
      </FormControl>
      </label>
                    </p>
                    <p>
                        <label>
                        Branch:&emsp;&emsp;&emsp;&emsp; <FormControl variant="standard" sx={{ m: -1, minWidth: 150 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age3}
          onChange={handleChange3}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'CSE'}>CSE</MenuItem>
          <MenuItem value={'IT'}>IT</MenuItem>
          <MenuItem value={'MET'}>MET</MenuItem>
          <MenuItem value={'MECH'}>MECH</MenuItem>
          <MenuItem value={'CIVIL'}>CIVIL</MenuItem>
          <MenuItem value={'EEE'}>EEE</MenuItem>
          <MenuItem value={'ECE'}>ECE
          </MenuItem>
        </Select>
      </FormControl>                       
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            Faculty:&emsp; <FormControl variant="standard" sx={{ m: -1, minWidth: 180 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age4}
          onChange={handleChange4}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Prof.G.Jaya Suma'}>Prof.G.Jaya Suma</MenuItem>
          <MenuItem value={'Dr.B.Tirimula Rao'}>Dr.B.Tirimula Rao</MenuItem>
          <MenuItem value={'Dr.ch.Bindu Madhuri'}>Dr.ch.Bindu Madhuri</MenuItem>
          <MenuItem value={'Mr.W.Anil'}>Mr.W.Anil</MenuItem>
          <MenuItem value={'R.S.S.Jyothi'}>R.S.S.Jyothi</MenuItem>
          <MenuItem value={'Dr.KOLLI.SRIKANTH'}>Dr.KOLLI.SRIKANTH</MenuItem>
          <MenuItem value={'Rajeti Roje Spandana'}>Rajeti Roje Spandana</MenuItem>
          <MenuItem value={'PYNAM VENKATESWARLU'}>PYNAM VENKATESWARLU</MenuItem>
          <MenuItem value={'Madhumita Chanda'}>Madhumita Chanda</MenuItem>
          <MenuItem value={'Bobbadi Manasa'}>Bobbadi Manasa</MenuItem>
          <MenuItem value={'M.Geetha Madhuri'}>M.Geetha Madhuri</MenuItem>
        </Select>
      </FormControl>
                        </label>
                    </p>
                    <p>
                        <label>
                            Subject: <input type="text" value={subject} onChange={handleChange5}></input><br />
                        </label>                                 
                    </p>
                </div>
                </form>
            </div>
            <br></br>
            <table>
                <tr>
                    <th>SI.NO.</th>
                    <th>Characteristics</th>
                    <th>Very Good</th>
                    <th>Good</th>
                    <th>Average</th>
                    <th>Below Average</th>
                    <th>Poor</th>
                    <th>Marks</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Knowledge of the Subject</td>
                    <td><input required type="radio" name="kots" id="kots" value={'Very_Good'} onChange={handleChange6}/></td>
                    <td><input required type="radio" name="kots" id="kots" value={'Good'} onChange={handleChange6}/></td>
                    <td><input required type="radio" name="kots" id="kots" value={'Average'} onChange={handleChange6}/></td>
                    <td><input required type="radio" name="kots" id="kots" value={'Below_Average'} onChange={handleChange6}/></td>
                    <td><input required type="radio" name="kots" id="kots" value={'Poor'} onChange={handleChange6}/></td>
                    <td><input required type="number" name="markskots" id="kots" value={q1} /></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Coming well prepared for the Class</td>
                    <td><input required type="radio" name="cwpftc" id="cwpftc" value={'Very_Good'} onChange={handleChange7}/></td>
                    <td><input required type="radio" name="cwpftc" id="cwpftc" value={'Good'} onChange={handleChange7} /></td>
                    <td><input required type="radio" name="cwpftc" id="cwpftc" value={'Average'} onChange={handleChange7} /></td>
                    <td><input required type="radio" name="cwpftc" id="cwpftc" value={'Below_Average'} onChange={handleChange7} /></td>
                    <td><input required type="radio" name="cwpftc" id="cwpftc" value={'Poor'} onChange={handleChange7} /></td>
                    <td><input required type="number" name="markscwpftc" id="cwpftc" /></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Giving Clear Explanations</td>
                    <td><input required  type="radio" name="gce" id="gce" value={'Very_Good'} onChange={handleChange20}/></td>
                    <td><input required type="radio" name="gce" id="gce" value={'Good'} onChange={handleChange20} /></td>
                    <td><input required type="radio" name="gce" id="gce" value={'Average'} onChange={handleChange20} /></td>
                    <td><input required type="radio" name="gce" id="gce" value={'Below_Average'} onChange={handleChange20} /></td>
                    <td><input required type="radio" name="gce" id="gce" value={'Poor'} onChange={handleChange20} /></td>
                    <td><input required type="number" name="marksgce" id="gec" /></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Command of Language</td>
                    <td><input required  type="radio" name="coln" id="coln" value={'Very_Good'} onChange={handleChange8}/></td>
                    <td><input required type="radio" name="coln" id="coln" value={'Good'} onChange={handleChange8} /></td>
                    <td><input required type="radio" name="coln" id="coln" value={'Average'} onChange={handleChange8} /></td>
                    <td><input required type="radio" name="coln" id="coln" value={'Below_Average'} onChange={handleChange8} /></td>
                    <td><input required type="radio" name="coln" id="coln" value={'Poor'} onChange={handleChange8} /></td>
                    <td><input required type="number" name="markscoln" id="coln" /></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Clear and Audible Voice</td>
                    <td><input required  type="radio" name="caav" id="caav" value={'Very_Good'} onChange={handleChange9}/></td>
                    <td><input required type="radio" name="caav" id="caav" value={'Good'} onChange={handleChange9} /></td>
                    <td><input required type="radio" name="caav" id="caav" value={'Average'} onChange={handleChange9} /></td>
                    <td><input required type="radio" name="caav" id="caav" value={'Below_Average'} onChange={handleChange9} /></td>
                    <td><input required type="radio" name="caav" id="caav" value={'Poor'} onChange={handleChange9} /></td>
                    <td><input required type="number" name="markscaav" id="caav"/></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Holding the attention of students through the Class</td>
                    <td><input required  type="radio" name="htaosttc" id="htaosttc" value={'Very_Good'} onChange={handleChange10}/></td>
                    <td><input required type="radio" name="htaosttc" id="htaosttc" value={'Good'} onChange={handleChange10} /></td>
                    <td><input required type="radio" name="htaosttc" id="htaosttc" value={'Average'} onChange={handleChange10} /></td>
                    <td><input required type="radio" name="htaosttc" id="htaosttc" value={'Below_Average'} onChange={handleChange10} /></td>
                    <td><input required type="radio" name="htaosttc" id="htaosttc" value={'Poor'} onChange={handleChange10} /></td>
                    <td><input required type="number" name="markshtaosttc" id="htaosttc" /></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Providing more matter than in the Text Book</td>
                    <td><input required  type="radio" name="pmmtittb" id="pmmtittb" value={'Very_Good'} onChange={handleChange11}/></td>
                    <td><input required type="radio" name="pmmtittb" id="pmmtittb" value={'Good'} onChange={handleChange11} /></td>
                    <td><input required type="radio" name="pmmtittb" id="pmmtittb" value={'Average'} onChange={handleChange11} /></td>
                    <td><input required type="radio" name="pmmtittb" id="pmmtittb" value={'Below_Average'} onChange={handleChange11} /></td>
                    <td><input required type="radio" name="pmmtittb" id="pmmtittb" value={q7} onChange={handleChange11} /></td>
                    <td><input required type="number" name="markspmmtittb" id="pmmtittb"/></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Capability to clear the doubts of Students</td>
                    <td><input required  type="radio" name="ctctdos" id="ctctdos" value={'Very_Good'} onChange={handleChange12}/></td>
                    <td><input required type="radio" name="ctctdos" id="ctctdos" value={'Good'} onChange={handleChange12} /></td>
                    <td><input required type="radio" name="ctctdos" id="ctctdos" value={'Average'} onChange={handleChange12} /></td>
                    <td><input required type="radio" name="ctctdos" id="ctctdos" value={'Below_Average'} onChange={handleChange12} /></td>
                    <td><input required type="radio" name="ctctdos" id="ctctdos" value={'Poor'} onChange={handleChange12} /></td>
                    <td><input required type="number" name="marksctctdos" id="ctctdos"/></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Encouraging students to ask questions and 
                        participate in Discussion</td>
                    <td><input required  type="radio" name="qapid" id="qapid" value={'Very_Good'} onChange={handleChange13}/></td>
                    <td><input required type="radio" name="qapid" id="qapid" value={'Good'} onChange={handleChange13} /></td>
                    <td><input required type="radio" name="qapid" id="qapid" value={'Average'} onChange={handleChange13} /></td>
                    <td><input required type="radio" name="qapid" id="qapid" value={'Below_Average'} onChange={handleChange13} /></td>
                    <td><input required type="radio" name="qapid" id="qapid" value={'Poor'} onChange={handleChange13} /></td>
                    <td><input required type="number" name="marksqapid" id="qapid"/></td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Appreciating students as and when deserving</td>
                    <td><input required  type="radio" name="asadwd" id="asadwd" value={'Very_Good'} onChange={handleChange14}/></td>
                    <td><input required type="radio" name="asadwd" id="asadwd" value={'Good'} onChange={handleChange14} /></td>
                    <td><input required type="radio" name="asadwd" id="asadwd" value={'Average'} onChange={handleChange14} /></td>
                    <td><input required type="radio" name="asadwd" id="asadwd" value={'Below_Average'} onChange={handleChange14} /></td>
                    <td><input required type="radio" name="asadwd" id="asadwd" value={'Poor'} onChange={handleChange14} /></td>
                    <td><input required type="number" name="marksasadwd" id="asadwd" /></td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Willingness to help students even out of Class</td>
                    <td><input required  type="radio" name="wthseooc" id="wthseooc" value={'Very_Good'} onChange={handleChange15}/></td>
                    <td><input required type="radio" name="wthseooc" id="wthseooc" value={'Good'} onChange={handleChange15} /></td>
                    <td><input required type="radio" name="wthseooc" id="wthseooc" value={'Average'} onChange={handleChange15} /></td>
                    <td><input required type="radio" name="wthseooc" id="wthseooc" value={'Below_Average'} onChange={handleChange15} /></td>
                    <td><input required type="radio" name="wthseooc" id="wthseooc" value={'Poor'} onChange={handleChange15} /></td>
                    <td><input required type="number" name="markswthseooc" id="wthseooc" /></td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Return of valued Test Papers / Records in Time</td>
                    <td><input required  type="radio" name="prit" id="prit" value={'Very_Good'} onChange={handleChange16}/></td>
                    <td><input required type="radio" name="prit" id="prit" value={'Good'} onChange={handleChange16} /></td>
                    <td><input required type="radio" name="prit" id="prit" value={'Average'} onChange={handleChange16} /></td>
                    <td><input required type="radio" name="prit" id="prit" value={'Below_Average'} onChange={handleChange16} /></td>
                    <td><input required type="radio" name="prit" id="prit" value={'Poor'} onChange={handleChange16} /></td>
                    <td><input required type="number" name="marksprit" id="prit"/></td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Punctuality and following Time Table Schedule</td>
                    <td><input required  type="radio" name="ftts" id="ftts" value={'Very_Good'} onChange={handleChange17}/></td>
                    <td><input required type="radio" name="ftts" id="ftts" value={'Good'} onChange={handleChange17} /></td>
                    <td><input required type="radio" name="ftts" id="ftts" value={'Average'} onChange={handleChange17} /></td>
                    <td><input required type="radio" name="ftts" id="ftts" value={'Below_Average'} onChange={handleChange17} /></td>
                    <td><input required type="radio" name="ftts" id="ftts" value={'Poor'} onChange={handleChange17} /></td>
                    <td><input required type="number" name="marksftts" id="ftts" /></td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Coverage of Syllabus</td>
                    <td><input required  type="radio" name="cos" id="cos" value={'Very_Good'} onChange={handleChange18}/></td>
                    <td><input required type="radio" name="cos" id="cos" value={'Good'} onChange={handleChange18} /></td>
                    <td><input required type="radio" name="cos" id="cos" value={'Average'} onChange={handleChange18} /></td>
                    <td><input required type="radio" name="cos" id="cos" value={'Below_Average'} onChange={handleChange18} /></td>
                    <td><input required type="radio" name="cos" id="cos" value={'Poor'} onChange={handleChange18} /></td>
                    <td><input required type="number" name="markscos" id="cos" /></td>
                </tr>
                <tr>
                    <td>15</td>
                    <td> Impartial (Treating all students alike)</td>
                    <td><input required  type="radio" name="tasa" id="tasa" value={'Very_Good'} onChange={handleChange19}/></td>
                    <td><input required type="radio" name="tasa" id="tasa" value={'Good'} onChange={handleChange19} /></td>
                    <td><input required type="radio" name="tasa" id="tasa" value={'Average'} onChange={handleChange19} /></td>
                    <td><input required type="radio" name="tasa" id="tasa" value={'Below_Average'} onChange={handleChange19} /></td>
                    <td><input required type="radio" name="tasa" id="tasa" value={'Poor'} onChange={handleChange19} /></td>
                    <td><input required type="number" name="markstasa" id="tasa" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table><br></br>
            <p>Note:Feed back was collected in <input
          type="datetime-local"
          name="dtos"
          id="dtos"
          value={currentDateTime}
          onChange={(e) => setCurrentDateTime(e.target.value)}
        /> from those students having more than 75% attendance.</p>
            <hr></hr>
            <br></br>
            <Stack spacing={2} direction={"row"} style={{marginLeft:'360px'}}>
            <Button variant="contained" onClick={handleReset}>Reset</Button>
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </Stack>
            <br></br>
            <br></br>
            </div>
    );
}


export default FillTable;