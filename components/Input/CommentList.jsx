import classes from './CommentList.module.css';

function CommentList({ comments }) {
  console.log('Commentarer', comments);
  return (
    <ul className={classes.comments}>
      {comments.length > 0 &&
        comments.map((comment) => (
          <li key={comment._id}>
            <p>{comment.comment}</p>
            <div>
              By <address> {comment.name}</address>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default CommentList;
