import EventList from '../../components/Events/EventList';
import ResultsTitle from '../../components/Events/ResultsTitle';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/ErrorAlert';
import { getFilteredEvents } from '../../helpers/api-utils';
import Head from 'next/head';

const FilterEvents = ({ events, date }) => {
  const head = (
    <Head>
      <title>Search recipes</title>
      <meta name="description" content="my favorite recipes in one place" />
    </Head>
  );
  if (!events || events.length === 0) {
    return (
      <>
        {head}
        <ErrorAlert>
          <p>No events found for the chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">All Categories</Button>
        </div>
      </>
    );
  }

  const eventDate = new Date(date.year, date.month - 1);

  return (
    <div>
      {head}
      <ResultsTitle date={eventDate} />
      <EventList cookingEvents={events} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const year = params.slug[0];
  const month = params.slug[1];

  const numYear = +year;
  const numMonth = +month;

  if (
    isNaN(numYear) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return { notFound: true };
  }

  const events = await getFilteredEvents({ year: numYear, month: numMonth });

  return {
    props: { events, date: { year: numYear, month: numMonth } },
  };
};
export default FilterEvents;
