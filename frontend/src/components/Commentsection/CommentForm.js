import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');
  const [userId, setUserId] = useState('');
  const [users, setUsers] = useState([]);

// to fetch all existing comments from the data base, there were issue with updating the site after posting a comment so I added 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);


// Just the action of POST to tie it together with the user_id from my SQL table
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (comment && userId) {
  //     addComment({ user_id: userId, comment });
  //     setComment('');
  //     setUserId('');
  //   }
  // };

  const filler = (event) => {
    event.preventDefault();
    event.target.elements[0].setCustomValidity("Not logged in.")
  }

  return (
    <form onSubmit={filler}>
      {/* <select value={userId} onChange={(e) => setUserId(e.target.value)} required>
        <option value="">Select user</option>
        {users.map((user) => (
          <option key={user.user_id} value={user.user_id}>
            {user.name}
          </option>
        ))}
      </select> */} 
      <div className='commentbox'>
      <input
        maxLength={500}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        required
      />
      <button className='post' type="submit">Post</button>
      </div>
    </form>
  );
};

export default CommentForm;
