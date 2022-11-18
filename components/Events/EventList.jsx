import EventItem from './EventItem';
import styles from './EventList.module.css';

const EventList = (props) => {
  const { cookingEvents } = props;
  return (
    <ul className={styles.eventList}>
      {cookingEvents.map((event) => (
        <EventItem event={event} key={event.id} />
      ))}
    </ul>
  );
};

export default EventList;
