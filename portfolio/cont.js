// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGP48B9KMez4wlcPXaVuhO2GJZeihLKJg",
  authDomain: "shreyakhannaportfolio.firebaseapp.com",
  projectId: "shreyakhannaportfolio",
  storageBucket: "shreyakhannaportfolio.appspot.com",
  messagingSenderId: "106942958508",
  appId: "1:106942958508:web:fcc49fde2e57644515c809",
  measurementId: "G-VJV2C319BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

// Get form elements
const contactForm = document.getElementById("contactForm");
const submitButton = contactForm.querySelector("button[type='submit']");

// Track if a request is in progress
let isSubmitting = false;

// Contact Form Submission
contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (isSubmitting) return;
    isSubmitting = true;

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic form validation
    if (!name || !email || !message) {
        alert("Please fill out all fields!");
        isSubmitting = false; // Allow retry
        return;
    }

    // Email format validation (regex)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        isSubmitting = false; // Allow retry
        return;
    }

    // Message length validation
    if (message.length > 500) {
        alert("Message should not exceed 500 characters.");
        isSubmitting = false; // Allow retry
        return;
    }

    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.innerText = "Sending...";

    try {
        // Send data to Firestore
        await addDoc(collection(db, "messages"), { 
            name, 
            email, 
            message, 
            timestamp: new Date() 
        });
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
    } catch (error) {
        console.error("Error sending message: ", error);
        alert("Error sending message. Please try again.");
    } finally {
        // Re-enable submit button and reset submission state
        submitButton.disabled = false;
        submitButton.innerText = "Send Message";
        isSubmitting = false;
    }
});
