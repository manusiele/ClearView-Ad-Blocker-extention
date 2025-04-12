<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>ClearView - Overview</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f4f6f8;
      margin: 0;
      padding: 40px;
      color: #2c3e50;
    }
    .container {
      max-width: 900px;
      margin: auto;
      background: #ffffff;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    }
    h1 {
      font-size: 36px;
      text-align: center;
      color: #3498db;
      margin-bottom: 10px;
    }
    p.subtitle {
      text-align: center;
      font-size: 18px;
      color: #7f8c8d;
      margin-bottom: 40px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    ul li {
      margin-bottom: 20px;
      padding-left: 30px;
      position: relative;
      font-size: 18px;
    }
    ul li::before {
      content: "✔️";
      position: absolute;
      left: 0;
      color: #27ae60;
      font-size: 20px;
    }
    .section {
      margin-top: 50px;
    }
    h2 {
      font-size: 28px;
      color: #2c3e50;
      border-bottom: 2px solid #3498db;
      padding-bottom: 8px;
      margin-bottom: 20px;
    }
    .footer {
      text-align: center;
      margin-top: 50px;
      font-size: 14px;
      color: #95a5a6;
    }
    a {
      color: #3498db;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

<div class="container">
  <h1>ClearView</h1>
  <p class="subtitle">A modern, lightweight ad blocker for a distraction-free web experience.</p>

  <div class="section">
    <h2>✨ Features</h2>
    <ul>
      <li>Blocks requests to common ad servers and domains</li>
      <li>Uses CSS to hide ad elements that might still appear</li>
      <li>Displays the total number of ads blocked</li>
      <li>Toggle to enable or disable ad blocking</li>
      <li>Shows the current website you're browsing</li>
      <li>Automatically cleans up empty spaces left by ads</li>
      <li>Clean, modern popup interface</li>
    </ul>
  </div>

  <div class="section">
    <h2>🛠️ Getting Started</h2>
    <ul>
      <li>Clone the repository: <code>git clone https://github.com/your-username/ClearView.git</code></li>
      <li>Open your browser’s extensions page</li>
      <li>Enable Developer Mode</li>
      <li>Load the unpacked ClearView directory</li>
      <li>Start browsing ad-free!</li>
    </ul>
  </div>

  <div class="section">
    <h2>🤝 Contributions</h2>
    <p>We welcome feedback and improvements. If you'd like to modify or enhance ClearView, feel free to open an issue or submit a pull request!</p>
  </div>

  <div class="footer">
    Licensed under the <a href="#">MIT License</a> • Made with ❤️ for a better web
  </div>
</div>

</body>
</html>
