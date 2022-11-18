import Button from '../ui/Button';
import styles from './EventsSearch.module.css';
import { useRef } from 'react';

const EventsSearch = (props) => {
  const yearInputRef = useRef();
  const mothInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('Submitted');
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = mothInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year" className={styles.label}>
            Year
          </label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month" className={styles.label}>
            Month
          </label>
          <select id="month" ref={mothInputRef}>
            <option value="1">Januari</option>
            <option value="2">Februari</option>
            <option value="3">Mars</option>
            <option value="4">April</option>
            <option value="5">Maj</option>
            <option value="6">Juni</option>
            <option value="7">Juli</option>
            <option value="8">Augusti</option>
            <option value="9">September</option>
            <option value="10">Oktober</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          {/* <label htmlFor="day">Day</label>
          <select id="day">
            <option value="1">Måndag</option>
            <option value="2">Tisdag</option>
            <option value="3">Onsdag</option>
            <option value="4">Torsdag</option>
            <option value="5">Fredag</option>
            <option value="6">Lördag</option>
            <option value="7">Söndag</option>
          </select> */}
        </div>
        <Button>Find Events</Button>
      </div>
    </form>
  );
};

export default EventsSearch;
