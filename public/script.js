const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage("user", userMessage);
  input.value = "";

  // Show a more advanced thinking indicator
  const thinkingMsgContainer = document.createElement("div");
  thinkingMsgContainer.classList.add("message", "bot");
  thinkingMsgContainer.innerHTML = `<span>Gemini is thinking</span><span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>`;
  chatBox.appendChild(thinkingMsgContainer);
  chatBox.scrollTop = chatBox.scrollHeight;
  const thinkingMsg = thinkingMsgContainer; // Reference to the element to update

  try {
    // Create a promise for the fetch request
    const fetchPromise = fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    // Create a promise that resolves after 1 second to ensure the thinking indicator is visible
    const delayPromise = new Promise((resolve) => setTimeout(resolve, 1000));

    // Wait for both the fetch and the minimum delay to complete
    const [response] = await Promise.all([fetchPromise, delayPromise]);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    // Convert Markdown response to HTML and update the thinking message
    // Use marked.parse() to convert Markdown to HTML
    thinkingMsg.innerHTML = marked.parse(data.response);
  } catch (error) {
    console.error("Error fetching AI response:", error);
    // Update the thinking message with an error
    thinkingMsg.innerHTML = `Error: ${error.message}. Please check server logs.`; // Use innerHTML for error message too
  } finally {
    // Ensure the chatbox scrolls to the bottom after response/error
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg; // Return the message element
}
