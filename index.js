document.querySelector('#file-input').addEventListener('change', onFileUpload, false)

function onFileUpload(event) {
    const file = event.target.files[0]
    console.log(file) // File Object, not data

    // use FileReader to read data
    const reader = new FileReader()

    reader.onload = function (ev) {
        // two way to get data
        console.log(ev.target.result)
        console.log(reader.result)
    }

    reader.readAsText(file)
}
