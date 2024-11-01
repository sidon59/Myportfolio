// Function to toggle the chat container's visibility
function toggleChat() {
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.classList.toggle("hidden");
 
  //chatContainer.style.display = chatContainer.style.display === "block" ? "none" : "block";
  
  if(!chatContainer.classList.contains("hidden")){
      populateSuggestions(portfolioData["initial"].map(item => item.question));
      console.log("Now its showing");
  } 
}

// Portfolio-related Q&A data
const portfolioData = {
    "initial": [
        { question: "Tell me about yourself", followUp: ["What is your experience?", "What projects have you worked on?"] },
        { question: "What skills do you have?", followUp: ["Tell me about yourself", "What projects have you worked on?"] }
      ],
      "Tell me about yourself": {
        answer: "I am a dedicated professional with expertise in both technology and academics, passionate about creating responsive websites.",
        followUp: ["What is your experience?", "What projects have you worked on?", "Thank you, goodbye!"]
      },
      "What projects have you worked on?": {
        answer: "I've worked on e-commerce websites and a top-rated Adroit application under the Applied Information Systems faculty.",
        followUp: ["What skills do you have?", "What is your experience?", "Thank you, goodbye!"]
      },
      "What is your experience?": {
        answer: "My experience includes a role as SRC Head of Academia at IIE Rosebank College and finalist in Miss World South Africa Top 10.",
        followUp: ["Tell me about yourself", "What skills do you have?", "Thank you, goodbye!"]
      },
      "What skills do you have?": {
        answer: "I'm skilled in Java, UI/UX design, and responsive web development.",
        followUp: ["What projects have you worked on?", "Tell me about yourself", "Thank you, goodbye!"]
      },
      "Thank you, goodbye!": {
        answer: "Thank you for chatting! Feel free to return if you have more questions. Goodbye!",
        followUp: []
      }
    };

   let questionCounter = 0;

  
   // if (chatContainer.style.display === "block") {
     // populateSuggestions("initial"); // Populate suggestions only when chat is opened
   // }
 // }

  // Function to add a message to the chat
  function addMessage(text, className) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = `chatmessage ${className}`;
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);

    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // Function to handle suggestion button clicks and responses
  function handleResponse(question) {
      const response = portfolioData[question];
      addMessage(response.answer, "bot-message");
      populateSuggestions(response.followUp);
    }

    // Function to populate the suggestion buttons in the chat
    function populateSuggestions(suggestionKeys) {
      const suggestionBox = document.getElementById("suggestion-box");
      suggestionBox.innerHTML = ''; // Clear any existing suggestions

      suggestionKeys.forEach(key => {
        const suggestionButton = document.createElement("button");
        suggestionButton.className = "suggestion-button";
        suggestionButton.textContent = key;
        
        // Add an event listener to handle button clicks
        suggestionButton.addEventListener("click", () => {
            questionCounter++;
            handleResponse(key);
        });
        
        suggestionBox.appendChild(suggestionButton);
      });
    }

    // Load initial suggestions when the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", () => {
        const chatIcon = document.getElementById("chat-icon");
        chatIcon.addEventListener("click", toggleChat); // Add event listener to chat icon
       // populateSuggestions(portfolioData["initial"].map(item => item.question)); // Load initial suggestions on page load
      });

