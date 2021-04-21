// const otherComplaintBtn = document.querySelector('#presentingCheckR4_9');
// const otherComplaintBox = document.querySelector('#other_complaint_area');

// checkRadio(otherComplaintBtn.checked, otherComplaintBox)
// const toggleOther = () => {
//     otherComplaintBox.classList.toggle('input_visibility');
// }
// otherComplaintBtn.addEventListener('click', toggleOther);

toggleYesNoND("#antibioticsRadio1", "#antibioticsRadio2", "#antibioticsRadio3", "#antibioFullDiv")
toggleYesNoND("#antibioticsRadio1", "#antibioticsRadio2", "#antibioticsRadio3", "#antibioTimeDiv")
toggleYesNoND("#ercpRadio1", "#ercpRadio2", "#ercpRadio3", "#ercp_finding_area")

//toggleSelect("#presententingcompaintid", "#other_complaint_area", ["Other"])
toggleChecked("#presentingCheckR4_9", "#other_complaint_area", ["Other"])


toggleCheckedOff("#registeredtimend", "#regtimediv", ["ND"])
toggleCheckedOff("#triagetimend", "#triagetimediv", ["ND"])
toggleCheckedOff("#timereferrednd", "#timereferreddiv", ["ND"])
toggleCheckedOff("#timeseennd", "#timeseendiv", ["ND"])
toggleCheckedOff("#bloodcollectednd", "#bloodcollectedDiv", ["ND"])
toggleCheckedOff("#dispositiondatetimend", "#moveTimeDiv", ["ND"])
toggleCheckedOff("#antibioticsrecordedtimend", "#antibioTimeDiv", ["ND"])


toggleCheckedOff("#daterecwatersolubleagentnd", "#contrastAgentDiv", ["ND"])
toggleChecked("#daterecwatersolubleagentnd", "#contrastAgenth5", ["ND"])
toggleChecked("#usbookeddatetimend", "#usbookedh5", ["ND"])
toggleChecked("#usperformeddatetimend", "#usperformedh5", ["ND"])
toggleChecked("#usreporteddatetimend", "#usreportedh5", ["ND"])
toggleChecked("#ctbookeddatetimend", "#ctbookedh5", ["ND"])
toggleChecked("#ctperformeddatetimend", "#ctperformedh5", ["ND"])
toggleChecked("#ctreporteddatetimend", "#ctreportedh5", ["ND"])
toggleChecked("#mribookeddatetimend", "#mribookedh5", ["ND"])
toggleChecked("#mriperformeddatetimend", "#mriperformedh5", ["ND"])
toggleChecked("#mrireporteddatetimend", "#mrireportedh5", ["ND"])
toggleChecked("#otherimagebookeddatetimend", "#otherimagebookedh5", ["ND"])
toggleChecked("#otherimageperformeddatetimend", "#otherimageperformedh5", ["ND"])
toggleChecked("#otherimagereporteddatetimend", "#otherimagereportedh5", ["ND"])
toggleChecked("#dispositiondatetimend", "#moveTimeh5", ["ND"])
toggleChecked("#antibioticsrecordedtimend", "#antibioTimeh5", ["ND"])




toggleSelect("#usid", "#transAV", ["Abdomen", "Abdomen and Pelvis", "Breast", "Pelvis", "Renal (kidney both)"])


toggleSelect("#usid", "#usRow", ["Abdomen", "Abdomen and Pelvis", "Breast", "Pelvis", "Renal (kidney both)"])
toggleSelect("#ctid", "#ctRow", ["Abdomen", "Abdomen & Pelvis", "CT Angio", "KUB", "TAP", "Thorax", "Urogram"])
toggleSelect("#mriid", "#mriRow", ["Abdomen", "MRCP", "Pelvis"])
toggleSelect("#otherimageid", "#otherimageRow", ["Yes"])
toggleSelect("#cxrrequested", "#cxrFullDiv", ["Yes"])
toggleSelect("#cxrrequested", "#cxrDiv", ["Yes"])
toggleSelect("#pfarequested", "#pfaFullDiv", ["Yes"])
toggleSelect("#pfarequested", "#pfaDiv", ["Yes"])

toggleSelect("#otherimageid", "#otherImgText", ["Yes"])


toggleSelect("#usid", "#usbookedDiv", ["Abdomen", "Abdomen and Pelvis", "Breast", "Pelvis", "Renal (kidney both)"])
toggleSelect("#usid", "#usperformedDiv", ["Abdomen", "Abdomen and Pelvis", "Breast", "Pelvis", "Renal (kidney both)"])
toggleSelect("#usid", "#usreportedDiv", ["Abdomen", "Abdomen and Pelvis", "Breast", "Pelvis", "Renal (kidney both)"])

toggleSelect("#ctid", "#ctbookedDiv", ["Abdomen", "Abdomen & Pelvis", "CT Angio", "KUB", "TAP", "Thorax", "Urogram"])
toggleSelect("#ctid", "#ctperformedDiv", ["Abdomen", "Abdomen & Pelvis", "CT Angio", "KUB", "TAP", "Thorax", "Urogram"])
toggleSelect("#ctid", "#ctreportedDiv", ["Abdomen", "Abdomen & Pelvis", "CT Angio", "KUB", "TAP", "Thorax", "Urogram"])

toggleSelect("#mriid", "#mribookedDiv", ["Abdomen", "MRCP", "Pelvis"])
toggleSelect("#mriid", "#mriperformedDiv", ["Abdomen", "MRCP", "Pelvis"])
toggleSelect("#mriid", "#mrireportedDiv", ["Abdomen", "MRCP", "Pelvis"])

toggleSelect("#otherimageid", "#otherimagebookedDiv", ["Yes"])
toggleSelect("#otherimageid", "#otherimageperformedDiv", ["Yes"])
toggleSelect("#otherimageid", "#otherimagereportedDiv", ["Yes"])


toggleCheckedOff("#cxrdatetimend", "#cxrDiv", ["ND"])
toggleCheckedOff("#pfadatetimend", "#pfaDiv", ["ND"])
toggleCheckedOff("#usbookeddatetimend", "#usbookedDiv", ["ND"])
toggleCheckedOff("#usperformeddatetimend", "#usperformedDiv", ["ND"])
toggleCheckedOff("#usreporteddatetimend", "#usreportedDiv", ["ND"])

toggleCheckedOff("#ctbookeddatetimend", "#ctbookedDiv", ["ND"])
toggleCheckedOff("#ctperformeddatetimend", "#ctperformedDiv", ["ND"])
toggleCheckedOff("#ctreporteddatetimend", "#ctreportedDiv", ["ND"])

toggleCheckedOff("#mribookeddatetimend", "#mribookedDiv", ["ND"])
toggleCheckedOff("#mriperformeddatetimend", "#mriperformedDiv", ["ND"])
toggleCheckedOff("#mrireporteddatetimend", "#mrireportedDiv", ["ND"])

toggleCheckedOff("#otherimagebookeddatetimend", "#otherimagebookedDiv", ["ND"])
toggleCheckedOff("#otherimageperformeddatetimend", "#otherimageperformedDiv", ["ND"])
toggleCheckedOff("#otherimagereporteddatetimend", "#otherimagereportedDiv", ["ND"])


toggleSelect("#dispositionsurgeonid", "#surgeryLocumDiv", ["eight"])

toggleSelect("#finaldiagnosisid", "#otherfinalDiv", ["Other"])
toggleSelect("#provisionaldiagnosisid", "#otherProvDiagDiv", ["Other"])

toggleCheckedOff("#dateofsurgerynd", "#dateofsurgeryDiv", ["ND"])
toggleChecked("#dateofsurgerynd", "#dateofsurgeryh5", ["ND"])

toggleCheckedOff("#surgeryinductiontimend", "#surgeryinductiontimeDiv", ["ND"])
toggleChecked("#surgeryinductiontimend", "#surgeryinductiontimeh5", ["ND"])

toggleCheckedOff("#dischargedatend", "#dischargedateDiv", ["ND"])
toggleChecked("#dischargedatend", "#dischargedateh5", ["ND"])

const options = document.querySelector('#procedurecategory').options;

for (let i = 1; i < options.length; i++) {
    // console.log(`#${option.value}`)

    toggleSelect("#procedurecategory", `#${options[i].value}`, [options[i].value])
}
