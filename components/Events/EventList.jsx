import EventItem from './EventItem';

const EventList = (props) => {
  const { cookingEvents } = props;
  return (
    <ul>
      {cookingEvents.map((event) => (
        <EventItem event={event} />
      ))}
    </ul>
  );
};

export default EventList;
