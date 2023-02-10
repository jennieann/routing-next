import { useEffect, useState } from 'react';

import CommentList from './CommentList';
import NewComment from './NewComment';
import classes from './Comments.module.css';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [updated, setUpdated] = useState(false);

  const toggleCommentsHandler = async () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  function addCommentHandler(commentData) {
    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify({
        email: commentData.email,
        name: commentData.name,
        comment: commentData.text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => setUpdated(true));
  }

  useEffect(() => {
    if (showComments) {
      const getData = async () => {
        const response = await fetch(`/api/comments/${eventId}`);
        const data = await response.json();
        console.log(data);
        setComments(data.data);
        setUpdated(false);
        console.log(comments);
      };
      getData();
    }
  }, [showComments, updated]);

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
