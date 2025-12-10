import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentSection from './CommentSection';
import CommentForm from './CommentForm';
import './App.css';

const App = () => {
  const [comments, setComments] = useState([]);

// fetching comments for GET
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/comments');
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

// Adding a comment via input on site for POST
  const addComment = async (newComment) => {
    try {
      await axios.post('http://localhost:5000/comments', newComment);
      // Fetch the updated comments after adding a new one
      fetchComments();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

// The editing tool for PUT
  const updateComment = async (commentId, newText) => {
    try {
      const response = await axios.put(`http://localhost:5000/comments/${commentId}`, {
        comment: newText
      });
  
      // Update the comments state with the updated comment
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.comment_id === commentId ? response.data : comment
        )
      );
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };  

// dropping comments for DELETE
  const deleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:5000/comments/${commentId}`);
      setComments(comments.filter(comment => comment.comment_id !== commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className="App">
      <div className='ForumContent'>
      <h1>Brownsberry Incident</h1>
      <section>
        <p>Soon to be fully transferred!</p>
      </section>
      </div>
      <br/>
      <hr/>
      <div className='comsec'>
      <h2>Comments</h2>
      <CommentForm addComment={addComment} />
      <CommentSection comments={comments} deleteComment={deleteComment} updateComment={updateComment} />
      </div>
    </div>
  );
};

export default App;
