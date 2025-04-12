# ClearView Ad Blocker
<div align="center">
<img 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcS1TeH5BlL94qUIq4er3tnGaf1rZMB3uGy4XQ_fslPCAkAxmSCdKnjDRU3iq7mv-0Cg&usqp=CAU" 
  alt="ClearView Logo"  
  style="display: block; margin: 0 auto 30px auto; max-width: 180px; height: 100px; border-radius: 4rem;"
/>
  <h3>A lightweight, powerful ad-blocking extension for a cleaner browsing experience</h3>
  
  ![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
  ![License](https://img.shields.io/badge/license-MIT-green.svg)
  ![Browsers](https://img.shields.io/badge/browsers-Chrome%20%7C%20Firefox%20%7C%20Edge-orange.svg)
</div>

## 🚀 Features
- **Advanced Ad Blocking**: Blocks requests to common ad servers and domains
- **Visual Ad Removal**: Uses CSS to hide ad elements that might still appear
- **Smart Space Recovery**: Automatically cleans up empty spaces left by removed ads
- **Elegant Interface**: Clean, modern popup design that's easy to use

## 📊 Dashboard
ClearView provides an intuitive dashboard that shows:
- Total number of ads blocked in real-time
- Current website you're browsing
- Simple toggle to enable/disable ad blocking
- Performance statistics for your browsing session

## 🔧 Installation
### Chrome
1. Download the latest release from the [Releases page](https://github.com/username/clearview/releases)
2. Go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the downloaded folder

### Firefox
1. Download the latest release from the [Releases page](https://github.com/username/clearview/releases)
2. Go to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on" and select any file in the downloaded folder

### Edge
1. Download the latest release from the [Releases page](https://github.com/username/clearview/releases)
2. Go to `edge://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the downloaded folder

## 🛠️ Development
### Prerequisites
- Modern web browser
- Text editor (VS Code, Sublime Text, etc.)

### Setup
```bash
# Clone the repository
git clone https://github.com/username/clearview.git

# Navigate to the project directory
cd clearview
```

### Development Workflow
This extension is built with vanilla JavaScript, HTML, and CSS. No build steps required!

1. Edit the files in your text editor
2. Load the extension in your browser as described in the Installation section
3. To see changes, click the refresh icon on your extension in the browser's extension management page

### Project Structure
```
clearview/
├── manifest.json        # Extension configuration
├── popup/
│   ├── popup.html       # Extension popup interface
│   ├── popup.css        # Styles for the popup
│   └── popup.js         # Popup functionality
├── scripts/
│   ├── background.js    # Background script for the extension
│   └── content.js       # Content script that runs on web pages
└── icons/
    ├── icon16.svg       # Extension icons
    ├── icon48.svg
    └── icon128.svg
```

## 📝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact
Project Link: [https://github.com/username/clearview](https://github.com/username/clearview)

---
<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/username">Your Name</a></p>
</div>
