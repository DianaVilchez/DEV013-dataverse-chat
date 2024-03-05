export const chatInputComponent = () => {
  const chatInputContainer = document.createElement("section");
  chatInputContainer.id = "chat-input-container";

  chatInputContainer.innerHTML=`
  <input id="chat-input"> 
  <button id = "send-button">
  <img id="arrow" src="./../Imagenes/right.png">
  </button>
  `
 

  return chatInputContainer;
};