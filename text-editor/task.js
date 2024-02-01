let editor = document.getElementById('editor');
function addLocal() {localStorage.text = editor.value;}
function saveLocal() {localStorage.text === undefined ? localStorage.text = '' : editor.value = localStorage.text;}
saveLocal();
document.addEventListener('keyup', addLocal);