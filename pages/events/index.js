import Link from 'next/link';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/Events/EventList';
import EventsSearch from '../../components/Events/EventsSearch';
import { useRouter } from 'next/router';

const AllEvents = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <h1>All Categories</h1>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList cookingEvents={events} />
    </>
  );
};

export default AllEvents;
