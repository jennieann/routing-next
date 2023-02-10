import classes from './NewsletterRegistration.module.css';
import { useRef, useState } from 'react';

const NewsletterRegistration = () => {
  const emailInputRef = useRef();

  const [validEmail, setValidEmail] = useState(true);

  const validateEmail = (email) => {
    const validEmail = email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    validEmail?.length > 0 ? setValidEmail(true) : setValidEmail(false);
  };

  const registrationHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    validateEmail(enteredEmail);

    if (validEmail) {
      fetch('/api/newsletterRegistration', {
        method: 'POST',
        body: JSON.stringify({ email: enteredEmail }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      {!validEmail && <p>Din e-post är ej giltig</p>}
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailInputRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
