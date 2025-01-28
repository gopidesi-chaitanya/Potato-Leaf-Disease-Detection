function goHome() {
    window.location.href = "index.html";
  }
  
  function uploadImage() {
    const input = document.getElementById("imageUpload");
    const preview = document.getElementById("preview");
  
    if (input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
  
      reader.onload = function (e) {
        preview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        alert("Image uploaded successfully! (This is just a preview)");
      };
  
      reader.readAsDataURL(file);
    } else {
      alert("Please select an image first.");
    }
  }
  