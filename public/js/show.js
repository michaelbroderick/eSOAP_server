let submitCheck = document.querySelector('#submitCheckButton')
try {
    submitCheck.addEventListener('click', () => {
        if (confirm('Patient data is incomplete. Do you wish submit the current data to the registry')) {
            document.querySelector('#submitCheck').href += "&validated=true"
        }

    })
} catch { }
