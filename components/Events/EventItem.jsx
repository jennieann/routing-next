import Link from 'next/link';
import Image from 'next/image';

import styles from './EventItem.module.css';
import Button from '../ui/Button';
import DateIcon from '../icons/DateIcon';
import AddressIcon from '../icons/AddressIcon';
import ArrowIcon from '../icons/ArrowRightIcon';

const EventItem = (props) => {
  const { title, date, id, location, image } = props.event;

  const humanReadableDate = new Date(date).toLocaleDateString('sv-SE', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    weekday: 'long',
  });

  const formattedLocation = location.replace(', ', '\n');

  const eventLink = `/events/${id}`;
  return (
    <li key={id} className={styles.item}>
      <img
        priority="1"
        src={'/' + image}
        alt={title}
        className={styles.image}
        height={200}
        width={200}
      />

      <div className={styles.content}>
        <h2>{title}</h2>
        <div className={styles.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>
        <div className={styles.address}>
          <AddressIcon />
          <address>{formattedLocation}</address>
        </div>
        <div className={styles.actions}>
          <Button link={eventLink}>
            <span> Explore</span>
            <span className={styles.icon}>
              <ArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
