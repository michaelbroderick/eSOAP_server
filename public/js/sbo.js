// toggleYesNo("#sbo_surgeryRadio1", "#sbo_surgeryRadio2", "#sbosurgeryDT");
// checkYesNo("#sbo_surgeryRadio1", "#sbo_surgeryRadio2", "#sbosurgeryDT");
// toggleYesNo("#abdoXrRadio1", "#abdoXrRadio2", "#abdoDT");
// toggleYesNo("#ctRadio1", "#ctRadio2", "#ctDT");
// toggleYesNo("#contrastRadio1", "#contrastRadio2", "#contrastDT"); console.log('ran');
toggleYesNoND("#sboprocedureRadio1", "#sboprocedureRadio2", "#sboprocedureRadio3", "#sboprocedureDT");
toggleYesNoND("#sboprocedureRadio1", "#sboprocedureRadio2", "#sboprocedureRadio3", "#sboprocedureDTFullDiv");
// checkYesNo("#abdoXrRadio1", "#abdoXrRadio2", "#abdoDT");

toggleSelect("#sbo_Aetiology", "#otherAetiologyText", ["Other"])

toggleChecked("#interventionCheckR33", "#otherInterventionText", ["Other"])

toggleCheckedOff("#sbo_onsetvomittingnd", "#sbo_onsetvomittingDiv", ["ND"])
toggleChecked("#sbo_onsetvomittingnd", "#sbo_onsetvomittingh5", ["ND"])

toggleCheckedOff("#sbo_procedure_datend", "#sboprocedureDT", ["ND"])
toggleChecked("#sbo_procedure_datend", "#sboprocedureDTh5", ["ND"])

toggleCheckedOff("#enteralnutritiondatend", "#enteralDiv", ["ND"])
toggleChecked("#enteralnutritiondatend", "#enteralh5", ["ND"])