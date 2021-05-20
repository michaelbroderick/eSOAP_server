const demodp = ['admissiondate', 'age', 'uniqueid',
    'genderid', 'consultantdemographicsid', 'demographicslocum', 'residencepreadmissionid',
    'presententingcompaintid', 'otherpresententingcompaintid', 'provisionaldiagnosisid', 'moduleid', 'includeinstudyid',
    'FirstAdmitSpecialityId', 'referredbyid', 'transportid', 'registeredtime', 'registeredtimend', 'triagetime', 'triagetimend', 'timereferred', 'timereferrednd',
    'timeseen', 'timeseennd', 'movedtoid', 'dispositiondatetime', 'dispositiondatetimend', 'antibioticsrecordedid',
    'antibioticsrecordedtime', 'antibioticsrecordedtimend', 'dispositionsurgrecordedid', 'percentComplete'];


const labsdp = ['bp_sys', 'bp_dias', 'haemolysedid', 'bloodcollected', 'bloodcollectednd', 'temperature', 'pulse', 'Rr', 'spo2', 'comorbiditiesanticoagsid', 'wcc', 'hb', 'crp', 'amylase', 'ggt', 'creat', 'inr', 'baseexcess', 'basedeficit', 'lactate'];

const imagingdp = ['cxrdatetime', 'cxrdatetimend', 'cxrrequested', 'pfadatetime', 'pfadatetimend', 'pfarequested',
    'usid', 'usbookeddatetime', 'usperformeddatetime', 'usreporteddatetime', 'usbookeddatetimend', 'usperformeddatetimend',
    'usreporteddatetimend', 'ctid', 'ctbookeddatetime', 'ctperformeddatetime', 'ctreporteddatetime', 'ctbookeddatetimend', 'ctperformeddatetimend', 'ctreporteddatetimend',
    'mriid', 'mribookeddatetime', 'transabdominalvaginal', 'mriperformeddatetime', 'mrireporteddatetime', 'mribookeddatetimend', 'mriperformeddatetimend', 'mrireporteddatetimend', 'otherimageid', 'otherimagingtype',
    'otherimagebookeddatetime', 'otherimageperformeddatetime', 'otherimagereporteddatetime', 'otherimagebookeddatetimend', 'otherimageperformeddatetimend', 'otherimagereporteddatetimend', 'daterecwatersolubleagent'];


const surgerydp = ['surgerylocum', 'otherprocedure', 'surgeryconvlcrscopictoopen', 'othercomplication', 'otherfinaldiagnosis', 'readmittedwithin30daysid',
    'statusatdischarge', 'lengthoftotalstay', 'patientid', 'dateofsurgery', 'dateofsurgerynd', 'surgeryinductiontime', 'surgeryinductiontimend',
    'asascoreid', 'dispositionsurgeonid', 'procedurecategory', 'procedureid', 'findings',
    'destinationid', 'complicationsid', 'complicclassificationid', 'finaldiagnosisid', 'dischargedate', 'dischargedatend'];


const rifdp = ['histabdominalsurgeryid', 'prevadmiswithrifpainid', 'hrsdayssincepainonsetid', 'neutrophilcount', 'rifpainid',
    'migrationofpaintorifid', 'tenderid', 'guardingid', 'reboundtendernessid', 'rigidityid', 'rovsingssignid', 'riskscoreid',
    'riskscore', 'imagingfindingsid', 'interventionalradiology', 'rifsurgeryid', 'appendicitisgradingid', 'drainid',
];

const sbodp = ['sbo_comorbiditiesid', 'sbo_otheraetiology', 'sbo_procedure', 'sbo_procedure_date', 'sbo_procedure_datend',
    'sbo_otherintervention', 'sbo_onsetvomitting', 'sbo_onsetvomittingnd', 'sbo_initialmgmtstrategyid', 'albumin',
    'sbo_contrast_agent', 'sbo_Aetiology', 'sbo_surgery', 'sbointerventionid', 'enteralnutritiondate', 'enteralnutritiondatend'
];

const ruqdp = ['dayssincepainonsetid', 'firstepisodeid', 'prevadmiswithcholid', 'alt', 'ast', 'alkalinephosphatase', 'totalbilirubin', 'rmurphyssignpositiveid',
    'ruq_jaundiceid', 'ruq_rigorsid', 'lowerabdominalsignsid', 'confusionid', 'ercpid', 'ercpfindings', 'cholangiographyid',
    'gallbladdergradingid', 'postoperativedrainid', 'bileleakid', 'lengthofpostoperativestay', 'unplanmove7daysid'];

const lapdp = ['usedfrailtyid', 'frailtyid', 'frailtyscoreid',
    'seniorsurgeonid', 'presentconsultantid', 'lap_locum_name', 'procedurefirstprocedureid', 'proceduresurgeryindid',
    'proceduremainprocedureid', 'proceduresecondprocedureid', 'procedurethirdprocedureid', 'procedureprocapproachid',
    'procedureoperfindingsid', 'procedureperitonealcontid', 'procedurecontaminationid', 'abdomentleftopen', 'Intermittentpertfluidused',
    'negpressuredressingused', 'openabdomendocumented', 'postopcritcalcarestaylen', 'postopassesbyspecid', 'unplannedorplannedreturnid', 'indunplannedreturnid',
    'indplannedreturnid', 'isunplannedmove', 'otherindforsurgery', 'othermainprocedure', 'othersecondprocedure', 'otherthirdprocedure', 'otheroperativefindings'];


const tables = {
    demographics: demodp,
    labs: labsdp,
    imaging: imagingdp,
    surgery: surgerydp
};

const modules = {
    rif: rifdp,
    sbo: sbodp,
    ruq: ruqdp,
    lap: lapdp,
};

function filterObj(raw, allowed) {

    const filtered = Object.keys(raw)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
            obj[key] = raw[key];
            return obj;
        }, {});

    return filtered

}

module.exports = { tables: tables, modules: modules, filterObj: filterObj, }