USE esoap_local;

-- ALTER TABLE demographics ADD COLUMN registeredtimend VARCHAR(20) AFTER registeredtime;
-- ALTER TABLE demographics ADD COLUMN triagetimend VARCHAR(20) AFTER triagetime;
-- ALTER TABLE demographics ADD COLUMN timereferrednd VARCHAR(20) AFTER timereferred;
-- ALTER TABLE demographics ADD COLUMN timeseennd VARCHAR(20) AFTER timeseen;
ALTER TABLE demographics ADD COLUMN dispositiondatetimend VARCHAR(20) AFTER dispositiondatetime;
ALTER TABLE demographics ADD COLUMN antibioticsrecordedtimend VARCHAR(20) AFTER antibioticsrecordedtime;

-- ALTER TABLE labs ADD COLUMN bloodcollectednd VARCHAR(20) AFTER bloodcollected;

-- ALTER TABLE imaging ADD COLUMN cxrrequested VARCHAR(20) AFTER cxrdatetime;
-- ALTER TABLE imaging ADD COLUMN pfarequested VARCHAR(20) AFTER pfadatetime;
-- ALTER TABLE imaging ADD COLUMN cxrdatetimend VARCHAR(20) AFTER cxrdatetime;
-- ALTER TABLE imaging ADD COLUMN pfadatetimend VARCHAR(20) AFTER pfadatetime;
-- ALTER TABLE imaging ADD COLUMN usbookeddatetimend VARCHAR(20) AFTER usbookeddatetime;
-- ALTER TABLE imaging ADD COLUMN usperformeddatetimend VARCHAR(20) AFTER usperformeddatetime;
-- ALTER TABLE imaging ADD COLUMN usreporteddatetimend VARCHAR(20) AFTER usreporteddatetime;
-- ALTER TABLE imaging ADD COLUMN ctbookeddatetimend VARCHAR(20) AFTER ctbookeddatetime;
-- ALTER TABLE imaging ADD COLUMN ctperformeddatetimend VARCHAR(20) AFTER ctperformeddatetime;
-- ALTER TABLE imaging ADD COLUMN ctreporteddatetimend VARCHAR(20) AFTER ctreporteddatetime;
-- ALTER TABLE imaging ADD COLUMN mribookeddatetimend VARCHAR(20) AFTER mribookeddatetime;
-- ALTER TABLE imaging ADD COLUMN mriperformeddatetimend VARCHAR(20) AFTER mriperformeddatetime;
-- ALTER TABLE imaging ADD COLUMN mrireporteddatetimend VARCHAR(20) AFTER mrireporteddatetime;
-- ALTER TABLE imaging ADD COLUMN otherimagebookeddatetimend VARCHAR(20) AFTER otherimagebookeddatetime;
-- ALTER TABLE imaging ADD COLUMN otherimageperformeddatetimend VARCHAR(20) AFTER otherimageperformeddatetime;
-- ALTER TABLE imaging ADD COLUMN otherimagereporteddatetimend VARCHAR(20) AFTER otherimagereporteddatetime;

ALTER TABLE sbo ADD COLUMN sbo_onsetvomittingnd VARCHAR(20) AFTER sbo_onsetvomitting;
ALTER TABLE sbo ADD COLUMN sbo_procedure_datend VARCHAR(20) AFTER sbo_procedure_date;
ALTER TABLE sbo ADD COLUMN enteralnutritiondatend VARCHAR(20) AFTER enteralnutritiondate;
ALTER TABLE sbo DROP COLUMN sbo_contrast_date;
ALTER TABLE sbo DROP COLUMN sbo_surgery_date;

ALTER TABLE surgery ADD COLUMN dateofsurgerynd VARCHAR(20) AFTER dateofsurgery;
ALTER TABLE surgery ADD COLUMN surgeryinductiontimend VARCHAR(20) AFTER surgeryinductiontime;
ALTER TABLE surgery ADD COLUMN dischargedatend VARCHAR(20) AFTER dischargedate;

ALTER TABLE ruq DROP COLUMN postoperativedrainid;
ALTER TABLE ruq ADD COLUMN postoperativedrainid VARCHAR(20) AFTER unplanmove7daysid;



USE esoap_global;


ALTER TABLE demographics ADD COLUMN registeredtimend VARCHAR(20) AFTER registeredtime;
ALTER TABLE demographics ADD COLUMN triagetimend VARCHAR(20) AFTER triagetime;
ALTER TABLE demographics ADD COLUMN timereferrednd VARCHAR(20) AFTER timereferred;
ALTER TABLE demographics ADD COLUMN timeseennd VARCHAR(20) AFTER timeseen;
ALTER TABLE demographics ADD COLUMN dispositiondatetimend VARCHAR(20) AFTER dispositiondatetime;
ALTER TABLE demographics ADD COLUMN antibioticsrecordedtimend VARCHAR(20) AFTER antibioticsrecordedtime;

ALTER TABLE labs ADD COLUMN bloodcollectednd VARCHAR(20) AFTER bloodcollected;

ALTER TABLE imaging ADD COLUMN cxrrequested VARCHAR(20) AFTER cxrdatetime;
ALTER TABLE imaging ADD COLUMN pfarequested VARCHAR(20) AFTER pfadatetime;
ALTER TABLE imaging ADD COLUMN cxrdatetimend VARCHAR(20) AFTER cxrdatetime;
ALTER TABLE imaging ADD COLUMN pfadatetimend VARCHAR(20) AFTER pfadatetime;
ALTER TABLE imaging ADD COLUMN usbookeddatetimend VARCHAR(20) AFTER usbookeddatetime;
ALTER TABLE imaging ADD COLUMN usperformeddatetimend VARCHAR(20) AFTER usperformeddatetime;
ALTER TABLE imaging ADD COLUMN usreporteddatetimend VARCHAR(20) AFTER usreporteddatetime;
ALTER TABLE imaging ADD COLUMN ctbookeddatetimend VARCHAR(20) AFTER ctbookeddatetime;
ALTER TABLE imaging ADD COLUMN ctperformeddatetimend VARCHAR(20) AFTER ctperformeddatetime;
ALTER TABLE imaging ADD COLUMN ctreporteddatetimend VARCHAR(20) AFTER ctreporteddatetime;
ALTER TABLE imaging ADD COLUMN mribookeddatetimend VARCHAR(20) AFTER mribookeddatetime;
ALTER TABLE imaging ADD COLUMN mriperformeddatetimend VARCHAR(20) AFTER mriperformeddatetime;
ALTER TABLE imaging ADD COLUMN mrireporteddatetimend VARCHAR(20) AFTER mrireporteddatetime;
ALTER TABLE imaging ADD COLUMN otherimagebookeddatetimend VARCHAR(20) AFTER otherimagebookeddatetime;
ALTER TABLE imaging ADD COLUMN otherimageperformeddatetimend VARCHAR(20) AFTER otherimageperformeddatetime;
ALTER TABLE imaging ADD COLUMN otherimagereporteddatetimend VARCHAR(20) AFTER otherimagereporteddatetime;

ALTER TABLE sbo ADD COLUMN sbo_onsetvomittingnd VARCHAR(20) AFTER sbo_onsetvomitting;
ALTER TABLE sbo ADD COLUMN sbo_procedure_datend VARCHAR(20) AFTER sbo_procedure_date;
ALTER TABLE sbo ADD COLUMN enteralnutritiondatend VARCHAR(20) AFTER enteralnutritiondate;
ALTER TABLE sbo DROP COLUMN sbo_contrast_date;
ALTER TABLE sbo DROP COLUMN sbo_surgery_date;

ALTER TABLE surgery ADD COLUMN dateofsurgerynd VARCHAR(20) AFTER dateofsurgery;
ALTER TABLE surgery ADD COLUMN surgeryinductiontimend VARCHAR(20) AFTER surgeryinductiontime;
ALTER TABLE surgery ADD COLUMN dischargedatend VARCHAR(20) AFTER dischargedate;

ALTER TABLE ruq DROP COLUMN postoperativedrainid;
ALTER TABLE ruq ADD COLUMN postoperativedrainid VARCHAR(20) AFTER unplanmove7daysid;
