
const check = '<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="green" class="bi bi-check2-circle" viewBox = "0 0 16 16" ><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" /></svg >'
const exclamation = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="red" class="bi bi-exclamation-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" /></svg>'
const xxx = '<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="red" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>';
const nd = '<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="grey" class="bi bi-file-earmark-excel" viewBox="0 0 16 16"><path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z"/><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/></svg>'

const lookup = {
    true: check,
    false: xxx,
    'N/A': 'N/A',
    'N.D.': nd
}

const hoursToAbdoUS = (data) => {


    if (data.usperformeddatetime & data.registeredtime) {
        return (data.usperformeddatetime.getTime() / (1000 * 60 * 60) - data.registeredtime.getTime() / (1000 * 60 * 60)) <= 24;
    } else {
        return 'N.D.'
    }

}

const readmissionPostCholecys = (data) => {

    if (!data.procedureid) return 'N.D.'
    if (String(data.procedureid).startsWith('Cholecystectomy') | data.ercpid == 'Yes') {
        if (!data.readmittedwithin30daysid) return 'N.D.'
        return !(data.readmittedwithin30daysid == 'Yes')
    }
    return 'N/A'

}


const bileleaks = (data) => {
    if (!data.bileleakid || data.bileleakid == 'ND') return 'N.D.'
    return !((data.bileleakid == 'Low volume') || (data.bileleakid == 'High volume'))
}

const surgery3days = (data) => {
    if (data.finaldiagnosisid == 'Cholecystitis K81') {
        if (data.dateofsurgery & data.registeredtime) {
            return data.dateofsurgery.getTime() / (1000 * 60 * 60) - data.registeredtime.getTime() / (1000 * 60 * 60) <= 72
        }
        return 'N.D.'
    }
    return 'N/A'
}


const grade5SurgeryIn12 = (data) => {
    if (!data.appendicitisgradingid) return 'N.D.'

    if (data.appendicitisgradingid == 'Grade_5') {
        if (data.dateofsurgery & data.registeredtime) {
            return data.dateofsurgery.getTime() / (1000 * 60 * 60) - data.registeredtime.getTime() / (1000 * 60 * 60) <= 12
        }
        return 'N.D.'
    }
    return 'N/A'

}

const riskScoreDocumented = (data) => {
    return !(data.riskscoreid == null)

}

const laparoscopicApproach = (data) => {

    if (!data.dispositionsurgrecordedid | data.dispositionsurgrecordedid == 'ND') return 'N.D.'

    if (data.dispositionsurgrecordedid == 'Yes') {
        return data.procedureid.includes('Laparoscopic')
    }
    return 'N/A'

}

const conversion = (data) => {

    if (!data.dispositionsurgrecordedid | data.dispositionsurgrecordedid == 'ND') return 'N.D.'
    if (data.dispositionsurgrecordedid == 'Yes') {
        if (!data.surgeryconvlcrscopictoopen) return 'N.D.'
        return data.surgeryconvlcrscopictoopen == 'No'
    }
    return 'N/A'

}

const negApp = (data) => {
    if (!data.dispositionsurgrecordedid | data.dispositionsurgrecordedid == 'ND') return 'N.D.'
    if (data.dispositionsurgrecordedid == 'Yes') {
        if (!data.procedureid) return 'N.D.'
        if (data.procedureid.includes('Appendectomy')) {
            return data.finaldiagnosisid.includes('Appendicitis')

        }
    }
    return 'N/A'
}

const appendectReadmit = (data) => {

    if (!data.dispositionsurgrecordedid | data.dispositionsurgrecordedid == 'ND') return 'N.D.'
    if (!data.procedureid) return 'N.D.'
    if (data.procedureid.includes('Appendectomy')) {

        if (!data.readmittedwithin30daysid) return 'N.D.'
        return !(data.readmittedwithin30daysid == 'Yes')

    }
    return 'N/A'
}

module.exports.returnKOIs = (data) => {
    let targets = {}
    if (data.moduleid == 'RUQ & Cholecystitis') {


        return new Promise((resolve, reject) => {
            console.log(hoursToAbdoUS(data))
            targets = {
                '1': lookup[hoursToAbdoUS(data)],
                '2': lookup['N.D.'],
                '3': lookup[surgery3days(data)],
                '4': lookup['N.D.'],
                '5': lookup[bileleaks(data)],
                '6': lookup[readmissionPostCholecys(data)]
            }

            return resolve(targets);
        });
    }
    else if (data.moduleid == 'RIF Pain & Appendicitis') {
        return new Promise((resolve, reject) => {
            console.log(hoursToAbdoUS(data))
            targets = {
                '1': lookup['N.D.'],
                '2': lookup[grade5SurgeryIn12(data)],
                '3': lookup[riskScoreDocumented(data)],
                '4': lookup[laparoscopicApproach(data)],
                '5': lookup[conversion(data)],
                '6': lookup[negApp(data)],
                '7': lookup[appendectReadmit(data)]

            }

            return resolve(targets);
        });
    }
    // else if(data.moduleid=='Small Bowel Obstruction'){
    //     targets={

    //     }
    //     return targets
    // }else{
    //     return null
    // }
    return targets;

}


// const check_sm = '<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="green" class="bi bi-check2-circle" viewBox = "0 0 16 16" ><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" /><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" /></svg >'
// const xxx_sm = '<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="red" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>';
// const nd_sm = '<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="grey" class="bi bi-file-earmark-excel" viewBox="0 0 16 16"><path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z"/><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/></svg>'


const checker = (conditional) => {
    try {
        if (conditional) return check;
        return xxx;
    }
    catch (err) {
        return ''
    }
}

const missingChecker = (elements, conditional) => {
    for (el of elements) {
        if (!el) {
            return nd
        }
    }
    return checker(conditional)
}

module.exports.makeRifObj = (data) => {
    const rifObj = [
        {
            'Normal Bloods': missingChecker([data.wcc, data.crp], (data.wcc < 13 & data.crp < 10)),
            'AIR &#60 5': missingChecker([data.riskscore], data.riskscore < 5),
            'AAS &#8804 10': missingChecker([data.riskscore], data.riskscore <= 10),
            'SHERA F(5-15yrs) &#8804 3': missingChecker([data.riskscore], data.riskscore <= 3),
            'SHERA M(5-10yrs) &#8804 3': missingChecker([data.riskscore], data.riskscore <= 3),
            'SHERA M(11-15yrs) &#8804 2': missingChecker([data.riskscore], data.riskscore <= 2),
            // '':missingChecker([],),
            // '':missingChecker([],),
        },
        {
            'Tender': missingChecker([data.tenderid], data.tenderid === 'Yes'),
            'Guarding': missingChecker([data.guardingid], data.guardingid === 'Yes'),
            'Rigidity': missingChecker([data.rigidityid], data.rigidityid === 'Yes'),
            'Rebound RIF': missingChecker([data.reboundtendernessid], data.reboundtendernessid === 'Yes'),
            'WCC &#62 13000': missingChecker([data.wcc], data.wcc > 13),
            'CRP &#62 10': missingChecker([data.crp], data.crp > 10),
            'AIR: 5-8': missingChecker([data.riskscore], (data.riskscore >= 5 & data.riskscore <= 8)),
            'AAS 11-15': missingChecker([data.riskscore], (data.riskscore >= 11 & data.riskscore <= 15)),
        },

        {
            'Tender': missingChecker([data.tenderid], data.tenderid === 'Yes'),
            'Guarding': missingChecker([data.guardingid], data.guardingid === 'Yes'),
            'Rigidity': missingChecker([data.rigidityid], data.rigidityid === 'Yes'),
            'Rebound RIF': missingChecker([data.reboundtendernessid], data.reboundtendernessid === 'Yes'),
            'WCC &#62 15000': missingChecker([data.wcc], data.wcc > 15),
            'CRP &#62 20': missingChecker([data.crp], data.crp > 20),
            'AIR &#62 8': missingChecker([data.riskscore], data.riskscore > 8),
            'AAS &#8805 16': missingChecker([data.riskscore], data.riskscore >= 16),
            'SHERA &#62 3': missingChecker([data.riskscore], data.riskscore >= 3),
        },

        {
            'Tender': missingChecker([data.tenderid], data.tenderid === 'Yes'),
            'Guarding': missingChecker([data.guardingid], data.guardingid === 'Yes'),
            'Rigidity': missingChecker([data.rigidityid], data.rigidityid === 'Yes'),
            'Rebound RIF': missingChecker([data.reboundtendernessid], data.reboundtendernessid === 'Yes'),
            'Palpable Mass': missingChecker([data.palpablemassid], data.palpablemassid === 'Yes'),
            'High WCC, CRP': missingChecker([data.wcc, data.crp], (data.wcc > 15 & data.crp > 20)),
            'Duration of sympotms &#62 48hrs': missingChecker([data.symptomduration], data.symptomduration > 48),
        },

        {
            'Tender': missingChecker([data.tenderid], data.tenderid === 'Yes'),
            'Guarding': missingChecker([data.guardingid], data.guardingid === 'Yes'),
            'Rigidity Entire Abdomen': missingChecker([data.rigidityentire], data.rigidityentire === 'Yes'),
            'High WCC, CRP': missingChecker([data.wcc, data.crp], (data.wcc > 15 & data.crp > 20)),
        }

    ]

    return rifObj
}