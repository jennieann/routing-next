const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Dessert',
    description: 'Learn how to make delicious dessert',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2021-05-12',
    image: 'images/dessert.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Baking',
    description: 'SourDough how hard can i be! Learn how to bake like a pro',
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-30',
    image: 'images/baking.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Meals',
    description: 'Whats for dinner. Level up your skills in the kitchen',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'images/meals.jpg',
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  console.log(id);
  return DUMMY_EVENTS.find((event) => event.id === id);
}
