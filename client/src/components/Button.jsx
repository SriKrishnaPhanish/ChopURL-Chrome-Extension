import axios from "axios";
import { errorMessage_DOM, successResponse_DOM } from "../utils";

function isValidURL(urlEntered) {
  try {
    new URL(urlEntered);
    return true;
  } catch (e) {
    return false;
  }
}

async function postURLtoDB() {
  console.log(import.meta.env.VITE_BACKEND_API);
  const urlEntered = document.getElementById("urlEntered").value;
  if (urlEntered === "" || urlEntered === null) {
    errorMessage_DOM();
    return;
  }
  //const isValidURL = isValidURL(urlEntered);
  const urlData = {
    url: urlEntered,
  };

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API}v1/api/generate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(urlData),
    }
  );
  if (response) {
    const responseData = await response.json();
    if (responseData.type === "Success") {
      successResponse_DOM();
      console.log(document.getElementById("inputBox").value);
      console.log(responseData.shortUrl);
      document.getElementById("inputBox").value =
        import.meta.env.VITE_BACKEND_API + responseData.shortUrl;
    }
  }
}

export const Button = () => {
  return (
    <div
      onClick={postURLtoDB}
      className="relative inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group cursor-pointer"
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
        Generate URL
      </span>
      <span className="relative invisible">Generate URL</span>
    </div>
  );
};
