import React, { useState } from 'react';

const CommentSection = ({ comments, deleteComment, updateComment }) => {
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [newCommentText, setNewCommentText] = useState('');

  const handleEditClick = (commentId, currentText) => {
    setEditingCommentId(commentId);
    setNewCommentText(currentText);
  };

  const handleUpdateClick = async () => {
    if (!newCommentText.trim()) {
      alert('Comment cannot be empty');
      return;
    }
    await updateComment(editingCommentId, newCommentText);
    setEditingCommentId(null); // Close the edit mode
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.comment_id} style={{ marginBottom: '10px' }}>
          <br/>
          <strong>{comment.user_name} </strong>
          <small>{new Date(comment.timestamp).toLocaleString()}</small>
          {editingCommentId === comment.comment_id ? (
            <div>
              <input
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder="Edit your comment..."
              />
              <button onClick={handleUpdateClick}>Finish</button>
            </div>
          ) : (
            <>
              <p className='comment'>{comment.comment}</p>
              <div className='commentbuttons'>
              {/* <button onClick={() => handleEditClick(comment.comment_id, comment.comment)}>Edit</button>
              <button onClick={() => deleteComment(comment.comment_id)}>Delete</button> */}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
