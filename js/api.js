/* ==========================================
   VisionCraft AI - Backend API
========================================== */

const BASE_URL = "http://127.0.0.1:5000";

async function healthCheck() {

    const response = await fetch(`${BASE_URL}/health`);

    return await response.json();

}

async function generateProduct(formData) {

    const response = await fetch(`${BASE_URL}/generate`, {

        method: "POST",

        body: formData

    });

    const data = await response.json();

    if (!response.ok) {

        throw new Error(data.error);

    }

    return data;

}

async function getJob(jobId) {

    const response = await fetch(`${BASE_URL}/jobs/${jobId}`);

    const data = await response.json();

    if (!response.ok) {

        throw new Error(data.error);

    }

    return data;

}