document.getElementById('readFileBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const fileContent = event.target.result;
            document.getElementById('fileContent').innerText = fileContent;
        };
        
        reader.readAsText(file);
    } else {
        alert('Please select a text file to read.');
    }
});
