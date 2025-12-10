-- create users
CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

-- create comments
CREATE TABLE comments (
    user_id INT,
    comment_id INT,
    comment TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, comment_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- create comment counter
CREATE TABLE comment_sequence (
    user_id INT PRIMARY KEY,
    last_comment_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- create function to make counter count
CREATE OR REPLACE FUNCTION increment_comment_id()
RETURNS TRIGGER AS $$
DECLARE
    new_comment_id INT;
BEGIN
    -- Check if there is an entry for the user in the comment_sequence table
    IF EXISTS (SELECT 1 FROM comment_sequence WHERE user_id = NEW.user_id) THEN
        -- Get the last comment_id for the user and increment it
        SELECT last_comment_id + 1 INTO new_comment_id FROM comment_sequence WHERE user_id = NEW.user_id;
        -- Update the comment_sequence table with the new comment_id
        UPDATE comment_sequence SET last_comment_id = new_comment_id WHERE user_id = NEW.user_id;
    ELSE
        -- If no entry exists for the user, set the new comment_id to 1
        new_comment_id := 1;
        -- Insert a new entry into the comment_sequence table for the user
        INSERT INTO comment_sequence (user_id, last_comment_id) VALUES (NEW.user_id, new_comment_id);
    END IF;

    -- Set the comment_id for the new comment
    NEW.comment_id := new_comment_id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- trigger
CREATE TRIGGER before_insert_comment
BEFORE INSERT ON comments
FOR EACH ROW
EXECUTE FUNCTION increment_comment_id();

-- insert new users
INSERT INTO users (name, email) VALUES('Cloud444', 'Cloud@gmail.com');
INSERT INTO users (name, email) VALUES('GoatLover420', 'goats@gmail.com');
INSERT INTO users (name, email) VALUES('Senator', 'SenatorIsStinky@gmail.com');
INSERT INTO users (name, email) VALUES('Crim', 'Kiwi@gmail.com');

-- insert new comment by user x
INSERT INTO comments (user_id, comment) VALUES (1, 'This is so cringe lmao');
INSERT INTO comments (user_id, comment) VALUES (1, 'Imagine losing your house');
INSERT INTO comments (user_id, comment) VALUES (2, 'Goats');
INSERT INTO comments (user_id, comment) VALUES (1, 'Fr bro');


-- correct the comments
SELECT u.user_id, c.comment_id, u.name, u.email, c.comment, c.timestamp
FROM users u
JOIN comments c ON c.user_id = u.user_id
ORDER BY c.timestamp
