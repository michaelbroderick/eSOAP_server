// // Old yes/no toggle function
// function toggleYesNo(radio1, radio2, datetime) {
//     const radY = document.querySelector(radio1);
//     const radN = document.querySelector(radio2);
//     const DT = document.querySelector(datetime);


//     const toggleDT = () => {
//         if (radY.checked) {
//             DT.classList.remove('input_visibility')
//         } else {
//             DT.classList.add('input_visibility')
//         }

//     };

//     radY.addEventListener('click', toggleDT);
//     radN.addEventListener('click', toggleDT);

// };

function checkRadio(condition, Div) {
    if (condition) {
        Div.classList.remove("input_visibility")
    }
}

function toggleYesNo(radio1, radio2, datetime) {

    const radY = document.querySelector(radio1);
    const radN = document.querySelector(radio2);
    const DT = document.querySelector(datetime);


    checkRadio(radY.checked, DT)

    const toggleDT = () => {
        if (radY.checked) {
            DT.classList.remove('input_visibility')
        } else {
            DT.classList.add('input_visibility')
        }

    };

    radY.addEventListener('click', toggleDT);
    radN.addEventListener('click', toggleDT);

};

function toggleYesNoND(radio1, radio2, radio3, datetime) {
    const radY = document.querySelector(radio1);
    const radN = document.querySelector(radio2);
    const radND = document.querySelector(radio3);
    const DT = document.querySelector(datetime);

    checkRadio(radY.checked, DT)

    const toggleDT = () => {
        if (radY.checked) {
            DT.classList.remove('input_visibility')
        } else {
            DT.classList.add('input_visibility')
        }

    };

    radY.addEventListener('click', toggleDT);
    radN.addEventListener('click', toggleDT);
    radND.addEventListener('click', toggleDT);

};


function toggleSelect(selectID, hiddenEl, vals) {
    const selectMenu = document.querySelector(selectID);
    const el = document.querySelectorAll(hiddenEl)
    for (item of el) {
        checkRadio(vals.includes(selectMenu.value), item)
    }

    selectMenu.addEventListener('change', () => {

        if (vals.includes(selectMenu.value)) {
            for (item of el) {
                item.classList.remove("input_visibility")
            }
        }
        else {
            for (item of el) {
                item.classList.add("input_visibility")
            }
        }
    })

}


function checkYesNo(radio1, radio2, datetime) {

    const radY = document.querySelector(radio1);
    const radN = document.querySelector(radio2);
    const DT = document.querySelector(datetime);

    if (radY.checked) {
        DT.classList.remove('input_visibility')
    };
};


function checkDate(dt, currDate) {
    //     const dts = document.querySelectorAll("[type='datetime-local'], [type='date']");
    let dateIP = new Date(dt.value);
    if (dateIP > currDate) {
        dt.style.backgroundColor = '#f99'
        dt.style.borderColor = '#ff0e0e'
        dt.style.borderWidth = '3px'
        // could set some value as false
        if (!dt.parentElement.querySelector('span')) {
            const warningMsg = document.createElement('span');
            warningMsg.innerText = "You have entered a date in the future"
            warningMsg.style.color = '#ff0e0e';
            dt.parentElement.append(warningMsg)
        }
    }
    else {
        dt.style.backgroundColor = 'white'
        dt.style.borderColor = ''
        dt.style.borderWidth = ''
        try {
            dt.parentElement.querySelector('span').remove()
        } catch {

        }
    }
}



function addDateCheck() {
    const dts = document.querySelectorAll("[type='datetime-local'], [type='date']");
    const currDate = new Date();
    for (let dt of dts) {
        checkDate(dt, currDate);
        dt.addEventListener('change', function () { checkDate(dt, currDate); }, false)
    }
}

function populateLocalStorage() {

    const hidden = document.querySelector("#hiddenspan");
    let data = JSON.parse(hidden.innerText);
    console.log(data);
    for (let dt in data) {
        //This is very janky and I don't like....
        let d = new Date(data[dt]);
        if (Date.parse(data[dt]) === d.getTime()) {
            let index = (dt === "admissiondate" || dt === "dischargedate") ? 10 : -8;
            localStorage.setItem(dt, data[dt].slice(0, index));
        } else {
            localStorage.setItem(dt, data[dt]);
        }

    }

}

function populate(input_class) {

    const all = document.querySelectorAll(input_class)
    for (let el of all) {
        if (localStorage.getItem(el.name)) {
            if (el.type === 'radio' | el.type === 'checkbox') {
                let checkArray = localStorage.getItem(el.name).split('&')
                if (checkArray.indexOf(el.value) > -1) {
                    el.checked = true;
                }
            } else {
                el.value = localStorage.getItem(el.name);
            }
        }
    }

}

function populateFields(input_class) {
    const fields = document.querySelectorAll(input_class)
    const data = JSON.parse(document.querySelector("#hiddenspan").innerText);
    console.log(data)
    for (let field of fields) {
        if (data[field.name]) {
            if (field.type === 'radio' | field.type === 'checkbox') {
                let checkArray = data[field.name].split('&');
                if (checkArray.indexOf(field.value) > -1) {
                    field.checked = true;
                }
            } else if (field.type === 'date') {
                field.value = data[field.name].slice(0, 10);
            }
            else if (field.type === 'datetime-local') {
                field.value = data[field.name].slice(0, -8);
            }
            else {
                field.value = data[field.name];
            }
        }
    }
}


function setListener(input_class) {

    const all = document.querySelectorAll(input_class)

    for (let el of all) {
        el.addEventListener('change', () => {
            if (el.type === "checkbox") {
                let currVal = (localStorage.getItem(el.name))
                editCheckboxValues(currVal, el)
            } else {
                localStorage.setItem(el.name, el.value);
            }
        })
    }
}

function editCheckboxValues(currVal, el) {
    // Something in there already. Check if we're removing?
    if (currVal) {
        let checkArray = currVal.split('&');
        // if the button is unchecked remove the value from the list
        if (el.checked) {
            checkArray.push(el.value)
        }
        // else add the value to the list
        else {
            checkArray.splice(checkArray.indexOf(el.value), 1)
        }
        // recomine the array into a string again and store
        localStorage.setItem(el.name, checkArray.join('&'))

    } else {//Nothing in there good to go
        localStorage.setItem(el.name, el.value)
    }
}


function hideNxtPrev(nav_arr) {


    let active_link = document.querySelector('.active');
    let active_str = active_link.id.slice(0, -5);
    const next = document.querySelector('#nxt');
    const prev = document.querySelector('#prev');

    if (nav_arr.indexOf(active_str) === 0) {
        prev.classList.add("input_visibility")
        next.classList.remove("input_visibility")
    }
    else if (nav_arr.indexOf(active_str) === nav_arr.length - 1) {
        next.classList.add("input_visibility")
        prev.classList.remove("input_visibility")
    }
    else {
        next.classList.remove("input_visibility")
        prev.classList.remove("input_visibility")
    }
}


function setNavListener(nav_arr) {


    const all = document.querySelectorAll('.forms-links')


    for (let el of all) {

        let str = el.id.slice(0, -5);

        let form_data = document.querySelector(`#${str}_form`);

        el.addEventListener('click', () => {

            if (!el.classList.contains('active')) {

                let active_link = document.querySelector('.active');
                active_link.classList.remove("active");
                let active_str = active_link.id.slice(0, -5);
                let active_form = document.querySelector(`#${active_str}_form`);
                active_form.classList.add("input_visibility")
                form_data.classList.remove("input_visibility")
                el.classList.add("active")
                hideNxtPrev(nav_arr)
            }
        })


    }

}

function setNextListener(nav_arr) {

    const next = document.querySelector('#nxt');
    try {
        next.removeEventListener('click', next._event)
    }
    catch { }
    const sequenceFn = () => {
        //find the active link
        let active_link = document.querySelector('.active');
        console.log(`${active_link.id} is active`)
        active_link.classList.remove("active");
        console.log(`turning off ${active_link.id}`)

        let active_str = active_link.id.slice(0, -5);
        let active_form = document.querySelector(`#${active_str}_form`);
        active_form.classList.add("input_visibility");
        console.log(`turning off ${active_str}`)


        let idx = nav_arr.indexOf(active_str) + 1;
        let new_link = nav_arr[idx];

        document.querySelector(`#${new_link}_form`).classList.remove('input_visibility');
        document.querySelector(`#${new_link}_link`).classList.add('active');
        window.scrollTo(0, 0);
        hideNxtPrev(nav_arr)

    }

    next.addEventListener('click', sequenceFn)
    next._event = sequenceFn;

}
function setPrevListener(nav_arr) {

    const prev = document.querySelector('#prev');
    try {
        prev.removeEventListener('click', prev._event)
    }
    catch { }
    const sequenceFn = () => {
        //find the active link
        let active_link = document.querySelector('.active');
        active_link.classList.remove("active");

        let active_str = active_link.id.slice(0, -5);
        document.querySelector(`#${active_str}_form`).classList.add("input_visibility");


        let idx = nav_arr.indexOf(active_str) - 1;
        let new_link = nav_arr[idx];

        document.querySelector(`#${new_link}_form`).classList.remove('input_visibility');
        document.querySelector(`#${new_link}_link`).classList.add('active');
        window.scrollTo(0, 0);
        hideNxtPrev(nav_arr)

    }
    prev.addEventListener('click', sequenceFn)
    prev._event = sequenceFn;


}

