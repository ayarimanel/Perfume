const questions = [
    {
        id: 1,
        text: "How would you describe your ideal morning?",
        image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        options: ["Energetic workout session", "Peaceful meditation", "Creative activities", "Nature walk"]
    },
    {
        id: 2,
        text: "What's your favorite season?",
        image: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        options: ["Spring", "Summer", "Fall", "Winter"]
    },
    {
        id: 3,
        text: "Pick your ideal vacation destination:",
        image: "https://images.unsplash.com/photo-1570696657911-287e234bb781?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        options: ["Tropical beach", "Mountain retreat", "Historic city", "Countryside cottage"]
    },
    {
        id: 4,
        text: "Which texture appeals to you most?",
        image: "https://images.unsplash.com/photo-1639654803583-7c616d7e0b6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        options: ["Soft velvet", "Smooth silk", "Natural cotton", "Crisp linen"]
    },
    {
        id: 5,
        text: "Choose your preferred ambiance:",
        image: "https://images.unsplash.com/photo-1683295550273-a1261bb78a2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        options: ["Cozy café", "Luxurious spa", "Garden party", "Beach sunset"]
    },
    {
        id: 6,
        text: "What's your favorite type of flower?",
        image: "https://images.unsplash.com/photo-1732104990067-fa6bd59ed04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        options: ["Rose", "Jasmine", "Lavender", "Cherry blossom"]
    },
    {
        id: 7,
        text: "Pick your ideal weekend activity:",
        image: "https://images.unsplash.com/photo-1599488394810-ed1fea1b9c74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
        options: ["Reading a book", "Outdoor adventure", "Social gathering", "Creative project"]
    },
    {
        id: 8,
        text: "Which color speaks to you?",
        image: "https://images.unsplash.com/photo-1719146349181-96062b0a6f2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&q=80&w=800",
        options: ["Soft pink", "Deep purple", "Fresh green", "Ocean blue"]
    },
    {
        id: 9,
        text: "Choose your preferred dessert:",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800",
        options: ["Vanilla cake", "Dark chocolate", "Fruit tart", "Caramel"]
    },
    {
        id: 10,
        text: "What's your ideal evening routine?",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
        options: ["Relaxing bath", "Gentle yoga", "Movie night", "Stargazing"]
    }
];

const personalityScents = [
    {
        type: "✧ Romantic Dreamer ✧",
        notes: ["🌹 Rose", "🍶 Vanilla", "🌸 Jasmine"],
        description: "A delicate blend that embodies romance and elegance."
    },
    {
        type: "✧ Free Spirit ✧",
        notes: ["🍊 Citrus", "🌊 Sea Salt", "☁️ White Musk"],
        description: "Fresh and energetic scents that capture freedom and adventure."
    },
    {
        type: "✧ Sophisticated Soul ✧",
        notes: ["🌳 Oud", "✨ Amber", "🪵 Sandalwood"],
        description: "Rich and complex notes that exude confidence and refinement."
    },
    {
        type: "✧ Nature Lover ✧",
        notes: ["💜 Lavender", "🍃 Green Tea", "🌲 Cedar"],
        description: "Pure and natural fragrances that connect with the earth."
    }
];

let currentQuestion = 0;
let answers = [];

function updateQuestion() {
    const question = questions[currentQuestion];
    
    // Update progress
    document.querySelector('.progress-text').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.querySelector('.progress-fill').style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    
    // Update question content
    document.getElementById('question-image').src = question.image;
    document.getElementById('question-text').textContent = question.text;
    
    // Update options
    const optionsContainer = document.querySelector('.options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        button.onclick = () => handleAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(answer) {
    answers.push(answer);
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const result = personalityScents[Math.floor(Math.random() * personalityScents.length)];
    
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    
    document.querySelector('.result-type').textContent = result.type;
    document.querySelector('.result-description').textContent = result.description;
    
    const notesList = document.querySelector('.notes-list');
    notesList.innerHTML = result.notes.map(note => `<li>${note}</li>`).join('');
}

function resetQuiz() {
    currentQuestion = 0;
    answers = [];
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    updateQuestion();
}

// Initialize quiz
document.querySelector('.retry-button').onclick = resetQuiz;
updateQuestion();