populate("input, select")
setListener("input, select")
addDateCheck();
const otherComplaintBtn = document.querySelector('#presentingCheckR4_9');
const otherComplaintBox = document.querySelector('#other_complaint_area');
checkRadio(otherComplaintBtn.checked, otherComplaintBox)
const toggleOther = () => {
    otherComplaintBox.classList.toggle('input_visibility');
}
otherComplaintBtn.addEventListener('click', toggleOther);





