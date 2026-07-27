/* ==========================================
   VisionCraft AI - Main Script
========================================== */
console.log("main.js loaded");
const form = document.getElementById("generateForm");
const imageInput = document.getElementById("image");

window.addEventListener("DOMContentLoaded", async () => {
  try {
    await healthCheck();

    console.log("✅ Backend Connected");
  } catch (error) {
    showError("Backend is not running.");
  }
});

imageInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    showImagePreview(file);
  } else {
    clearImagePreview();
  }
});

document
  .getElementById("generate-btn")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    console.log("Submit button clicked");

    const errors = validateForm();

    console.log(errors);

    if (Object.keys(errors).length > 0) {
      console.log("Validation failed");

      showError(Object.values(errors)[0]);

      return;
    }

    console.log("Validation passed");

    const formData = new FormData(form);

    try {
      showLoading();

      const generateResponse = await generateProduct(formData);

      console.log("Generate Response:", generateResponse);

      const job = await getJob(generateResponse.job_id);

      console.log("Job:", job);

      displayResult(job);

      updateJobsPlaceholder(job);

      console.log("After displayResult");
    } catch (error) {
      console.error("ERROR:", error);

      showError(error.message);
    }

    // REMOVE THE finally BLOCK COMPLETELY
  });
