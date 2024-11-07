import "./App.css";
import chopURLbg from "./images/chopURLbg.jpg";
import { URLForm } from "./components/Form";
import React, { useEffect } from "react";
import { successResponse_DOM } from "./utils";

const mainAPICall = async () => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const currentTab = tabs[0];
  if (currentTab && currentTab.url) {
    document.getElementById("urlEntered").value = currentTab.url;
    // const urlData = {
    //   url: currentTab.url,
    // };
    // const response = await fetch(
    //   `${import.meta.env.VITE_BACKEND_API}v1/api/generate`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(urlData),
    //   }
    // );
    // if (response) {
    //   const responseData = await response.json();
    //   if (responseData.type === "Success") {
    //     successResponse_DOM();
    //     document.getElementById("inputBox").value =
    //       import.meta.env.VITE_BACKEND_API + responseData.shortUrl;
    //   }
    // }
  }
};

function App() {
  useEffect(() => {
    mainAPICall();
  }, []);
  return (
    <div
      className="bg-cover h-screen p-5"
      style={{ backgroundImage: `url(${chopURLbg})` }}
    >
      <URLForm />
    </div>
  );
}

export default App;
