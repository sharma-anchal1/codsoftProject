const appointment = document.querySelector(".appointment-card");
const btn = document.getElementById("btn");

const openModal = () => {
    appointment.classList.add("active");
    appointment.classList.remove("hidden");
}

const closeModal = (event) => {
    if (!appointment.contains(event.target) && event.target !== btn) {
        appointment.classList.add("hidden");
        appointment.classList.remove("active");
    }
}

btn.addEventListener("click", openModal);
document.addEventListener("click", closeModal);

