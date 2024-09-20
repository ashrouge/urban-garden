function viewDetails(productTitle, productDescription) {
  // Menampilkan detail produk di modal
  document.getElementById('modal-product-title').innerText = productTitle;
  document.getElementById('modal-product-description').innerText = productDescription;

  // Menampilkan modal
  document.getElementById('product-modal').style.display = 'flex';
}

function activeButton(event) {
  // Remove the background color from all links
  const navLinks = document.querySelectorAll(".nav-items a");
  navLinks.forEach(link => {
    link.style.backgroundColor = ""; // Reset background color
  });

  // Set the background color for the clicked link
  event.target.style.backgroundColor = "#40916c";
}


function closeModal() {
  // Menyembunyikan modal
  document.getElementById('product-modal').style.display = 'none';
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}