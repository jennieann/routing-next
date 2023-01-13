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
