import copyImg from "../src/images/copy.png";

export const defaultCopy_DOM = () => {
  const inputBox = document.getElementById("inputBox");
  inputBox.classList.remove("bg-green-100");
  inputBox.classList.remove("border-green-100");
};

export const copiedBox_DOM = () => {
  const inputBox = document.getElementById("inputBox");
  inputBox.classList.add("bg-green-100");
  inputBox.classList.add("border-green-100");
};

export const successResponse_DOM = () => {
  defaultCopy_DOM();
  const errorMessage = document.getElementById("errorMessageDisplay");
  errorMessage.setAttribute("hidden", "");
  document.getElementById("urlEntered").value = "";
  document.getElementById("copyBoxId").removeAttribute("hidden");
  document.getElementById("copyImg").src = copyImg;
};

export const errorMessage_DOM = () => {
  const errorMessage = document.getElementById("errorMessageDisplay");
  errorMessage.textContent = "*Empty URLs are not allowed";
  errorMessage.removeAttribute("hidden");
};
