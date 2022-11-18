import Link from 'next/link';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <>
      {props.link ? (
        <Link href={props.link}>
          <a className={styles.btn}>{props.children}</a>
        </Link>
      ) : (
        <button className={styles.btn} onClick={props.onClick}>
          {props.children}
        </button>
      )}
    </>
  );
};

export default Button;
