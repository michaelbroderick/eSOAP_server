populate("input, select");
setListener("input, select");
addDateCheck();

const options = document.querySelector('#procedurecategory').options;

for (let i = 1; i < options.length; i++) {
    // console.log(`#${option.value}`)

    toggleSelect("#procedurecategory", `#${options[i].value}`, [options[i].value])
}

// toggleSelect('#procedurecategory', '#appendectomy', ['appendectomy'])