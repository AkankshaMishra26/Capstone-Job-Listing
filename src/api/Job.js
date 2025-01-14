import axios from 'axios';

// const BACKEND_ORIGIN_URL = 'http://localhost:3000';
const BACKEND_ORIGIN_URL = '';

const fetchJobs = async () => {
    try {
        const response = await axios.get(`/job`);
        return response;
    } catch (error) {
        return error;
    }
};

const fetchJobsByQuery = async (query) => {
    const {
        title,
        skills
    } = query;
    console.log(skills);
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job`, {
            params: {
                title,
                skills
            }
        });
        return response;
    } catch (error) {
        return error;
    }
};

const fetchJobById = async (id) => {
    try {
        const response = await axios.get(`/job/${id}`);
        return response;
    } catch (error) {
        return error;
    }
};

const createJob = async (job) => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const response = await axios.post(`/job/add`, job, config);
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
};


export { fetchJobs, fetchJobsByQuery, fetchJobById, createJob };