const initModal = () => {

  const modals = document.querySelectorAll(".modal");
  console.log(modals);
  modals.forEach((modal) => {
    const manId = modal.dataset.manId;
    const btn = document.getElementById(`img-click-${manId}`);

    if (btn) {
      btn.addEventListener("click", (event) => {
        modal.style.display = "block";
      });
    };

    const close = modal.querySelector(".close");
    if (close) {
        close.addEventListener("click", (event) => {
          modal.style.display = "none";
      });
    };

  });
};

export { initModal };
