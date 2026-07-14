// DOM Element Selectors
const modal = document.getElementById('contactModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const leadForm = document.getElementById('leadForm');

// Buttons that trigger the modal
const partnerNavBtn = document.getElementById('partnerNavBtn');
const consultHeroBtn = document.getElementById('consultHeroBtn');
const bulkQuoteBtn = document.getElementById('bulkQuoteBtn');
const actionModalButtons = document.querySelectorAll('.action-modal-btn');

// --- MODAL UTILITIES ---

// Open Modal function
function openModal() {
    modal.style.display = 'flex';
}

// Close Modal function
function closeModal() {
    modal.style.display = 'none';
}

// --- EVENT LISTENERS ---

// Attach open event to main CTA buttons
if (partnerNavBtn) partnerNavBtn.addEventListener('click', openModal);
if (consultHeroBtn) consultHeroBtn.addEventListener('click', openModal);
if (bulkQuoteBtn) bulkQuoteBtn.addEventListener('click', openModal);

// Attach open event to all "Add to Contract" table buttons
actionModalButtons.forEach(button => {
    button.addEventListener('click', openModal);
});

// Close modal when clicking the close (X) button
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

// Close modal when user clicks outside the modal layout
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Handle form submission
if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Grab values for potential future integrations
        const fullName = document.getElementById('fullName').value;
        const companyName = document.getElementById('companyName').value;
        const phone = document.getElementById('phone').value;
        const volume = document.getElementById('volume').value;

        // Display professional English success confirmation
        alert(`Thank you, ${fullName}! Your corporate inquiry has been logged for ${companyName}.\n\nOur Noida relations team will reach out to you within 24 business hours.`);
        
        // Clear form and close modal
        leadForm.reset();
        closeModal();
    });
}