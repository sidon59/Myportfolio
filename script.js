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
        { question: "What skills do you have?", followUp: ["What projects have you worked on?", "What are your notable achievements?"] },
        { question: "What are your notable achievements?", followUp: ["What projects have you worked on?", "How can I contact you?"] },
        { question: "How can I contact you?", followUp: ["Thank you, goodbye!"] }
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
        answer: "My experience includes a role as SRC Head of Academia at IIE Rosebank College and a Java candidate at CAPACITI< view my CV for more.",
        followUp: ["What are your notable achievements?", "Thank you, goodbye!"]
    },
    "What skills do you have?": {
        answer: "I'm skilled in Java, UI/UX design, and responsive web development.",
        followUp: ["What projects have you worked on?", "What are your notable achievements?", "Thank you, goodbye!"]
    },
    "What are your notable achievements?": {
        answer: "My Adroit app won first place in the Applied Information Systems faculty at UJ, i got to be at top12 for the IIE Hackathon and I was a Top 10 finalist in Miss World South Africa .",
        followUp: ["How can I contact you?", "Thank you, goodbye!"]
    },
    "How can I contact you?": {
        answer: "You can contact me via email at xmakhubele83@gmail.com or connect on LinkedIn.",
        followUp: ["Thank you, goodbye!"]
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

