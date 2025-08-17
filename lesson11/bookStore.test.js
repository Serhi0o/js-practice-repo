const axios = require('axios');
const API_BASE_URL = 'https://bookstore.toolsqa.com/BookStore/v1';

test('GET [/Books] returns length', async () => {
    const response = await axios.get(`${API_BASE_URL}/Books`);

    const books = response.data.books;
    expect(books.length).toBe(8);
});

test('GET [/Books] returns status code', async () => {
    const response = await axios.get(`${API_BASE_URL}/Books`);

    const books = response.data.books;
    expect(response.status).toBe(201);
});
