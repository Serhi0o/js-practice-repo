const axios = require('axios');
const API_BASE_URL = 'https://bookstore.toolsqa.com/BookStore/v1';

test('GET [/Book] by its id', async () => {
    const response = await axios.get(`${API_BASE_URL}/Book?ISBN=9781449325862`);

    const book = response.data;
    expect(book.pages).toBe(234);
});

test('GET [/Book] by its id', async () => {
    const response = await axios.get(`${API_BASE_URL}/Book?page=254&ISBN=9781449331818`);

    const book = response.data;
    expect(response.status).toBe(200);
});

test('GET [/Book] by its id', async () => {
    const response = await axios.get(`${API_BASE_URL}/Book?page=254&ISBN=9781449331818`);

    const book = response.data;
    expect(book.description).toBeDefined();
});