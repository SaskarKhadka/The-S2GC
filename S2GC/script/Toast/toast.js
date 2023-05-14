const notifications = document.querySelector(".notifications"),
  buttons = document.querySelectorAll(".buttons .btn");

const toastTypes = {
  timer: 3000,
  success: {
    icon: "fa-circle-check",
  },
  error: {
    icon: "fa-circle-xmark",
  },
  warning: {
    icon: "fa-triangle-exclamation",
  },
  info: {
    icon: "fa-circle-info",
  },
};
const removeToast = (toast) => {
  toast.classList.add("hide");
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  setTimeout(() => toast.remove(), 200);
};
const createToast = (type, text) => {
  const { icon } = toastTypes[type];
  const toast = document.createElement("li");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
  notifications.appendChild(toast);
  toast.timeoutId = setTimeout(() => removeToast(toast), toastTypes.timer);
};
