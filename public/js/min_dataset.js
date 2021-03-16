// const otherComplaintBtn = document.querySelector('#presentingCheckR4_9');
// const otherComplaintBox = document.querySelector('#other_complaint_area');

// checkRadio(otherComplaintBtn.checked, otherComplaintBox)
// const toggleOther = () => {
//     otherComplaintBox.classList.toggle('input_visibility');
// }
// otherComplaintBtn.addEventListener('click', toggleOther);

toggleYesNo("#antibioticsRadio1", "#antibioticsRadio2", "#antibioTimeDiv")

toggleSelect("#presententingcompaintid", "#other_complaint_area", ["Other"])
toggleSelect("#usid", "#usRow", ["Abdomen", "Abdiment and Pelvis-Trans Abdominal/Trans Vaginal", "Breast", "Pelvic Trans Abdominal/Trans Vaginal", "Renal (kidney both)"])
toggleSelect("#ctid", "#ctRow", ["Abdomen", "Abdomen & Pelvis", "CT Angio", "KUB", "TAP", "Thorax", "Urogram"])
toggleSelect("#mriid", "#mriRow", ["Abdomen", "MRCP", "Pelvis"])
toggleSelect("#otherimageid", "#otherimageRow", ["Yes"])

toggleSelect("#usid", "#usbookedDiv", ["Abdomen", "Abdiment and Pelvis-Trans Abdominal/Trans Vaginal", "Breast", "Pelvic Trans Abdominal/Trans Vaginal", "Renal (kidney both)"])
toggleSelect("#usid", "#usperformedDiv", ["Abdomen", "Abdiment and Pelvis-Trans Abdominal/Trans Vaginal", "Breast", "Pelvic Trans Abdominal/Trans Vaginal", "Renal (kidney both)"])
toggleSelect("#usid", "#usreportedDiv", ["Abdomen", "Abdiment and Pelvis-Trans Abdominal/Trans Vaginal", "Breast", "Pelvic Trans Abdominal/Trans Vaginal", "Renal (kidney both)"])

toggleSelect("#ctid", "#ctbookedDiv", ["Abdomen", "Abdomen & Pelvis", "CT Angio", "KUB", "TAP", "Thorax", "Urogram"])
toggleSelect("#ctid", "#ctperformedDiv", ["Abdomen", "Abdomen & Pelvis", "CT Angio", "KUB", "TAP", "Thorax", "Urogram"])
toggleSelect("#ctid", "#ctreportedDiv", ["Abdomen", "Abdomen & Pelvis", "CT Angio", "KUB", "TAP", "Thorax", "Urogram"])

toggleSelect("#mriid", "#mribookedDiv", ["Abdomen", "MRCP", "Pelvis"])
toggleSelect("#mriid", "#mriperformedDiv", ["Abdomen", "MRCP", "Pelvis"])
toggleSelect("#mriid", "#mrireportedDiv", ["Abdomen", "MRCP", "Pelvis"])

toggleSelect("#otherimageid", "#otherimagebookedDiv", ["Yes"])
toggleSelect("#otherimageid", "#otherimageperformedDiv", ["Yes"])
toggleSelect("#otherimageid", "#otherimagereportedDiv", ["Yes"])

const options = document.querySelector('#procedurecategory').options;

for (let i = 1; i < options.length; i++) {
    // console.log(`#${option.value}`)

    toggleSelect("#procedurecategory", `#${options[i].value}`, [options[i].value])
}
