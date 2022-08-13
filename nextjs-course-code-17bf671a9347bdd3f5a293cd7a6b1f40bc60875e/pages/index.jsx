import { useRef } from 'react';

function HomePage() {
  const emailInputRef = useRef(null);
  const feedbackInputRef = useRef(null);

  const submitFormHandler = async e => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    try {
      const res = await fetch('/api/feedback', {
        body: JSON.stringify({
          enteredEmail,
          enteredFeedback
        }),
        method: 'POST'
      });

      const { message } = await res.json();

      console.log(message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form>
        <div>
          <label htmlFor='email'>Your email</label>
          <input ref={emailInputRef} type='text' name='email' id='email' />
        </div>
        <div>
          <label htmlFor='feedback'>Your feedback</label>
          <textarea
            ref={feedbackInputRef}
            name='feedback'
            id='feedback'></textarea>
        </div>
        <button onClick={submitFormHandler}>Send feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
