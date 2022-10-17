(function() {
    const containerRating = document.querySelector(".containerRating");
    let ratingNumber = null;
    const submitButton = document.getElementById("submitButton");
    const mainContainer = document.getElementsByTagName("main")[0];

    containerRating.addEventListener("click", (evt) => {
        let closestElement = evt.target.closest(".ratingButton");

        document.querySelectorAll(".ratingButton").forEach((el) => {
            el.classList.remove("selected");
        });

        closestElement.classList.add("selected");
        ratingNumber = closestElement.getAttribute("data-rating");
    });


    submitButton.addEventListener("click", () => {
        if (ratingNumber != null) {
            mainContainer.classList.add("submited");
            mainContainer.innerHTML = `
            <div class="containerImageSubmited">
                <img src="assets/images/illustration-thank-you.svg" alt="">
            </div>
            <p class="selectedRating">You selected ${ratingNumber} out of 5</p>
            <h2 class="title">Thank you!</h2>
            <p class="subtitle">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        `;
        }
    });

})();