import { chatHeaderComponent } from "./../components/chatheader.js";
import { chatInputComponent } from "../components/chatinput.js";
export const Groupal = () => {
  const viewGroupal = document.createElement("section");
  viewGroupal.id = "view-groupal";
  const chatHeader = chatHeaderComponent();
  viewGroupal.appendChild(chatHeader);
  const chatContainer = document.createElement("section");
  chatContainer.classList.add("chat-container");
  const groupInfo = document.createElement("section");
  groupInfo.id = "group-info";
  chatContainer.appendChild(groupInfo);
  const chatBody = document.createElement("section");
  chatBody.classList.add("chat-body");
  chatContainer.appendChild(chatBody);
  viewGroupal.appendChild(chatContainer);
  const chatInput = chatInputComponent();
  viewGroupal.appendChild(chatInput);

  return viewGroupal;
};
