import EventList from '../../components/Events/EventList';
import EventsSearch from '../../components/Events/EventsSearch';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../helpers/api-utils';
import Head from 'next/head';

const AllEvents = ({ events }) => {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <Head>
        <title>All Categories</title>
        <meta name="description" content="my favorite recipes in one place" />
      </Head>
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
