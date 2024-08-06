document.getElementById("getEstimate").addEventListener("click", function() {
    alert("Please fill out the contact form below to receive a free estimate.");
});

document.querySelectorAll("#nav ul li a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        var sectionId = link.getAttribute("href");
        var section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    });
});

document.querySelector("#contact form").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("message"));
});