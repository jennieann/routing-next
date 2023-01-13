import Link from 'next/link';
import { useRouter } from 'next/router';
import { getEventById, getAllEvents } from '../../helpers/api-utils';
import EventSummary from '../../components/EventDetail/EventSummary';
import EventLogistics from '../../components/EventDetail/EventLogistics';
import EventContent from '../../components/EventDetail/eventContent';
import ErrorAlert from '../../components/ui/ErrorAlert';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
const EventDetails = ({ event }) => {
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        location={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticPaths = async () => {
  const allEvents = await getAllEvents();

  const paths = allEvents.map((event) => ({
    params: {
      id: event.id,
    },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const eventID = params.id;

  const event = await getEventById(eventID);

  if (!event) {
    return { notFound: true };
  }

  return {
    props: { event },
    revalidate: 900,
  };
};

export default EventDetails;
