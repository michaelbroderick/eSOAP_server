// // if (localStorage.getItem("moduleid")) {

//     const module = document.querySelector(`#${localStorage.getItem("moduleid")}`);
//     module.querySelector('a').classList.remove('disabled');
//     module.classList.add('form_div_enabled');
//     module.querySelector('img').classList = "hse_red";
//     module.querySelector('h3').style.color = "#b4083a";

// // }
const jsonData = JSON.parse(document.querySelector('#hiddenspan').innerText)
const moduleName = jsonData[0].moduleid;

try {
    const module = document.querySelector(`#${moduleName}`);
    module.querySelector('a').classList.remove('disabled');
    module.classList.add('form_div_enabled');
    module.querySelector('img').classList = "hse_red";
    module.querySelector('h3').style.color = "#b4083a";
}
catch { }


let submitCheck = document.querySelector('#submitCheckButton')
try {
    submitCheck.addEventListener('click', () => {
        if (confirm('Patient data is incomplete. Do you wish submit the current data to the registry')) {
            document.querySelector('#submitCheck').href += "&validated=true"
        }

    })
} catch { }
