document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tile-container button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const sectionId = button.getAttribute("data-section");

      document.querySelectorAll(".collapsible").forEach(sec => sec.classList.remove("show"));
      document.getElementById(sectionId).classList.add("show");
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    });
  });
});

function getResponse() {
  const userInput = document.getElementById("userInput").value.toLowerCase();
  const chatlog = document.getElementById("chatlog");
  let response = "I'm not sure how to answer that yet!";

  if (userInput.includes("hi") || userInput.includes("hello")) {
    response = "Hey there! I’m VarBot — how can I help you with Varad’s portfolio?";
  } else if (userInput.includes("how are you")) {
    response = "I’m doing great and ready to assist you! What would you like to know about Varad?";
  } else if (userInput.includes("good morning")) {
    response = "Good morning! Wishing you a productive day ahead 🌞";
  } else if (userInput.includes("good night")) {
    response = "Good night! Sleep well 😴";
  } else if (userInput.includes("education")) {
    response = "Varad is currently pursuing B.E. in ENTC from Wadia College, Pune. Want details?";
  } else if (userInput.includes("projects")) {
    response = "Varad has worked on hand gesture recognition, e-commerce and more! Click 'Projects' to explore.";
  } else if (userInput.includes("skills")) {
    response = `Varad's skills can be grouped into:<br>
👉 <strong>Machine Learning:</strong> Python, TensorFlow, OpenCV, MediaPipe<br>
👉 <strong>Full Stack:</strong> React.js, Node.js, MongoDB, MySQL<br>
👉 <strong>Java Domain:</strong> Core Java, OOP, Servlets<br><br>Which one would you like to know more about?`;
  } else if (userInput.includes("full stack")) {
    response = `Varad's full-stack skills include React.js, Node.js, MongoDB, MySQL. One of his projects is this portfolio website.`;
  } else if (userInput.includes("machine learning")) {
    response = `His ML skills include Python, TensorFlow, OpenCV, and MediaPipe. A related project is Hand Gesture Recognition.`;
  } else if (userInput.includes("java")) {
    response = `He has a solid foundation in Core Java, OOP, and has certificates in Java programming.`;
  } else if (userInput.includes("certificates")) {
    response = "Click on the Certificates section to view Varad’s achievements!";
  } else if (userInput.includes("about")) {
    response = "Varad is a passionate ENTC student, sports lover, and coding enthusiast. Click 'About Me' to learn more!";
  } else if (userInput.includes("who are you") || userInput.includes("your name")) {
    response = "I’m VarBot 🤖, your smart assistant. I know everything about Varad!";
  } else if (userInput.includes("varad")) {
    response = "Varad is a multi-talented student passionate about building impactful projects. Ask more!";
  } else if (userInput.includes("car rental") || userInput.includes("yaha")) {
    response = `Varad created a full-featured Car Rental Website using PHP, HTML, CSS & JS. You can explore it under the Projects section.`;
  }

  chatlog.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;
  chatlog.innerHTML += `<div><strong>VarBot:</strong> ${response}</div>`;
  chatlog.scrollTop = chatlog.scrollHeight;
  document.getElementById("userInput").value = "";
}
