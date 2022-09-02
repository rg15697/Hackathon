import React from "react";

const ChatBot = () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      console.log(e)
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });

  const utterances = [
    ["how are you", "how is life", "how are things"],
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"], //3
    ["who are you", "are you human", "are you bot", "are you human or bot"],
  ];

  const answers = [
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?",
    ], //0
    ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually",
    ],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
  ];

  const alternatives = [
    "Go on...",
    "Try again",
    "Sorry we couldn't find what you're looking for",
  ];

  function compare(utterancesArray, answersArray, string) {
    let item;
    for (let x = 0; x < utterancesArray.length; x++) {
      for (let y = 0; y < utterancesArray[x].length; y++) {
        if (utterancesArray[x][y] === string) {
          let items = answersArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  }

  function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
      .replace(/ a /g, " ")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "");

    if (compare(utterances, answers, text)) {
      product = compare(utterances, answers, text);
    } else {
      product = alternatives[Math.floor(Math.random() * alternatives.length)];
    }

    addChatEntry(input, product);
  }

  function addChatEntry(input, product) {
    const messagesContainer = document.getElementById("messages");

    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `${input}`;
    messagesContainer.appendChild(userDiv);

    let botDiv = document.createElement("div");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    messagesContainer.appendChild(botDiv);

    setTimeout(() => {
      botText.innerText = `${product}`;
    }, 2000);
  }

  return (
    <div>
      <div>
        {/* code for chatBot functionality  */}
        <div>
          <input
            id="input"
            type="text"
            placeholder="Write something..."
            autocomplete="off"
            autofocus="true"
          />
          <div id="messages"></div>
        </div>

        {/* code for chatbot UI  */}
      </div>
    </div>
  );
};

export default ChatBot;
