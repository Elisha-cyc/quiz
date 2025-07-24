const questions = [
    // Conflict & Anger Management (from CONFLICT RESOLUTION & ANGER MANAGEMENT.pptx)
    {
        question: "What is the core definition of conflict as presented in the material?",
        options: [
            "a) A violent disagreement between two parties.",
            "b) A relationship where two or more parties believe they have incompatible goals.",
            "c) A situation where one party forces their will upon another.",
            "d) An obvious and always negative confrontation."
        ],
        answer: "b) A relationship where two or more parties believe they have incompatible goals."
    },
    {
        question: "Which of the following is NOT listed as a specific type of conflict in the material?",
        options: [
            "a) Task Conflict",
            "b) Environmental Conflict",
            "c) Personality Conflict",
            "d) Value Conflict"
        ],
        answer: "b) Environmental Conflict"
    },
    {
        question: "According to the Thomas-Kilmann Model, which conflict resolution style is both assertive and cooperative, aiming for a win-win solution?",
        options: [
            "a) Competing",
            "b) Avoiding",
            "c) Collaborating",
            "d) Accommodating"
        ],
        answer: "c) Collaborating"
    },
    {
        question: "What is the definition of 'anger' as described in the material?",
        options: [
            "a) Always a destructive emotion.",
            "b) A normal human emotional response often triggered by a real or perceived threat, injustice, or frustration.",
            "c) The same as aggression.",
            "d) A feeling that should always be suppressed."
        ],
        answer: "b) A normal human emotional response often triggered by a real or perceived threat, injustice, or frustration."
    },
    {
        question: "Which of these is a physical cue that indicates someone might be experiencing anger?",
        options: [
            "a) Relaxed muscles",
            "b) Slow, deep breathing",
            "c) Clenched fists or loud voice",
            "d) Increased empathy"
        ],
        answer: "c) Clenched fists or loud voice"
    },
    {
        question: "The material states that anger management aims to reduce what two aspects of anger?",
        options: [
            "a) External triggers and verbal aggression.",
            "b) Emotional feelings and physiological arousal.",
            "c) Frequency of arguments and relationship breakdowns.",
            "d) Negative thoughts and impulsive actions."
        ],
        answer: "b) Emotional feelings and physiological arousal."
    },
    {
        question: "According to the Thomas-Kilmann Model, which dimension of conflict management refers to the extent to which an individual attempts to satisfy his or her own concerns?",
        options: [
            "a) Cooperativeness",
            "b) Empathy",
            "c) Assertiveness",
            "d) Adaptability"
        ],
        answer: "c) Assertiveness"
    },
    {
        question: "Conflict is generally seen as negative, but it can be a positive force for change provided it is...",
        options: [
            "a) Ignored and forgotten.",
            "b) Acknowledged, understood, and transformed.",
            "c) Suppressed quickly.",
            "d) Handled by a third party only."
        ],
        answer: "b) Acknowledged, understood, and transformed."
    },
    {
        question: "Which of the following is a common symptom of conflict mentioned in the material?",
        options: [
            "a) Increased cooperation",
            "b) Self-centredness",
            "c) Enhanced communication",
            "d) Higher productivity"
        ],
        answer: "b) Self-centredness"
    },
    {
        question: "What is the primary difference between anger and aggression as discussed?",
        options: [
            "a) Anger is an action, aggression is a feeling.",
            "b) Anger is always destructive, aggression is constructive.",
            "c) Anger is a feeling, aggression is an action.",
            "d) There is no difference; they are interchangeable."
        ],
        answer: "c) Anger is a feeling, aggression is an action."
    },

    // Addiction (from Addiction Lesson.pdf)
    {
        question: "What is the definition of addiction according to the Cleveland Clinic (2023) in the material?",
        options: [
            "a) A choice to use a substance occasionally.",
            "b) A compulsive need for and use of a habit-forming substance or activity.",
            "c) A temporary craving for something.",
            "d) A condition that only affects physical health."
        ],
        answer: "b) A compulsive need for and use of a habit-forming substance or activity."
    },
    {
        question: "Which of these is a substance-based addiction listed in the document?",
        options: [
            "a) Gambling",
            "b) Video gaming",
            "c) Nicotine",
            "d) Shopping"
        ],
        answer: "c) Nicotine"
    },
    {
        question: "How does a typical hubbly bubbly session compare to a typical cigarette session in terms of smoke inhaled?",
        options: [
            "a) Hubbly bubbly is less harmful than cigarettes.",
            "b) Hubbly bubbly involves inhaling the smoke equivalent to 10 or more cigarettes.",
            "c) Hubbly bubbly involves inhaling the smoke equivalent to 100 or more cigarettes.",
            "d) They are exactly the same."
        ],
        answer: "c) Hubbly bubbly involves inhaling the smoke of 100 or more cigarettes."
    },
    {
        question: "What is 'tolerance' in the context of addiction?",
        options: [
            "a) The ability to resist cravings.",
            "b) Needing more of a substance or behavior to get the same effect.",
            "c) Symptoms experienced when stopping a substance.",
            "d) Acceptance of others' addiction."
        ],
        answer: "b) Needing more of a substance or behavior to get the same effect."
    },
    {
        question: "Which neurotransmitter is primarily responsible for the 'feel-good' sensation associated with addictive substances/behaviors?",
        options: [
            "a) Serotonin",
            "b) Adrenaline",
            "c) Dopamine",
            "d) Endorphin"
        ],
        answer: "c) Dopamine"
    },
    {
        question: "What percentage of vulnerability to a substance use disorder is responsible by genetic factors?",
        options: [
            "a) 10-20%",
            "b) 20-30%",
            "c) 40-60%",
            "d) 70-80%"
        ],
        answer: "c) 40-60%"
    },
    {
        question: "Which of the following is a psychological consequence of addiction mentioned in the material?",
        options: [
            "a) HIV infection",
            "b) Heart damage",
            "c) Stress and anxiety",
            "d) Homelessness"
        ],
        answer: "c) Stress and anxiety"
    },
    {
        question: "What is one type of psychological treatment approach for addiction listed in the document?",
        options: [
            "a) Detox",
            "b) Medication-assisted therapy",
            "c) Cognitive Behavioural Therapy (CBT)",
            "d) Public policy"
        ],
        answer: "c) Cognitive Behavioural Therapy (CBT)"
    },

    // Culture (from Apoh_DTI 1 - prep.pptx and Apoh_dti_2 - prep (1).pptx)
    {
        question: "According to Apoh (2022), to understand what culture is, you first need to understand what?",
        options: [
            "a) Society",
            "b) History",
            "c) Nature",
            "d) Economy"
        ],
        answer: "c) Nature"
    },
    {
        question: "Which of the following is NOT an example of 'natural things' as described in the material?",
        options: [
            "a) Air",
            "b) Rivers",
            "c) Gold",
            "d) Prepared food"
        ],
        answer: "d) Prepared food"
    },
    {
        question: "The definition of culture is described as 'polysemous'. What does this mean?",
        options: [
            "a) It has a single, fixed meaning.",
            "b) It is very old and traditional.",
            "c) It has more than one meaning and means different things to different people.",
            "d) It is constantly changing and undefined."
        ],
        answer: "c) It has more than one meaning and means different things to different people."
    },
    {
        question: "According to Apoh (2020), culture refers to material and behavioural products influenced by what factors?",
        options: [
            "a) Only history and society.",
            "b) Environment, history, politics, education and society.",
            "c) Primarily economics.",
            "d) Individual preferences only."
        ],
        answer: "b) Environment, history, politics, education and society."
    },
    {
        question: "When patterned ways of behavior (habits) are accepted by society, they become what?",
        options: [
            "a) Traditions",
            "b) Norms",
            "c) Laws",
            "d) Heritage"
        ],
        answer: "b) Norms"
    },
    {
        question: "Indigenous knowledge systems are described as collective creative local knowledge based on what?",
        options: [
            "a) Scientific research only.",
            "b) Received ideas, conventions, and traditions.",
            "c) Global trends.",
            "d) Individual inventions."
        ],
        answer: "b) Received ideas, conventions, and traditions."
    },

    // Mindset (from CHANGE TO GROW MINDSET .pptx)
    {
        question: "What is the definition of a 'Mindset' as presented in the material?",
        options: [
            "a) An unchangeable aspect of personality.",
            "b) The established set of attitudes, assumptions, notions, methods held by someone or a group that impacts thought processes and behavior.",
            "c) A temporary feeling about a situation.",
            "d) A purely genetic trait."
        ],
        answer: "b) The established set of attitudes, assumptions, notions, methods held by someone or a group that impacts thought processes and behavior."
    },
    {
        question: "People with a 'Fixed mindset' believe that their abilities...",
        options: [
            "a) Can always improve significantly.",
            "b) Cannot change and they tend to focus on the familiar.",
            "c) Are fluid and adaptable.",
            "d) Are irrelevant to success."
        ],
        answer: "b) Cannot change and they tend to focus on the familiar."
    },
    {
        question: "Which of the following is a benefit of a 'changed mindset'?",
        options: [
            "a) Stagnation",
            "b) Rigidity",
            "c) Personal growth",
            "d) Resistance to new ideas"
        ],
        answer: "c) Personal growth"
    },
    {
        question: "What is a characteristic of individuals with a 'Growth mindset'?",
        options: [
            "a) They avoid challenges.",
            "b) They surrender easily when faced with difficulties.",
            "c) They are open and ready to take on challenges, looking for ways to achieve goals.",
            "d) They believe their intelligence is fixed."
        ],
        answer: "c) They are open and ready to take on challenges, looking for ways to achieve goals."
    },

    // People & Team Development (from NEW People_and_Team_Development_Scenarios.pptx)
    {
        question: "What is the simple definition of a 'work team' according to the material?",
        options: [
            "a) Individuals working independently.",
            "b) People working together to reach a common goal.",
            "c) A group with a single leader.",
            "d) Employees in the same department."
        ],
        answer: "b) People working together to reach a common goal."
    },
    {
        question: "Which type of work team is formed to complete a specific task and then disbands?",
        options: [
            "a) Functional Team",
            "b) Self-managed Team",
            "c) Project Team",
            "d) Task Force"
        ],
        answer: "c) Project Team"
    },
    {
        question: "According to Tuckman's Model, which stage of team development is characterized by conflict over design and disagreements?",
        options: [
            "a) Forming",
            "b) Storming",
            "c) Norming",
            "d) Performing"
        ],
        answer: "b) Storming"
    },
    {
        question: "What is an 'Inter-working Team' designed to do?",
        options: [
            "a) Work only within one department.",
            "b) Temporarily find solutions to a specific issue.",
            "c) Bring different departments together to solve a problem creatively.",
            "d) Operate without a formal boss."
        ],
        answer: "c) Bring different departments together to solve a problem creatively."
    }
];

const questionNumberElement = document.getElementById('question-number');
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const finalResultContainer = document.getElementById('final-result-container');
const finalScoreText = document.getElementById('final-score-text');
const finalFeedbackDetails = document.getElementById('final-feedback-details');
const restartButton = document.getElementById('restart-button');
const timerDisplay = document.getElementById('timer-display');
const timeLeftSpan = document.getElementById('time-left');
const feedbackMessage = document.getElementById('feedback-message');

let currentQuestionIndex = 0;
let userAnswers = questions.map(() => ({ selectedOptionIndex: null, isCorrect: null, timeRanOut: false }));
let timerInterval;
const TIME_PER_QUESTION = 20; // seconds
let timeLeft = TIME_PER_QUESTION;

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = TIME_PER_QUESTION;
    timeLeftSpan.textContent = timeLeft;
    timerDisplay.classList.remove('hidden');
    feedbackMessage.textContent = '';

    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftSpan.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeUp();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function handleTimeUp() {
    userAnswers[currentQuestionIndex].timeRanOut = true;
    disableOptions();
    showAnswerFeedback(null);
    feedbackMessage.textContent = "Time's up!";
    if (currentQuestionIndex === questions.length - 1) {
        setTimeout(submitQuiz, 1500);
    }
}

function loadQuestion() {
    stopTimer();
    enableOptions();
    feedbackMessage.textContent = '';
    feedbackMessage.classList.remove('text-green-700', 'text-red-700');

    const question = questions[currentQuestionIndex];
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    questionTextElement.textContent = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button', 'w-full', 'p-3', 'text-left', 'bg-gray-100', 'hover:bg-blue-100', 'rounded-md', 'border', 'border-gray-200', 'transition', 'duration-200', 'ease-in-out', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500');
        button.dataset.optionIndex = index;

        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });

    if (userAnswers[currentQuestionIndex].selectedOptionIndex !== null || userAnswers[currentQuestionIndex].timeRanOut) {
        showAnswerFeedback(userAnswers[currentQuestionIndex].selectedOptionIndex);
        disableOptions();
        timerDisplay.classList.add('hidden');
    } else {
        startTimer();
    }

    updateNavigationButtons();
}

function selectOption(optionIndex) {
    stopTimer();

    userAnswers[currentQuestionIndex].selectedOptionIndex = optionIndex;
    const isCorrect = (questions[currentQuestionIndex].options[optionIndex] === questions[currentQuestionIndex].answer);
    userAnswers[currentQuestionIndex].isCorrect = isCorrect;

    disableOptions();
    showAnswerFeedback(optionIndex);
}

function disableOptions() {
    document.querySelectorAll('.option-button').forEach(button => {
        button.disabled = true;
    });
}

function enableOptions() {
    document.querySelectorAll('.option-button').forEach(button => {
        button.disabled = false;
        button.classList.remove('selected', 'correct', 'incorrect');
    });
}

function showAnswerFeedback(selectedOptionIndex) {
    const question = questions[currentQuestionIndex];
    const correctOptionIndex = question.options.indexOf(question.answer);
    const buttons = document.querySelectorAll('.option-button');

    buttons.forEach((button, index) => {
        if (index === correctOptionIndex) {
            button.classList.add('correct');
        }

        if (selectedOptionIndex !== null && index === selectedOptionIndex) {
            if (index === correctOptionIndex) {
                button.classList.add('correct');
                feedbackMessage.textContent = "Correct!";
                feedbackMessage.classList.add('text-green-700');
                feedbackMessage.classList.remove('text-red-700');
            } else {
                button.classList.add('incorrect');
                feedbackMessage.textContent = "Incorrect. The correct answer is highlighted.";
                feedbackMessage.classList.add('text-red-700');
                feedbackMessage.classList.remove('text-green-700');
            }
        }
    });

    if (selectedOptionIndex === null && userAnswers[currentQuestionIndex].timeRanOut) {
        buttons[correctOptionIndex].classList.add('correct');
        feedbackMessage.textContent = "Time's up! The correct answer is highlighted.";
        feedbackMessage.classList.add('text-red-700');
        feedbackMessage.classList.remove('text-green-700');
    }
}

function updateNavigationButtons() {
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.classList.add('hidden');
        submitButton.classList.remove('hidden');
    } else {
        nextButton.classList.remove('hidden');
        submitButton.classList.add('hidden');
    }
}

function showNextQuestion() {
    if (userAnswers[currentQuestionIndex].selectedOptionIndex !== null || userAnswers[currentQuestionIndex].timeRanOut) {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            submitQuiz();
        }
    } else {
        feedbackMessage.textContent = "Please select an answer or wait for the timer to expire.";
        feedbackMessage.classList.add('text-red-700');
    }
}

function submitQuiz() {
    stopTimer();
    timerDisplay.classList.add('hidden');

    let score = 0;
    finalFeedbackDetails.innerHTML = '';

    questions.forEach((question, index) => {
        const userAnswerData = userAnswers[index];
        const userAnswerText = userAnswerData.selectedOptionIndex !== null ?
                               question.options[userAnswerData.selectedOptionIndex] :
                               (userAnswerData.timeRanOut ? "Time ran out (No answer selected)" : "No answer selected");

        const correctAnswerText = question.answer;
        const isCorrect = userAnswerData.isCorrect;

        if (isCorrect) {
            score++;
        }

        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('p-4', 'rounded-lg', isCorrect ? 'bg-green-100' : 'bg-red-100', 'border', isCorrect ? 'border-green-300' : 'border-red-300');
        feedbackItem.innerHTML = `
            <p class="font-semibold text-gray-800">${index + 1}. ${question.question}</p>
            <p class="${isCorrect ? 'text-green-700' : 'text-red-700'} mt-1">Your Answer: ${userAnswerText} ${isCorrect ? ' (Correct)' : ' (Incorrect)'}</p>
            <p class="text-blue-700">Correct Answer: ${correctAnswerText}</p>
        `;
        finalFeedbackDetails.appendChild(feedbackItem);
    });

    finalScoreText.textContent = `You scored ${score} out of ${questions.length}!`;
    finalResultContainer.classList.remove('hidden');
    document.getElementById('question-display').classList.add('hidden');
    nextButton.classList.add('hidden');
    submitButton.classList.add('hidden');
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = questions.map(() => ({ selectedOptionIndex: null, isCorrect: null, timeRanOut: false }));
    finalResultContainer.classList.add('hidden');
    document.getElementById('question-display').classList.remove('hidden');
    feedbackMessage.textContent = '';
    feedbackMessage.classList.remove('text-green-700', 'text-red-700');
    loadQuestion();
}

// Event Listeners
nextButton.addEventListener('click', showNextQuestion);
submitButton.addEventListener('click', submitQuiz);
restartButton.addEventListener('click', restartQuiz);

// Initial load
loadQuestion();