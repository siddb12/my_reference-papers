
const papers = [];

function uploadPaper() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (file) {
        const paperName = file.name;
        papers.push(paperName);
        displayPapers();
        fileInput.value = '';  // Clear input after upload
    } else {
        alert('Please select a file to upload.');
    }
}

function displayPapers() {
    const paperList = document.getElementById('papers');
    paperList.innerHTML = '';

    papers.forEach((paper, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${paper}`;
        paperList.appendChild(li);
    });
}
