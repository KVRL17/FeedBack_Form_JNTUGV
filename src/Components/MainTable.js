import React from "react";
import '../Components/Maintable.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { NavLink } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import  { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setSubject, setFaculty } from '../Components/action';

const MainTable=()=>{
  const [feedbackData, setFeedbackData] = useState([]);
  const [age, setAge] = React.useState('');
  const [age1, setAge1] = React.useState('');
  const [age2, setAge2] = React.useState('');
  const [age3, setAge3] = React.useState('');
  const [age4, setAge4] = React.useState('');
  const [subject, setsubject] = React.useState('');
  
  var a='';
  var b='';
  var c='';
  var d='';
  var e='';
  var inputValue='';
  

  const handleChange = (event) => {
    setAge(event.target.value);
    var a = event.target.value;
  };
  const handleChange1 = (event) => {
    setAge1(event.target.value);
    var b = event.target.value;
  };
  const handleChange2 = (event) => {
    setAge2(event.target.value);
    var c = event.target.value;
  };
  const handleChange3 = (event) => {
    setAge3(event.target.value);
    var d = event.target.value;
  };

  const dispatch = useDispatch();

  const handleChange4 = (event) => {
    const faculty = event.target.value;
    dispatch(setFaculty(faculty));
  };

  const handleChange5 = (event) => {
    const subject = event.target.value;
    dispatch(setSubject(subject));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/feedbackData');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.success) {
          setFeedbackData(data.data);
        } else {
          console.error('Error fetching data:', data.error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

const [filteredData, setFilteredData] = useState([]);

useEffect(() => {
  const filtered = feedbackData.filter((feedback) => {
    return (
      (!age || feedback.academic_year === age) &&
      (!age1 || feedback.year === age1) &&
      (!age2 || feedback.semester === age2) &&
      (!age3 || feedback.branch === age3) &&
      (!age4 || feedback.faculty === age4) &&
      (!subject || feedback.subject === subject)
    );
  });

  setFilteredData(filtered);
}, [age, age1, age2, age3, age4, subject, feedbackData]);


const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

const questions = ['q1', 'q2', 'q3', 'q4', 'q5','q6','q7','q8','q9','q10','q11','q12','q13','q14','q15'];

const counts = {};
const percentages = {};

questions.forEach(question => {
  counts[question] = {};

  ['Very_Good', 'Good', 'Average', 'Below_Average', 'Poor'].forEach(category => {
    counts[question][category] = countOccurrences(filteredData.map(feedback => feedback[question]), category);
  });

  counts[question]['total'] = filteredData.length;

  percentages[question] = {};
  ['Very_Good', 'Good', 'Average', 'Below_Average', 'Poor'].forEach(category => {
    percentages[question][category] = Math.round((counts[question][category] / counts[question]['total']) * 100);
  });
});

    return(
        <div >
            <div >
            <img src="https://dhondi.ai/logos/jntugv.png" alt="JNTUGV LOGO" height="140" width="140" style={{float:'left'}}></img>
            {/* <img src="https://dhondi.ai/logos/jntugv.png" alt="JNTUGV LOGO" height="100" width="100"></img> */}
            <div id="logo">
              <h3>
                {a}
              </h3>
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
                </div>
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
          <MenuItem value={'1'}>1</MenuItem>
          <MenuItem value={'2'}>2</MenuItem>
          <MenuItem value={'3'}>3</MenuItem>
          <MenuItem value={'4'}>4</MenuItem>
          <MenuItem value={'5'}>5</MenuItem>
          <MenuItem value={'6'}>6</MenuItem>
          <MenuItem value={'7'}>7</MenuItem>
          <MenuItem value={'8'}>8</MenuItem>
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
                            &emsp;&emsp;&emsp;&emsp;
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
                    <td>{percentages['q1']['Very_Good']}%</td>
                    <td>{percentages['q1']['Good']}%</td>
                    <td>{percentages['q1']['Average']}%</td>
                    <td>{percentages['q1']['Below_Average']}%</td>
                    <td>{percentages['q1']['Poor']}%</td>
                    <td><input required type="number" name="markskots" id="kots" /></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Coming well prepared for the Class</td>
                    <td>{percentages['q2']['Very_Good']}%</td>
                    <td>{percentages['q2']['Good']}%</td>
                    <td>{percentages['q2']['Average']}%</td>
                    <td>{percentages['q2']['Below_Average']}%</td>
                    <td>{percentages['q2']['Poor']}%</td>
                    <td><input required type="number" name="markscwpftc" id="cwpftc" /></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Giving Clear Explanations</td>
                    <td>{percentages['q3']['Very_Good']}%</td>
                    <td>{percentages['q3']['Good']}%</td>
                    <td>{percentages['q3']['Average']}%</td>
                    <td>{percentages['q3']['Below_Average']}%</td>
                    <td>{percentages['q3']['Poor']}%</td>
                    <td><input required type="number" name="marksgce" id="gec" /></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Command of Language</td>
                    <td>{percentages['q4']['Very_Good']}%</td>
                    <td>{percentages['q4']['Good']}%</td>
                    <td>{percentages['q4']['Average']}%</td>
                    <td>{percentages['q4']['Below_Average']}%</td>
                    <td>{percentages['q4']['Poor']}%</td>
                    <td><input required type="number" name="markscoln" id="coln" /></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Clear and Audible Voice</td>
                    <td>{percentages['q5']['Very_Good']}%</td>
                    <td>{percentages['q5']['Good']}%</td>
                    <td>{percentages['q5']['Average']}%</td>
                    <td>{percentages['q5']['Below_Average']}%</td>
                    <td>{percentages['q5']['Poor']}%</td>
                    <td><input required type="number" name="markscaav" id="caav"/></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Holding the attention of students through the Class</td>
                    <td>{percentages['q6']['Very_Good']}%</td>
                    <td>{percentages['q6']['Good']}%</td>
                    <td>{percentages['q6']['Average']}%</td>
                    <td>{percentages['q6']['Below_Average']}%</td>
                    <td>{percentages['q6']['Poor']}%</td>
                    <td><input required type="number" name="markshtaosttc" id="htaosttc" /></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Providing more matter than in the Text Book</td>
                    <td>{percentages['q7']['Very_Good']}%</td>
                    <td>{percentages['q7']['Good']}%</td>
                    <td>{percentages['q7']['Average']}%</td>
                    <td>{percentages['q7']['Below_Average']}%</td>
                    <td>{percentages['q7']['Poor']}%</td>
                    <td><input required type="number" name="markspmmtittb" id="pmmtittb"/></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Capability to clear the doubts of Students</td>
                    <td>{percentages['q8']['Very_Good']}%</td>
                    <td>{percentages['q8']['Good']}%</td>
                    <td>{percentages['q8']['Average']}%</td>
                    <td>{percentages['q8']['Below_Average']}%</td>
                    <td>{percentages['q8']['Poor']}%</td>
                    <td><input required type="number" name="marksctctdos" id="ctctdos"/></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Encouraging students to ask questions and 
                        participate in Discussion</td>
                    <td>{percentages['q9']['Very_Good']}%</td>
                    <td>{percentages['q9']['Good']}%</td>
                    <td>{percentages['q9']['Average']}%</td>
                    <td>{percentages['q9']['Below_Average']}%</td>
                    <td>{percentages['q9']['Poor']}%</td>
                    <td><input required type="number" name="marksqapid" id="qapid"/></td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Appreciating students as and when deserving</td>
                    <td>{percentages['q10']['Very_Good']}%</td>
                    <td>{percentages['q10']['Good']}%</td>
                    <td>{percentages['q10']['Average']}%</td>
                    <td>{percentages['q10']['Below_Average']}%</td>
                    <td>{percentages['q10']['Poor']}%</td>
                    <td><input required type="number" name="marksasadwd" id="asadwd" /></td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Willingness to help students even out of Class</td>
                    <td>{percentages['q11']['Very_Good']}%</td>
                    <td>{percentages['q11']['Good']}%</td>
                    <td>{percentages['q11']['Average']}%</td>
                    <td>{percentages['q11']['Below_Average']}%</td>
                    <td>{percentages['q11']['Poor']}%</td>
                    <td><input required type="number" name="markswthseooc" id="wthseooc" /></td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Return of valued Test Papers / Records in Time</td>
                    <td>{percentages['q12']['Very_Good']}%</td>
                    <td>{percentages['q12']['Good']}%</td>
                    <td>{percentages['q12']['Average']}%</td>
                    <td>{percentages['q12']['Below_Average']}%</td>
                    <td>{percentages['q12']['Poor']}%</td>
                    <td><input required type="number" name="marksprit" id="prit"/></td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Punctuality and following Time Table Schedule</td>
                    <td>{percentages['q13']['Very_Good']}%</td>
                    <td>{percentages['q13']['Good']}%</td>
                    <td>{percentages['q13']['Average']}%</td>
                    <td>{percentages['q13']['Below_Average']}%</td>
                    <td>{percentages['q13']['Poor']}%</td>
                    <td><input required type="number" name="marksftts" id="ftts" /></td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Coverage of Syllabus</td>
                    <td>{percentages['q14']['Very_Good']}%</td>
                    <td>{percentages['q14']['Good']}%</td>
                    <td>{percentages['q14']['Average']}%</td>
                    <td>{percentages['q14']['Below_Average']}%</td>
                    <td>{percentages['q14']['Poor']}%</td>
                    <td><input required type="number" name="markscos" id="cos" /></td>
                </tr>
                <tr>
                    <td>15</td>
                    <td> Impartial (Treating all students alike)</td>
                    <td>{percentages['q15']['Very_Good']}%</td>
                    <td>{percentages['q15']['Good']}%</td>
                    <td>{percentages['q15']['Average']}%</td>
                    <td>{percentages['q15']['Below_Average']}%</td>
                    <td>{percentages['q15']['Poor']}%</td>
                    <td><input required type="number" name="markstasa" id="tasa" /></td>
                </tr>
            </table><br></br>
            <p>Note:Feed back was collected in <input type="datetime-local" name="dtos" id="dtos"/> from those students having more than 75% attendance.</p>
            <hr style={{height:'3px',color:'balck'}}></hr>
            <hr></hr>
            <br></br>
            <Button variant="contained"><NavLink to={{pathname:'/letter',state: { a, b, c, d, e, inputValue }}}
 style={{textDecoration:'none', color: "inherit"}}>View letter</NavLink></Button>
            </div>
    );
}

export default MainTable;