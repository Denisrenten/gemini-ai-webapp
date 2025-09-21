// DOM elements
const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const responseArea = document.getElementById('responseArea');

// Enter key support
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        askQuestion();
    }
});

// Main function to ask questions
async function askQuestion() {
    const question = userInput.value.trim();
    
    if (!question) {
        alert('Please enter a question!');
        return;
    }
    
    await sendToAPI(question);
    userInput.value = '';
}

// Function for predefined questions
async function askPredefined(question) {
    await sendToAPI(question);
}

// Send request to backend API
async function sendToAPI(prompt) {
    // Show loading state
    setLoading(true);
    responseArea.innerHTML = '<p class="loading">🤔 Thinking... Please wait</p>';
    
    try {
        const response = await fetch('/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            displayResponse(data.response);
        } else {
            displayError(data.error || 'Failed to get response');
        }
        
    } catch (error) {
        console.error('Error:', error);
        displayError('Network error. Please try again.');
    } finally {
        setLoading(false);
    }
}

// Display AI response with simple markdown formatting
function displayResponse(response) {
    // Convert simple markdown to HTML
    const formattedResponse = formatSimpleMarkdown(response);
    
    responseArea.innerHTML = `
        <div class="response-text">${formattedResponse}</div>
    `;
}

// Simple markdown formatter - only **bold**, *italic*, and numbered lists
function formatSimpleMarkdown(text) {
    return text
        // Convert **bold** to <strong>bold</strong>
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Convert *italic* to <em>italic</em> (but not if it's part of **)
        .replace(/(?<!\*)\*([^*\n]+?)\*(?!\*)/g, '<em>$1</em>')
        // Convert numbered lists 1) 2) 3) to proper HTML
        .replace(/^(\d+)\)\s(.+)$/gm, '<div class="numbered-item"><strong>$1)</strong> $2</div>')
        // Convert line breaks to <br>
        .replace(/\n\n/g, '<br><br>')
        .replace(/\n/g, '<br>');
}

// Display error message
function displayError(error) {
    responseArea.innerHTML = `
        <div class="error">
            <strong>❌ Error:</strong> ${error}
        </div>
    `;
}

// Set loading state
function setLoading(isLoading) {
    submitBtn.disabled = isLoading;
    submitBtn.textContent = isLoading ? 'Sending...' : 'Submit';
    
    // Disable quick buttons during loading
    const quickBtns = document.querySelectorAll('.quick-btn');
    quickBtns.forEach(btn => {
        btn.disabled = isLoading;
        btn.style.opacity = isLoading ? '0.6' : '1';
    });
}