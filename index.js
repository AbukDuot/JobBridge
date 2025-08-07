import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

let client = null;

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  if (client) {
    client.trackTrace({ message: "Homepage accessed" });
  }

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JobBridge | Connecting Talent with Opportunities</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f5f7fa;
      color: #333;
      line-height: 1.6;
    }
    header {
      background: #0078d7;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    header h1 {
      margin: 0;
      font-size: 1.8rem;
    }
    nav a {
      margin: 0 10px;
      text-decoration: none;
      color: white;
      font-weight: bold;
      transition: color 0.3s;
    }
    nav a:hover {
      color: #ffdd57;
    }
    .hero {
      text-align: center;
      padding: 4rem 2rem;
      background: linear-gradient(to right, #0078d7, #00c6ff);
      color: white;
    }
    .hero h2 {
      font-size: 2.8rem;
      margin-bottom: 1rem;
    }
    .hero p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    .search-bar {
      max-width: 600px;
      margin: 0 auto;
      display: flex;
    }
    .search-bar input {
      flex: 1;
      padding: 1rem;
      border: none;
      border-radius: 8px 0 0 8px;
      font-size: 1rem;
    }
    .search-bar button {
      background: #ffdd57;
      color: #333;
      border: none;
      padding: 1rem 1.5rem;
      font-size: 1rem;
      border-radius: 0 8px 8px 0;
      cursor: pointer;
      transition: background 0.3s;
    }
    .search-bar button:hover {
      background: #ffc107;
    }
    .section {
      padding: 3rem 2rem;
      text-align: center;
    }
    .section h2 {
      color: #0078d7;
      margin-bottom: 1.5rem;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
    .card {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }
    .card h3 {
      color: #0078d7;
      margin-bottom: 1rem;
    }
    .card p {
      color: #555;
    }
    .cta {
      background: #0078d7;
      color: white;
      text-align: center;
      padding: 3rem 2rem;
    }
    .cta h2 {
      margin-bottom: 1rem;
    }
    .cta button {
      background: #e9e920ff;
      border: none;
      padding: 1rem 2rem;
      font-size: 1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s;
    }
    .cta button:hover {
      background: #e9e920ff;
    }
    footer {
      background: #222;
      color: #bbb;
      text-align: center;
      padding: 1.5rem;
    }
    footer a {
      color: #e9e920ff;
      text-decoration: none;
      margin: 0 8px;
    }
    footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <header>
    <h1>JobBridge</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">Find Jobs</a>
      <a href="#">Post a Job</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <h2>Connecting Talent with Opportunities</h2>
    <p>Your bridge to a brighter career — where job seekers and employers meet.</p>
    <div class="search-bar">
      <input type="text" placeholder="Search for jobs, companies, or skills..." />
      <button>Search</button>
    </div>
  </section>

  <section class="section">
    <h2>Explore Opportunities</h2>
    <p>Discover thousands of opportunities across industries, tailored to your skills and career goals.</p>
    <div class="cards">
      <div class="card">
        <h3>Technology</h3>
        <p>Find roles in software development, cybersecurity, data science, and more.</p>
      </div>
      <div class="card">
        <h3>Remote Work</h3>
        <p>Work from anywhere in the world with top employers offering remote roles.</p>
      </div>
      <div class="card">
        <h3>Internships</h3>
        <p>Kickstart your career with internships designed to grow your skills and confidence.</p>
      </div>
      <div class="card">
        <h3>Freelance Projects</h3>
        <p>Join exciting freelance projects and build a flexible career on your own terms.</p>
      </div>
    </div>
  </section>

  <section class="cta">
    <h2>Ready to Take the Next Step?</h2>
    <p>Create your profile today and connect with employers looking for talent like you.</p>
    <button>Join JobBridge</button>
  </section>

  <footer>
    <p>© 2025 JobBridge | Designed to connect dreams with opportunities.</p>
    <p>
      <a href="#">Privacy Policy</a> | 
      <a href="#">Terms of Service</a>
    </p>
  </footer>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
  if (client) {
    client.trackEvent({ name: "ServerStarted", properties: { port: PORT } });
  }
});

