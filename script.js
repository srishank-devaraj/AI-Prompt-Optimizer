function optimizePrompt() {

  const prompt = document.getElementById("input").value;
  const category = document.getElementById("category").value;

  let optimizedPrompt = "";

  if (prompt.trim() === "") {
    optimizedPrompt = "Please enter a prompt.";
  }

  else if (category === "Email") {
    optimizedPrompt =
      "Write a professional email about: \"" +
      prompt +
      "\". Keep the tone polite, concise, and clear.";
  }

  else if (category === "Coding") {
    optimizedPrompt =
      "Generate clean, efficient, and well-commented code for: \"" +
      prompt +
      "\".";
  }

  else if (category === "Marketing") {
    optimizedPrompt =
      "Create persuasive marketing content for: \"" +
      prompt +
      "\". Make it engaging and action-oriented.";
  }

  else if (category === "Resume") {
    optimizedPrompt =
      "Improve this resume professionally: \"" +
      prompt +
      "\".";
  }

  else {
    optimizedPrompt =
      "Improve the following prompt for an AI assistant: \"" +
      prompt +
      "\".";
  }

  document.getElementById("output").innerText = optimizedPrompt;
}