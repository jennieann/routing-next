import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/Events/EventList';

const HomePage = ({ events }) => {
  return (
    <div>
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
