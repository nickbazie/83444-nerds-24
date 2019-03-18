
var link = document.querySelector(".contact-us-btn");

var popup = document.querySelector(".modal-contact");
var close = popup.querySelector(".contact-close");

var form = popup.querySelector("form");
var mName = popup.querySelector("[name=name]");
var mEmail = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("mEmail");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

if (storage) {
    mEmail.value = storage;
}

    mName.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    mEmail.classList.remove("invalid-data");
});

form.addEventListener("submit", function (evt) {
    if (!mEmail.value) {
    evt.preventDefault();
    mEmail.classList.remove("invalid-data");
    mEmail.offsetWidth = mEmail.offsetWidth;
    mEmail.classList.add("invalid-data");
    } else {
    if (isStorageSupport) {
        localStorage.setItem("mEmail", mEmail.value);
    }
    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        mEmail.classList.remove("invalid-data");
    }
    }
});