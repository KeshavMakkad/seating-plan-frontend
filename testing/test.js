import axios from "axios";

// const TARGET_URL = "http://localhost:8000/data/T3%20--%20Group%201%20React%20Midterm%20--%20Test";
// const TARGET_URL = "http://localhost:3000/data/T3%20--%20Group%201%20React%20Midterm%20--%20Test";
// const TARGET_URL = "https://seating-paln-backend-1.onrender.com/data/T3%20--%20Group%201%20React%20Midterm%20--%20Test";
//const TARGET_URL = "https://seating-backend.onrender.com/data/T3%20--%20Group%201%20React%20Midterm%20--%20Test";
// const TARGET_URL = "https://seating-backend-1046236071390.us-central1.run.app/data/T3%20--%20Group%201%20React%20Midterm%20--%20Test";
// const TARGET_URL = "http://34.100.135.136:8000/data/T3%20--%20Group%201%20React%20Midterm%20--%20Test";
const TARGET_URL = "https://seating.works/data/T3%20--%20Group%201%20React%20Midterm%20--%20Test";

async function makeRequest() {
    try {
        const response = await axios.get(TARGET_URL);
        return response.data;
    } catch (error) {
        console.error("Request failed:", error.message);
        return null;
    }
}

async function runLoadTest() {
    const totalRequests = 1000;
    const requests = [];

    console.time("Load Test Duration");

    for (let i = 0; i < totalRequests; i++) {
        requests.push(makeRequest());
    }

    // Execute all requests concurrently
    const results = await Promise.all(requests);

    console.timeEnd("Load Test Duration");
    console.log(`Completed ${results.length} requests.`);
}

runLoadTest();
