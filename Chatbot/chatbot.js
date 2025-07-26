const GEMINI_API_KEY = "AIzaSyCQpFlsxMygV4EiglQG2gIg89hdJp6RwsQ";

function cleanResponse(text) {
  return text
    .replace(/\*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function showTypingIndicator() {
  const typingDiv = document.createElement("div");
  typingDiv.className = "bubble bot typing-indicator";
  typingDiv.id = "typing-indicator";

  const avatar = document.createElement("img");
  avatar.src = "chatbot-avatar.jpg";
  avatar.alt = "Bot Avatar";
  avatar.className = "avatar";
  typingDiv.appendChild(avatar);

  const dotsContainer = document.createElement("span");
  dotsContainer.className = "thinking-dots";
  dotsContainer.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
  typingDiv.appendChild(dotsContainer);

  document.getElementById("messages").appendChild(typingDiv);
  typingDiv.scrollIntoView({ behavior: "smooth" });
}

function hideTypingIndicator() {
  const typingIndicator = document.getElementById("typing-indicator");
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

function getBotReply(msg) {
  msg = msg.toLowerCase().trim();

  // Author & Creator
  if (msg.includes("author") || msg.includes("creator") || msg.includes("developer") || msg.includes("made by") || msg.includes("who created") || msg.includes("built by")) {
    return "👨‍💻 Quiz-App is created by passionate developers in the open-source community! It's maintained by contributors who love coding and education. Feel free to join us on GitHub!";
  }

  // About & Overview
  if (msg.includes("about") || msg.includes("what is") || msg.includes("overview") || msg.includes("describe")) {
    return "🤖 Quiz-App is an open-source, interactive quiz platform built with modern web technologies to help students and professionals learn Computer Science topics through engaging quizzes! It's completely free and community-driven.";
  }

  // Features
  if (msg.includes("features") || msg.includes("what can") || msg.includes("capabilities") || msg.includes("functionality")) {
    return "✨ Key Features: Interactive quizzes, Multiple CS topics, Responsive design, Real-time scoring, Dark/Light themes, Timer support, Mobile-friendly, Open-source, Community-driven, Easy contribution, Progress tracking, Random questions, and Clean UI/UX!";
  }

  // Topics & Subjects
  if (msg.includes("topics") || msg.includes("quizzes") || msg.includes("subjects") || msg.includes("categories") || msg.includes("what topics")) {
    return "📚 Available Topics: Data Structures & Algorithms (DSA), SQL & Database Management, Operating Systems, Computer Networks, Object-Oriented Programming (OOPs), Python Programming, Java Programming, Web Development (HTML/CSS/JS), Git & GitHub, Software Engineering, and many more coming soon!";
  }

  // Tech Stack & Technology
  if (msg.includes("tech stack") || msg.includes("technology") || msg.includes("built with") || msg.includes("programming language") || msg.includes("framework")) {
    return "🧱 Tech Stack: Frontend - React.js, HTML5, CSS3, JavaScript (ES6+), Backend - Node.js with Express, Database - MongoDB, Version Control - Git & GitHub, Deployment - Vercel/Netlify, Styling - CSS3 with modern animations!";
  }

  // Rules & Guidelines
  if (msg.includes("rules") || msg.includes("guidelines") || msg.includes("instructions") || msg.includes("dos") || msg.includes("donts") || msg.includes("how to play")) {
    return "📌 Quiz Rules: Don't refresh during quiz, Complete within time limit (if set), Choose answers carefully - no negative marking unless stated, No skipping questions unless allowed, Submit to view your final score, Retake anytime to improve!";
  }

  // How to Start
  if (msg.includes("how to") && msg.includes("quiz") && (msg.includes("start") || msg.includes("begin") || msg.includes("play") || msg.includes("take"))) {
    return "📝 Getting Started: 1. Choose your favorite CS topic, 2. Click 'Start Quiz' button, 3. Read questions carefully, 4. Select the best answer, 5. Submit to see your score, 6. Challenge yourself with more topics!";
  }

  // Setup & Installation
  if (msg.includes("setup") || msg.includes("install") || msg.includes("run locally") || msg.includes("local development") || msg.includes("clone")) {
    return "🛠️ Local Setup: 1. Fork the repository on GitHub, 2. Clone: git clone [your-fork-url], 3. Install dependencies: npm install, 4. Start development server: npm start, 5. Open http://localhost:3000, 6. Start coding and contributing!";
  }

  // Contribution & Open Source
  if (msg.includes("contribute") || msg.includes("open source") || msg.includes("help") || msg.includes("volunteer") || msg.includes("join project")) {
    return "🤝 How to Contribute: Fork the repo, Create a feature branch, Add new quizzes/features/UI improvements, Test your changes, Push to your fork, Create a Pull Request, Look for 'good first issue' labels for beginners!";
  }

  // Pull Request Process
  if (msg.includes("pull request") || msg.includes("pr") || msg.includes("merge") || msg.includes("github workflow")) {
    return "🔁 PR Process: 1. Fork & clone the repo, 2. Create branch: git checkout -b feature-name, 3. Make awesome changes, 4. Commit: git commit -m 'Add feature', 5. Push: git push origin feature-name, 6. Open PR to main branch with clear description!";
  }

  // Design & UI/UX
  if (msg.includes("design") || msg.includes("ui") || msg.includes("ux") || msg.includes("interface") || msg.includes("styling") || msg.includes("theme")) {
    return "🎨 Design Features: Modern responsive design, Beautiful dark/light themes, Smooth animations, Mobile-first approach, Clean typography, Intuitive navigation, Accessible UI, Custom CSS animations, and delightful user experience!";
  }

  // Mobile & Responsive
  if (msg.includes("mobile") || msg.includes("phone") || msg.includes("tablet") || msg.includes("responsive") || msg.includes("device")) {
    return "📱 Mobile Support: Fully responsive design that works perfectly on smartphones, tablets, laptops, and desktops! Touch-friendly interface, optimized performance, and consistent experience across all devices!";
  }

  // Timer & Scoring
  if (msg.includes("timer") || msg.includes("time") || msg.includes("score") || msg.includes("marking") || msg.includes("points")) {
    return "⏱️ Scoring System: Optional timer for each quiz, No negative marking (encouraging learning), Instant results after submission, Percentage-based scoring, Retake unlimited times, Track your improvement over time!";
  }

  // License & Legal
  if (msg.includes("license") || msg.includes("copyright") || msg.includes("legal") || msg.includes("free") || msg.includes("commercial use")) {
    return "📄 License: MIT License - completely free to use, modify, distribute, and even use commercially! Just give proper attribution. It's truly open-source and community-friendly!";
  }

  // Community & Support
  if (msg.includes("community") || msg.includes("support") || msg.includes("help") || msg.includes("discord") || msg.includes("chat") || msg.includes("discussion")) {
    return "👥 Community: Join our GitHub Discussions, Connect on Discord server, Follow project updates, Get help from maintainers, Share your ideas, Report bugs, and be part of our growing developer community!";
  }

  // Progress & History
  if (msg.includes("progress") || msg.includes("history") || msg.includes("track") || msg.includes("statistics") || msg.includes("analytics")) {
    return "📊 Progress Tracking: Current version shows immediate results after each quiz. Future updates will include detailed analytics, learning progress, topic-wise performance, streak tracking, and personal dashboard!";
  }

  // Feedback & Suggestions
  if (msg.includes("feedback") || msg.includes("suggestion") || msg.includes("idea") || msg.includes("feature request") || msg.includes("bug report")) {
    return "💡 Share Feedback: Open GitHub Issues for bug reports, Use Discussions for feature ideas, Rate the project with stars, Share with friends, Contribute code improvements, and help us make Quiz-App even better!";
  }

  // Reset & Retake
  if (msg.includes("reset") || msg.includes("retake") || msg.includes("restart") || msg.includes("try again") || msg.includes("repeat")) {
    return "🔄 Retaking Quizzes: Simply refresh the page or click the topic again to retake any quiz! No limits on attempts - practice until you master the topic. Each attempt may have different questions!";
  }

  // Questions & Content
  if (msg.includes("questions") || msg.includes("content") || msg.includes("add questions") || msg.includes("quiz content") || msg.includes("database")) {
    return "❓ Question Bank: Curated questions from industry experts, Regularly updated content, Multiple difficulty levels, Real-world scenarios, Latest technology trends, Community-contributed questions, and comprehensive topic coverage!";
  }

  // Performance & Speed
  if (msg.includes("fast") || msg.includes("speed") || msg.includes("performance") || msg.includes("loading") || msg.includes("optimization")) {
    return "⚡ Performance: Lightning-fast loading, Optimized code, Minimal bundle size, Efficient animations, Quick navigation, Instant feedback, Browser-cached resources, and smooth user experience across all devices!";
  }

  // Security & Privacy
  if (msg.includes("security") || msg.includes("privacy") || msg.includes("data") || msg.includes("safe") || msg.includes("personal info")) {
    return "🔒 Privacy & Security: No personal data collection, No user registration required, Secure HTTPS connection, Clean codebase, Regular security updates, and transparent open-source development!";
  }

  // Future Plans
  if (msg.includes("future") || msg.includes("roadmap") || msg.includes("upcoming") || msg.includes("next") || msg.includes("plan")) {
    return "🚀 Future Plans: User accounts & profiles, Advanced analytics, Multiplayer quizzes, Certificate generation, More programming languages, API integrations, Mobile app, AI-powered questions, and much more exciting features!";
  }

  // Learning & Education
  if (msg.includes("learn") || msg.includes("education") || msg.includes("study") || msg.includes("practice") || msg.includes("skill") || msg.includes("knowledge")) {
    return "📖 Learning Benefits: Interactive learning experience, Immediate feedback, Self-paced study, Skill assessment, Knowledge retention, Exam preparation, Interview practice, and fun way to master CS concepts!";
  }

  // Beginner Friendly
  if (msg.includes("beginner") || msg.includes("newbie") || msg.includes("starter") || msg.includes("easy") || msg.includes("simple") || msg.includes("basic")) {
    return "🌟 Beginner-Friendly: Clean and simple interface, Easy navigation, No complex setup required, Helpful tooltips, Progressive difficulty levels, Encouraging feedback, and welcoming community for all skill levels!";
  }

  // Default fallback for Quiz-App queries only
  return "🤔 I didn't understand that Quiz-App question. Try asking about: What is Quiz-App?, Who created it?, What features does it have?, How to contribute?, What topics are available?, How to set it up?, or anything else about the app!";
}

async function getGeminiReply(msg) {
  try {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    const response = await fetch(proxyUrl + apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: msg }] }],
        generationConfig: { maxOutputTokens: 150, temperature: 0.7 },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, ${errorText}`);
    }
    const data = await response.json();
    const rawResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that. Try asking about Quiz-App features!";
    return cleanResponse(rawResponse);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "🤔 I'm having trouble with external queries right now. But I can help you with Quiz-App questions! Try asking about features, setup, or contribution.";
  }
}

function isQuizAppQuery(msg) {
  const quizAppKeywords = [
    'quiz-app', 'quiz app', 'quizapp', 'author', 'creator', 'developer', 'features', 
    'topics', 'subjects', 'categories', 'contribute', 'pull request', 'setup', 
    'install', 'tech stack', 'mobile', 'responsive', 'rules', 'guidelines', 
    'how to start', 'open source', 'license', 'community', 'feedback', 'reset', 
    'retake', 'questions', 'progress', 'timer', 'scoring', 'design', 'ui', 'ux'
  ];
  
  return quizAppKeywords.some(keyword => msg.includes(keyword));
}

async function handleChat() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  displayMessage(message, "user");
  input.value = "";

  showTypingIndicator();

  const lowerMsg = message.toLowerCase();
  
  // Check if it's a Quiz-App related query
  if (isQuizAppQuery(lowerMsg)) {
    const hardcodedReply = getBotReply(lowerMsg);
    setTimeout(() => {
      hideTypingIndicator();
      displayMessage(hardcodedReply, "bot");
    }, 800);
  } else {
    // For general conversational queries, use Gemini API
    try {
      const reply = await getGeminiReply(message);
      setTimeout(() => {
        hideTypingIndicator();
        displayMessage(reply, "bot");
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        hideTypingIndicator();
        displayMessage("🤔 I'm having trouble processing that right now. Feel free to ask me about Quiz-App or try again later!", "bot");
      }, 800);
    }
  }
}

function displayMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `bubble ${sender}`;

  if (sender === "bot") {
    const avatar = document.createElement("img");
    avatar.src = "chatbot-avatar.jpg";
    avatar.alt = "Bot Avatar";
    avatar.className = "avatar";
    msgDiv.appendChild(avatar);
  }

  const textNode = document.createElement("span");
  textNode.textContent = text;
  msgDiv.appendChild(textNode);

  document.getElementById("messages").appendChild(msgDiv);
  msgDiv.scrollIntoView({ behavior: "smooth" });
}

window.onload = function () {
  displayMessage("👋 Hello! I'm QuizzyBot — your intelligent assistant! I can help you with Quiz-App questions (features, setup, contribution) AND answer any general questions you have. What would you like to know?", "bot");
};

function toggleExamples() {
  const ex = document.getElementById("examples");
  ex.style.display = ex.style.display === "none" ? "block" : "none";
}

function fillPrompt(li) {
  document.getElementById("userInput").value = li.textContent;
  handleChat();
}

document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  this.textContent = document.body.classList.contains("dark")
    ? "☀️ Switch to Light Mode"
    : "🌙 Switch to Dark Mode";
});

function clearChat() {
  document.getElementById("messages").innerHTML = "";
  displayMessage("🧠 Chat cleared! Ask me about Quiz-App OR any general questions — I'm here to help with both!", "bot");
}

document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    handleChat();
  }
});