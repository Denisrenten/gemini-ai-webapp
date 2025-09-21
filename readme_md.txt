# 🤖 Gemini AI Web Application

A minimal, responsive web application that uses Google Gemini AI API to answer user questions. Built with vanilla HTML, CSS, JavaScript, and Node.js + Express.

## ✨ Features

- **Clean UI**: Simple, centered layout with responsive design
- **Real-time AI Chat**: Direct integration with Google Gemini AI API
- **Quick Questions**: 6 predefined buttons for common queries
- **Error Handling**: Proper error messages and loading states
- **Mobile Friendly**: Works perfectly on all device sizes

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Google Gemini AI API Key

### 1. Get Your Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key for later use

### 2. Installation
```bash
# Clone or download this project
# Navigate to project directory
cd gemini-ai-webapp

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env and add your API key
GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Run Locally
```bash
# Start the server
npm start

# Or for development
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 📁 Project Structure

```
/
├── public/
│   ├── index.html      # Main HTML file
│   ├── style.css       # Styles and responsive design
│   └── script.js       # Frontend JavaScript
├── server.js           # Express server & Gemini API integration
├── package.json        # Dependencies and scripts
├── .env.example        # Environment variables template
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## 🌐 Deploy to Render

### Method 1: Connect GitHub Repository
1. Push your code to GitHub
2. Visit [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add Environment Variable:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Your actual API key
7. Click "Deploy"

### Method 2: Manual Deploy
1. Create a new Web Service on Render
2. Choose "Deploy from Git repository"
3. Follow the same configuration steps above

Your app will be available at `https://your-app-name.onrender.com`

## 🌐 Deploy to Other Platforms

### Heroku
```bash
# Install Heroku CLI and login
heroku create your-app-name
heroku config:set GEMINI_API_KEY=your_api_key_here
git push heroku main
```

### Railway
1. Connect your GitHub repo to Railway
2. Add `GEMINI_API_KEY` environment variable
3. Deploy automatically

### Vercel (Static + Serverless)
- Requires converting to Vercel's serverless functions format
- Move API logic to `/api` directory

## 🔧 Configuration

### Environment Variables
- `GEMINI_API_KEY`: Your Google Gemini AI API key (required)
- `PORT`: Server port (default: 3000, automatically set by hosting platforms)

### Predefined Questions
The app includes 6 quick-access buttons:
1. "Summarize the importance of AI"
2. "Explain quantum computing simply"
3. "Give me 3 productivity tips"
4. "Translate 'Hello, how are you?' to Spanish"
5. "What are common mistakes in programming?"
6. "Tell me a fun science fact"

You can modify these in `public/index.html`.

## 🛠️ Customization

### Adding New Quick Questions
Edit the `button-grid` section in `public/index.html`:
```html
<button class="quick-btn" onclick="askPredefined('Your question here')">
    🎯 Button Label
</button>
```

### Styling
Modify `public/style.css` to change:
- Colors and gradients
- Layout and spacing
- Fonts and typography
- Mobile responsiveness

### API Integration
The Gemini AI integration is in `server.js`. You can:
- Modify the prompt format
- Add conversation history
- Implement rate limiting
- Add user authentication

## 📋 API Endpoints

### POST `/ask`
Send a question to Gemini AI.

**Request:**
```json
{
  "prompt": "Your question here"
}
```

**Response:**
```json
{
  "response": "AI generated response"
}
```

**Error Response:**
```json
{
  "error": "Error message"
}
```

## 🔍 Troubleshooting

### Common Issues

**1. "Gemini API key not configured"**
- Make sure your `.env` file exists with `GEMINI_API_KEY`
- Restart the server after adding the API key

**2. "Failed to get response from Gemini AI"**
- Check if your API key is valid
- Ensure you have API quota remaining
- Check network connectivity

**3. "Internal server error"**
- Check server logs with `node server.js`
- Verify all dependencies are installed
- Ensure Node.js version is 14+

### Development Mode
For detailed error logs, check the browser console (F12) and server terminal.

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

- Check the [Google AI Documentation](https://ai.google.dev/) for API issues
- Review the server logs for backend errors
- Open an issue for bugs or feature requests

---

**Happy coding! 🚀**