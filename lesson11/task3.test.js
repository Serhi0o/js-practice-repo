const axios = require('axios');
const API_BASE_URL = 'https://bookstore.toolsqa.com/BookStore/v1';

test('PUT [/Books/{ISBN}] updates book in collection', async () => {
    
    const responseGetToken = await axios.post(`${API_BASE_URL}/Account/v1/GenerateToken`, {
        userName: 'Serhiiiiiii7!',
        password: 'Serhiiiiiii7!'
    });
    
    const token = responseGetToken.data.token;
    
    // Original book ISBN to be replaced
    const oldIsbn = "9781491904244"; 
    // New book ISBN
    const newIsbn = "9781491944444";
    
    const responseUpdateBook = await axios.put(`${API_BASE_URL}/Books/${oldIsbn}`, {
        userId: "9f74a962-ffd9-475f-b9bf-c11a128fd60a",
        isbn: newIsbn
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        validateStatus: () => true
    });
    
    // A successful update often returns 200 OK
    expect(responseUpdateBook.status).toBe(200);
});