CREATE TABLE cocktails(
    cocktail_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    date DATE,
    rating INT CHECK(rating <= 10) CHECK(rating >= 0), 
    comment VARCHAR(500)
);