// Add your data or additional JavaScript code here
const endPoint = 'https://api.chucknorris.io/jokes/random';

async function loadData(myEndPoint) {
    try {
        let request = await fetch(myEndPoint, { method: 'GET' });
        let data = await request.json();
        return data;
    } catch {
        return error;
    }
}





