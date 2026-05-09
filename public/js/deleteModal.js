let formToSubmit = null;

const modal = document.getElementById("confirmModal");
const modalText = document.getElementById("modalText");
const confirmYesBtn = document.getElementById("confirmYes");
const confirmNoBtn = document.getElementById("confirmNo");
const adminKeyInput = document.getElementById("adminKeyInput");

document.addEventListener("click", (e) => {
    const btn = e.target.closest(".delete-btn");
    if(!btn) {
        return;
    }

    e.preventDefault(); //stop form auto submission

    formToSubmit = btn.closest("form");

    const name = btn.dataset.name;
    modalText.textContent = `Delete ${name} record?`;

    modal.classList.remove('hidden');
});

confirmYesBtn.addEventListener('click', () => {
    if(!formToSubmit) {
        return;
    }
    
    const hiddenInput = document.createElement("input");

    hiddenInput.type = "hidden";
    hiddenInput.name = "adminKey"
    hiddenInput.value = adminKeyInput.value;

    formToSubmit.appendChild(hiddenInput);

    formToSubmit.submit();
});

confirmNoBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    adminKeyInput.value = "";
    formToSubmit = null;
});