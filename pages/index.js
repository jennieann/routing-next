import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/Events/EventList';
import Head from 'next/head';

const HomePage = ({ events }) => {
  return (
    <div>
      <Head>
        <title>My recipes</title>
        <meta name="description" content="my favorite recipes in one place" />
      </Head>
      <EventList cookingEvents={events} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredCookingEvents = await getFeaturedEvents();

  return {
    props: { events: featuredCookingEvents },
    revalidate: 900,
  };
};

export default HomePage;
