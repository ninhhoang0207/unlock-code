console.log("Index.js is running...");
const baseCode = 25051994;

var softwareId = document.getElementById('software-id');
var unlockCode = document.getElementById('unlock-code');

var btnGetCode = document.getElementById('btn-get-code');
var btnReset = document.getElementById('btn-reset');

btnGetCode.addEventListener('click', function() {
    let softwareIdValue = parseInt(softwareId.value);
    unlockCode.value = baseCode - softwareIdValue;
});

btnReset.addEventListener('click', function() {
    softwareId.value = '';
    unlockCode.value = '';
});