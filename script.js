const header = document.getElementById('dropdown-header');
const content = document.querySelector('.dropdown-content');
const boxes = document.querySelectorAll('.box');
const firstBox = document.getElementById('dropdown-header');

// Initialize an array to store the selected box names
const selectedBoxNames = [];


let isDropdownOpen = false;

header.addEventListener('click', () => {
    if (!isDropdownOpen) {
        content.style.maxHeight = '0'; // Start with max-height at 0
        setTimeout(() => {
            content.style.maxHeight = content.scrollHeight + 'px'; // Expand to full height after a brief delay
        }, 10);
    } else {
        content.style.maxHeight = '0'; // Collapse immediately
    }
    isDropdownOpen = !isDropdownOpen; // Toggle the state
});



// Function to update the first box's text content based on selected boxes
function updateFirstBoxText() {
    const headerText = document.querySelector('.header-text');
    if (selectedBoxNames.length === 0) {
        headerText.textContent = 'All';
    } else {
        headerText.textContent = selectedBoxNames.join(', ');
    }
}


// Add click event listeners to each menu item
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        // Toggle the background color of the clicked box
        if (box.style.backgroundColor === 'lightblue') {
            box.style.backgroundColor = '#f0f0f0'; // Change back to the original color
            // Remove the box name from the selectedBoxNames array
            const index = selectedBoxNames.indexOf(box.textContent);
            if (index !== -1) {
                selectedBoxNames.splice(index, 1);
            }
        } else {
            box.style.backgroundColor = 'lightblue'; // Change to the desired color
            selectedBoxNames.push(box.textContent); // Add the box name to the selectedBoxNames array
        }

        // Update the text content of the first box
        updateFirstBoxText();
    });
});

// Initialize the first box's text content
updateFirstBoxText();


