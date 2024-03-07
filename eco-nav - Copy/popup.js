document.addEventListener("DOMContentLoaded", function () {
  const iframe = document.getElementById("my-iframe");
  const spinner = document.querySelector(".spinner");
  const note = document.querySelector(".note");
  const iframeUrl = "http://3.95.48.185:3000/"; // Replace with your desired URL

  fetch(iframeUrl, { method: 'head' })
    .then(response => {
      if (response.ok) {
        setTimeout(function () {
          iframe.src = iframeUrl;
          iframe.style.display = "block";
          spinner.style.display = "none";
          note.style.display = 'block';
        }, 2000); // 2 seconds delay
      } else {
        note.innerHTML = response.status;
        note.style.display = 'block';
        console.error("Iframe URL returned a non-200 status:", response.status);
        spinner.style.display = "none";
      }
    })
    .catch(error => {
      // console.error("Error checking iframe URL:", error);
      spinner.style.display = "none";
      note.innerHTML = `Error: ${error}`;
      note.style.display = 'block';
    });
});
