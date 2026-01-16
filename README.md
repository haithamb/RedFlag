# 🚩 Red Flag Scanner (Open Source Edition)

**Stop agreeing to things you didn't read.**

Red Flag Scanner is a Chrome Extension that uses AI to analyze "Terms of Service" and "Privacy Policy" pages. It highlights dangerous clauses, data-selling schemes, and rights waivers in seconds, so you know exactly what you're signing up for.

![Red Flag Scanner Demo](https://via.placeholder.com/800x400.png?text=Add+Your+Demo+GIF+Here)

## ✨ Features
- **Instant Analysis:** Highlights text and gets a summary in seconds.
- **Red Flag Detection:** Specifically hunts for:
  - 🚩 Data selling to 3rd parties.
  - 🚩 "Perpetual" or "Irrevocable" content licenses.
  - 🚩 Forced arbitration / Waiver of jury trial.
  - 🚩 Hidden tracking (GPS, Microphone, etc.).
- **Privacy First:** Your data goes directly from your browser to OpenAI. No middleman servers.

## 🛠 Installation (Developer Preview)
*Since this is an open-source tool, you will load it into Chrome manually. It takes 2 minutes.*

### Step 1: Download
1. Click the green **Code** button above and select **Download ZIP**.
2. Unzip the file into a folder on your computer.

### Step 2: Configure API Key (Bring Your Own Key)
To keep this tool free and private, it uses **your** personal OpenAI API Key.
1. Open the folder you just unzipped.
2. Open the file `popup.js` in any text editor (Notepad, TextEdit, VS Code).
3. Find the line at the top: `const apiKey = "";`
4. Paste your OpenAI API Key inside the quotes.
   - *Don't have a key? Get one here: [platform.openai.com](https://platform.openai.com)*
5. Save the file.

### Step 3: Load into Chrome
1. Open Google Chrome and type `chrome://extensions` in the address bar.
2. Toggle **Developer mode** on (top right corner switch).
3. Click the **Load unpacked** button (top left).
4. Select the folder containing your files.
5. That's it! The 🚩 icon should appear in your toolbar.

## 🚀 How to Use
1. Go to any website with legal text (e.g., a Terms of Service page).
2. **Highlight** the paragraph you are worried about.
3. Click the **Red Flag Scanner** icon in your browser.
4. Click **SCAN HIGHLIGHTED TEXT**.
5. Read the verdict.

## 🔒 Privacy & Security
- **No Data Storage:** This extension does not save your history or the text you scan.
- **Direct Connection:** The text is sent directly from your browser to OpenAI's API.
- **Open Source:** The code is completely transparent. Feel free to audit `popup.js` to see exactly how your data is handled.

## 🤝 Contributing
Found a bug? Want to add a "Green Flag" feature?
1. Fork this repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes.
4. Open a Pull Request.

## ⚠️ Disclaimer
*This tool uses AI (GPT-4o-mini) to summarize text. AI can make mistakes (hallucinations). This tool is for educational and informational purposes only and does not constitute legal advice. Always read the full document for critical contracts.*

---
*Built with ❤️ for privacy.*
