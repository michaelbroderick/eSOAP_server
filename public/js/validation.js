const sections = document.querySelectorAll('section');
const check = '<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="green" class="bi bi-check2-circle" viewBox = "0 0 16 16" ><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" /></svg > '
const exclamation = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="red" class="bi bi-exclamation-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" /></svg>'


const addCheck = (label) => {
    if (localStorage.getItem(label.htmlFor) || label.parentElement.classList.contains('input_visibility')) {
        // console.log(label.htmlFor, localStorage.getItem(label.htmlFor), Boolean(localStorage.getItem(label.htmlFor)))
        label.innerHTML = label.innerText + ' ' + check
        return 1;
    } else {
        label.innerHTML = label.innerText + ' ' + exclamation
        return 0;
    }
}

const updateNav = (section, inputHeadings, count) => {

    let span = document.createElement('span');
    // span.append(Math.floor(count / inputHeadings.length * 100))
    span.append(count)
    span.hidden = true;
    let navLink = document.querySelector(`#${section.id.slice(0, -5) + '_link'}`)
    if (count / inputHeadings.length === 1) {
        navLink.innerHTML = navLink.innerText + ' ' + check;
    }
    else {
        navLink.innerHTML = navLink.innerText + ' ' + exclamation;
    }
    navLink.appendChild(span)

};

const findPercentComplete = () => {
    let fullCount = 0;
    let navLinks = document.querySelectorAll('.forms-links');
    for (navLink of navLinks) {
        fullCount += parseInt(navLink.querySelector('span').innerText);
    }
    document.querySelector('#percentComplete').value = Math.floor(fullCount / document.querySelectorAll('.form-group').length * 100);
}

const completed = (section) => {

    let count = 0;
    const inputHeadings = section.querySelectorAll('.form-group');

    for (let heading of inputHeadings) {
        let label = heading.querySelector('label')

        count += addCheck(label);

        let inputs = heading.querySelectorAll(`[name=${label.htmlFor}]`);
        for (let input of inputs) {

            const checkCheck = () => {
                let step = addCheck(label);
                // let currCount = parseInt(document.querySelector(`#${section.id.slice(0, -5) + '_link'}`).querySelector('span').innerText)
                let currCount = 0;
                for (let h2 of inputHeadings) {
                    if (localStorage.getItem(h2.querySelector('label').htmlFor) || h2.classList.contains('input_visibility')) {
                        currCount += 1;
                    }
                }
                // currCount = currCount - 1 + 2 * step;
                updateNav(section, inputHeadings, currCount);
                findPercentComplete();

            }
            input.addEventListener('change', checkCheck)
            input.addEventListener('keypress', () => {
                label.innerHTML = label.innerText + ' ' + check
            })
        }
    }

    console.log(section.id, count, 'out of', inputHeadings.length)
    updateNav(section, inputHeadings, count);




}

for (section of sections) completed(section);
findPercentComplete();