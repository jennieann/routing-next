export const getAllEvents = async () => {
  const getEvents = await fetch(
    'https://next-js-course-api-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
  );

  const events = await getEvents.json();

  const transformedEvents = [];

  for (const key in events) {
    transformedEvents.push({
      id: key,
      ...events[key],
    });
  }

  return transformedEvents;
};

export const getFeaturedEvents = async () => {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
};

export const getEventById = async (id) => {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
};

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;
  const events = await getAllEvents();

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};
