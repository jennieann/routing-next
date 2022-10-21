const EventItem = (props) => {
  const { event } = props;
  return <li key={event.id}>{event.title}</li>;
};

export default EventItem;
