/* ==========================================
   VisionCraft AI - UI Functions
========================================== */

const previewContainer = document.getElementById("image-preview");

const jobsContainer = document.getElementById("jobs-container");

const resultContainer = document.getElementById("result-container");

function showImagePreview(file) {
  previewContainer.innerHTML = "";

  const image = document.createElement("img");

  image.src = URL.createObjectURL(file);

  image.alt = "Preview";

  previewContainer.appendChild(image);
}

function clearImagePreview() {
  previewContainer.innerHTML = "<p>No image selected.</p>";
}

function showError(message) {
  alert(message);
}

function showSuccess(message) {
  alert(message);
}

function showLoading() {
  resultContainer.innerHTML = "<p>Generating image...</p>";
}

function hideLoading() {
  // Intentionally left blank
}

function displayResult(job) {
  resultContainer.innerHTML = `
        <div class="result-card">

            <img
                src="${BASE_URL}${job.generated_image}"
                alt="Generated Image"
                style="width:100%; border-radius:10px; margin-bottom:15px;"
            >

            <h3>${job.product_name}</h3>

            <p><strong>Status:</strong> ${job.status}</p>

            <p><strong>Prompt:</strong></p>

            <p>${job.prompt}</p>

        </div>
    `;
}

function updateJobsPlaceholder(job) {
  jobsContainer.innerHTML = `
        <div class="job-card">

            <h3>Job #${job.id}</h3>

            <p>Status: ${job.status}</p>

            <p>${job.product_name}</p>

        </div>
    `;
}
