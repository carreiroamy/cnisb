const cookieDialog = document.getElementById("cookie-dialog-hj");
const cookieForm = document.getElementById("cookie-form-hj");
const cookiePreferences = document.querySelectorAll("[data-cookie]");
const cookieActions = document.querySelectorAll("[data-cookie-action]");
const { log } = console;

cookieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get and log the result to the console
    const formData = new FormData(e.target);
    const chosenCookiePreferences = formData.getAll("cookie");
    log(chosenCookiePreferences);

    cookieDialog.close();
});

cookieActions.forEach((action) => {
    action.addEventListener("click", (e) => {
        switch (e.target.dataset.cookieAction) {
            case "show-dialog":
                cookieDialog.showModal();
                break;
            case "allow-all":
                cookiePreferences.forEach((cookie) => {
                    cookie.checked = true;
                });
                break;
            case "reject-all":
                cookiePreferences.forEach((cookie) => {
                    cookie.checked = false;
                });
                break;
            default:
                break;
        }
    });
});


