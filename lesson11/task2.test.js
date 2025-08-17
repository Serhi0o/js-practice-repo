const axios = require('axios');
const API_BASE_URL = 'https://bookstore.toolsqa.com/BookStore/v1';

test('POST [/Books] with auth adds book', async () => {
    
    const responseGetToken = await axios.post(`${API_BASE_URL}/Account/v1/GenerateToken`, {
        userName: 'Serhiiiiiii7!',
        password: 'Serhiiiiiii7!'
    });
    
    const token = responseGetToken.data.token;
    
    const responseAddBook = await axios.post(`${API_BASE_URL}/BookStore/v1/Books`, {
        "userId": "9f74a962-ffd9-475f-b9bf-c11a128fd60a",
        "collectionOfIsbns": [
            {
                "isbn": "9781449331818"
            }
        ]
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        validateStatus: () => true
    });

    expect(responseAddBook.status).toBe(201);
});