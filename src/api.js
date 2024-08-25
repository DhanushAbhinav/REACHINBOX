import axios from 'axios';
import { getAuthToken } from './utils/auth';

const API_BASE_URL = 'https://hiring.reachinbox.xyz/api/v1';

// Function to handle GET requests for onebox list
export const fetchOneboxList = async () => {
    const token = getAuthToken();
    const response = await axios.get(${API_BASE_URL}/onebox/list, {
        headers: {
            Authorization: Bearer ${token},
        },
    });
    return response.data.data;
};

// Function to fetch details of a specific thread
export const fetchOneboxThread = async (threadId) => {
    const token = getAuthToken();
    const response = await axios.get(${API_BASE_URL}/onebox/${threadId}, {
        headers: {
            Authorization: Bearer ${token},
        },
    });
    return response.data.data;
};

// Function to delete a thread
export const deleteOneboxThread = async (threadId) => {
    const token = getAuthToken();
    await axios.delete(${API_BASE_URL}/onebox/${threadId}, {
        headers: {
            Authorization: Bearer ${token},
        },
    });
};

// Function to reply to a thread
export const replyToOneboxThread = async (threadId, replyData) => {
    const token = getAuthToken();
    const response = await axios.post(${API_BASE_URL}/onebox/reply/${threadId}, replyData, {
        headers: {
            Authorization: Bearer ${token},
        },
    });
    return response.data;
};

// Function to handle Google Login
export const googleLogin = async (redirectTo) => {
    const response = await axios.get(${API_BASE_URL}/auth/google-login, {
        params: {
            redirect_to: redirectTo,
        },
    });
    return response.data;
};