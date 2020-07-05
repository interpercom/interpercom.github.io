// Open Modal
function openModalPrevia() {
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.position = 'fixed';
  document.getElementById("modalPrevia").style.display = "block";
  setTimeout(function() {
    document.getElementById("modalPrevia").style.visibility = "visible";
    document.getElementById("modalPrevia").style.opacity = "1";
  }, 10);
}

// Open Modal
function openModalPreviaOf() {
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.position = 'fixed';
  document.getElementById("modalPreviaOf").style.display = "block";
  setTimeout(function() {
    document.getElementById("modalPreviaOf").style.visibility = "visible";
    document.getElementById("modalPreviaOf").style.opacity = "1";
  }, 10);
}

// Close the Modal
function closeModal() {
  document.getElementById("modalPrevia").style.visibility = "hidden";
  document.getElementById("modalPrevia").style.opacity = "0";
  setTimeout(function() { document.getElementById("modalPrevia").style.display = "none"; }, 250);

  document.getElementById("modalPreviaOf").style.visibility = "hidden";
  document.getElementById("modalPreviaOf").style.opacity = "0";
  setTimeout(function() { document.getElementById("modalPreviaOf").style.display = "none"; }, 250);
}
