document.getElementById('scanBtn').addEventListener('click', async () => {
  const outputDiv = document.getElementById('output');
  const scanButton = document.getElementById('scanBtn');
  
  // --- ⚠️ PUT YOUR KEY HERE  ---
  const apiKey = ""; 
  // ----------------------------------

  // 1. Get the text
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => window.getSelection().toString()
  }, async (selection) => {
    
    const textToAnalyze = selection[0].result;
    outputDiv.style.display = "block"; // Show the box

    if (!textToAnalyze) {
      outputDiv.innerHTML = "⚠️ <b>Oops!</b><br>Please highlight the text on the webpage you want me to read.";
      return;
    }

    // 2. Loading State
    scanButton.innerText = "Analyzing...";
    scanButton.disabled = true;
    outputDiv.innerHTML = "👀 <i>Reading the fine print...</i>";

    // 3. Send to AI
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini", 
          messages: [{
            role: "system",
            content: "You are a consumer protection lawyer. Analyze the text. If safe, say '✅ Clean'. If risky, list 3 'Red Flags' using bullet points. Use **bold** for the scary parts."
          }, {
            role: "user",
            content: textToAnalyze
          }]
        })
      });

      const data = await response.json();
      
      if (data.error) {
         outputDiv.innerHTML = "<b>Error:</b> " + data.error.message;
      } else {
         const rawText = data.choices[0].message.content;
         
         // 4. BEAUTIFY THE TEXT (The Magic Formatter)
         // This turns **bold** into real bold, and - lists into real lists
         let cleanHtml = rawText
           .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Fix Bold
           .replace(/- /g, "<li>") // Fix Bullets
           .replace(/\n/g, "<br>"); // Fix Enters
           
         outputDiv.innerHTML = "<b>Verdict:</b><br><ul>" + cleanHtml + "</ul>";
      }

    } catch (error) {
      outputDiv.innerHTML = "Network Error: " + error.message;
    }

    scanButton.innerText = "SCAN HIGHLIGHTED TEXT";
    scanButton.disabled = false;
  });
});