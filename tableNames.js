const demodp = ['admissiondate', 'age', 'uniqueid',
    'genderid', 'consultantdemographicsid', 'demographicslocum', 'residencepreadmissionid',
    'presententingcompaintid', 'provisionaldiagnosisid', 'moduleid', 'includeinstudyid',
    'FirstAdmitSpecialityId', 'referredbyid', 'transportid', 'registeredtime', 'triagetime', 'timereferred',
    'timeseen', 'movedtoid', 'dispositiondatetime', 'antibioticsrecordedid',
    'antibioticsrecordedtime', 'dispositionsurgrecordedid', 'percentComplete'];


const labsdp = ['labid', 'patientid', 'bp', 'temperature', 'pulse', 'Rr', 'spo2', 'comorbiditiesanticoagsid', 'wcc', 'hb', 'crp', 'amylase', 'ggt', 'creat', 'inr', 'baseexcess', 'basedeficit', 'lactate'];

const imagingdp = ['imagingid', 'patientid', 'cxrdatetime', 'pfadatetime', 'usid', 'usbookeddatetime', 'usperformeddatetime',
    'usreporteddatetime', 'ctid', 'ctbookeddatetime', 'ctperformeddatetime', 'ctreporteddatetime',
    'mriid', 'mribookeddatetime', 'mriperformeddatetime', 'mrireporteddatetime', 'otherimageid',
    'otherimagebookeddatetime', 'otherimageperformeddatetime', 'otherimagereporteddatetime'];


const surgerydp = ['surgeryid', 'patientid', 'dateofsurgery', 'surgeryinductiontime',
    'asascoreid', 'dispositionsurgeonid', 'procedurecategory', 'procedureid', 'findings',
    'destinationid', 'complicationsid', 'complicclassificationid', 'finaldiagnosisid', 'dischargedate'];


const rifdp = ['histabdominalsurgeryid', 'prevadmiswithrifpainid', 'hrsdayssincepainonsetid', 'neutrophilcount', 'rifpainid',
    'migrationofpaintorifid', 'tenderid', 'guardingid', 'reboundtendernessid', 'rigidityid', 'rovsingssignid', 'riskscoreid',
    'riskscore', 'imagingfindingsid', 'interventionalradiology', 'rifsurgeryid', 'appendicitisgradingid', 'drainid',
    'finalaastgradeid'];

const sbodp = ['sbo_comorbiditiesid', 'sbo_onsetvomitting', 'sbo_initialmgmtstrategyid', 'albumin', 'sbo_abdoXray',
    'sbo_abdoXray_date', 'sbo_ct', 'sbo_ct_date', 'sbo_contrast_agent', 'sbo_contrast_date', 'sbo_Aetiology',
    'sbo_surgery', 'sbo_surgery_date', 'sbointerventionid', 'enteralnutritiondate', 'statusatdischarge',
    'sbo_dischargedate', 'readmittedwithin30daysid', 'sbo_destinationid', 'sbo_complicationsid'
];

const ruqdp = ['dayssincepainonsetid', 'firstepisodeid', 'prevadmiswithcholid', 'alt', 'ast', 'alkalinephosphatase', 'totalbilirubin', 'rmurphyssignpositiveid',
    'ruq_jaundiceid', 'ruq_rigorsid', 'lowerabdominalsignsid', 'confusionid', 'ercpid', 'ercpfindings', 'peritonealcontaminationid', 'cholangiographyid',
    'gallbladdergradingid', 'postoperativedrainid', 'bileleakid', 'lengthofpostoperativestay', 'unplanmove7daysid'];

const lapdp = ['timefromsymptomonset', 'usedfrailtyid', 'frailtyid', 'frailtyscoreid', 'usedpredictionid', 'predictionid',
    'predictionscoreid', 'seniorsurgeonid', 'presentconsultantid', 'lap_locum_name', 'procedurefirstprocedureid', 'proceduresurgeryindid',
    'proceduremainprocedureid', 'proceduresecondprocedureid', 'procedurethirdprocedureid', 'procedureprocapproachid',
    'procedureoperfindingsid', 'procedureperitonealcontid', 'procedurecontaminationid', 'abdomentleftopen', 'Intermittentpertfluidused',
    'negpressuredressingused', 'openabdomendocumented', 'postopcritcalcarestaylen', 'postopassesbyspecid', 'unplannedorplannedreturnid', 'indunplannedreturnid',
    'indplannedreturnid', 'isunplannedmove'];


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