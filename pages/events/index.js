import EventList from '../../components/Events/EventList';
import EventsSearch from '../../components/Events/EventsSearch';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../helpers/api-utils';

const AllEvents = ({ events }) => {
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

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: { events },
    revalidate: 900,
  };
};
export default AllEvents;
