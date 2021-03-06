import React, { useState, useRef } from 'react';
import StyledHome from './Home.styled';
import { statesList } from '../../data/statesList';
import { Popup } from 'modal-comp-for-react';
import DatePicker from 'react-datepicker';
import { getMonth, getYear } from 'date-fns';
import range from 'lodash/range';
import 'react-datepicker/dist/react-datepicker.css';

// const years = range(1990, getYear(new Date()) + 1, 1);
// const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

function Home({ updateData }) {
  const list = [...statesList];
  const [popupActive, setPopupActive] = useState(false);
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const adressInput = useRef();
  const cityInput = useRef();
  const stateInput = useRef();
  const zipInput = useRef();
  const departmentInput = useRef();
  const [startDate, setStartDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(new Date());

  const submitData = (e) => {
    e.preventDefault();

    updateData((prevState) => {
      const newState = [
        ...prevState,
        {
          firstname: firstNameInput.current.value,
          lastname: lastNameInput.current.value,
          birthDate: birthDate.toLocaleDateString('en-US'),
          startDate: startDate.toLocaleDateString('en-US'),
          street: adressInput.current.value,
          city: cityInput.current.value,
          federalState: stateInput.current.value,
          zipCode: zipInput.current.value,
          department: departmentInput.current.value,
        },
      ];
      return newState;
    });
    setPopupActive(true);
  };

  return (
    <StyledHome>
      <h2>Create Employee</h2>
      <form>
        <div className="form__wrapper">
          <label htmlFor="firstname">First Name</label>
          <input id="firstname" type="text" ref={firstNameInput} />
        </div>

        <div className="form__wrapper">
          <label htmlFor="lastname">Last Name</label>
          <input id="lastname" type="text" ref={lastNameInput} />
        </div>

        <div className="form__wrapper">
          <label htmlFor="birthday">Date of Birth</label>
          <DatePicker
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
            showMonthDropdown
            showYearDropdown
            dateFormatCalendar=" "
            todayButton="????"
          />
        </div>

        <div className="form__wrapper">
          <label htmlFor="startdate">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showMonthDropdown
            showYearDropdown
            dateFormatCalendar=" "
            placeholderText="Click to select a date"
            todayButton="????"
          />
        </div>

        <fieldset>
          <legend>Address</legend>

          <div className="form__wrapper">
            <label htmlFor="street">Street</label>
            <input id="street" type="text" ref={adressInput} />
          </div>

          <div className="form__wrapper">
            <label htmlFor="city">City</label>
            <input id="city" type="text" ref={cityInput} />
          </div>

          <div className="select">
            <label htmlFor="state">State</label>
            <select ref={stateInput} id="state">
              {list.map((state) => {
                return <option key={state}>{state}</option>;
              })}
            </select>
          </div>

          <div className="form__wrapper">
            <label htmlFor="zipcode">Zip Code</label>
            <input id="zipcode" type="number" ref={zipInput} />
          </div>
        </fieldset>

        <div className="select">
          <label htmlFor="department">Department</label>
          <select id="department" ref={departmentInput}>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>

        <button className="form__btn" onClick={submitData}>
          <span>Save</span>
          <span>&gt;</span>
        </button>

        <Popup
          showPopup={popupActive}
          closePopup={(e) => {
            e.preventDefault();
            setPopupActive(false);
          }}
          overlay
        >
          Employee Created!
        </Popup>
      </form>
    </StyledHome>
  );
}

export default Home;
