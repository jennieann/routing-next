import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/Events/EventList';

const HomePage = () => {
  const cookingEvents = getFeaturedEvents();
  return (
    <div>
      <EventList cookingEvents={cookingEvents} />
    </div>
  );
};

export default HomePage;
