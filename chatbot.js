// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatbotClose = document.getElementById('chatbot-close');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSend = document.getElementById('chatbot-send');
  const chatbotMessages = document.getElementById('chatbot-messages');

  // Toggle chatbot window
  chatbotToggle.addEventListener('click', function() {
    chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
  });

  // Close chatbot window
  chatbotClose.addEventListener('click', function() {
    chatbotWindow.style.display = 'none';
  });

  // Send message on button click
  chatbotSend.addEventListener('click', sendMessage);

  // Send message on Enter key
  chatbotInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  // Initial greeting
  setTimeout(() => {
    addMessage("Hello! I'm your Netflix AI Assistant. How can I help you today? 🎬", 'bot');
  }, 1000);

  function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message === '') return;

    // Add user message
    addMessage(message, 'user');
    chatbotInput.value = '';

    // Show typing indicator
    showTypingIndicator();

    // Simulate bot response delay
    setTimeout(() => {
      hideTypingIndicator();
      const response = getBotResponse(message);
      addMessage(response, 'bot');
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  }

  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.id = 'typing-indicator';
    indicator.innerHTML = '<span></span><span></span><span></span>';
    chatbotMessages.appendChild(indicator);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function hideTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
      indicator.remove();
    }
  }

  function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();

    // FAQ responses
    if (lowerMessage.includes('what is netflix') || lowerMessage.includes('netflix what')) {
      return "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single commercial – all for one low monthly price.";
    }

    if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('how much')) {
      return "Netflix plans start from ₹149 to ₹649 a month. You can watch on your phone, tablet, TV, laptop, and more. No extra costs, no contracts.";
    }

    if (lowerMessage.includes('watch') || lowerMessage.includes('where can i')) {
      return "You can watch Netflix anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.";
    }

    if (lowerMessage.includes('kids') || lowerMessage.includes('children')) {
      return "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.";
    }

    if (lowerMessage.includes('cancel') || lowerMessage.includes('stop')) {
      return "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";
    }

    if (lowerMessage.includes('download') || lowerMessage.includes('offline')) {
      return "Yes! Download your shows to watch offline. Save your favorites easily and always have something to watch, even when you're on the go.";
    }

    if (lowerMessage.includes('devices') || lowerMessage.includes('tv') || lowerMessage.includes('phone')) {
      return "Watch Netflix on any internet-connected device that offers the Netflix app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch Netflix on your computer using an internet browser.";
    }

    if (lowerMessage.includes('quality') || lowerMessage.includes('hd') || lowerMessage.includes('4k')) {
      return "Netflix offers a variety of video qualities, including HD and Ultra HD (4K) where available. The quality you get depends on your plan and the device you're using.";
    }

    if (lowerMessage.includes('profiles') || lowerMessage.includes('account')) {
      return "You can create up to 5 individual profiles within a single Netflix account. Each profile has its own personalized recommendations, watch history, and settings.";
    }

    if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return "I'm here to help! You can ask me about Netflix plans, features, how to watch, or anything else related to Netflix. For account-specific issues, visit the Help Center.";
    }

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hi there! Welcome to Netflix. How can I assist you today?";
    }

    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return "Goodbye! Enjoy watching Netflix! 🍿";
    }

    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! Happy streaming! 🎥";
    }

    // Default responses
    const defaultResponses = [
      "I'm not sure about that. Can you ask me something about Netflix plans, features, or how to watch?",
      "That's an interesting question! For Netflix-related queries, I can help with information about our service, plans, and features.",
      "I specialize in Netflix information. Try asking about our pricing, what you can watch, or how to get started!",
      "Let me help you with Netflix! Ask me about plans, devices, offline viewing, or any other Netflix features."
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }
});
