document.querySelector('.form-control').addEventListener('change', function (e) {
    var name = document.getElementById("fileUpload").files[0].name;
    var recordField = document.getElementById("recordName")

    // remove file extension and set equal to record name field
    recordField.value = name.split('.').slice(0, -1).join('.')
})
