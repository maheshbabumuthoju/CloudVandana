function submitForm() {
    const form = document.getElementById("surveyForm");
    if (form.checkValidity()) {
        const resultPopup = document.getElementById("resultPopup");
        resultPopup.style.display = "block";

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(e => e.labels[0].textContent).join(", ");
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        const result = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        document.getElementById("result").innerHTML = result;
    }
}

function closePopup() {
    const resultPopup = document.getElementById("resultPopup");
    resultPopup.style.display = "none";
    document.getElementById("surveyForm").reset();
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}
