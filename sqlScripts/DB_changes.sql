USE esoap_local;

CREATE TABLE IF NOT EXISTS viewhistory (id INT AUTO_INCREMENT PRIMARY KEY, userid INT, patientid INT, lastviewed DATETIME DEFAULT NOW(), FOREIGN KEY(userid) REFERENCES accounts(id), FOREIGN KEY(patientid) REFERENCES demographics(patientid))ENGINE=InnoDB;

ALTER TABLE demographics ADD COLUMN otherprovisionaldiagnosis VARCHAR(255) AFTER provisionaldiagnosisid;

ALTER TABLE labs ADD COLUMN bp_sys DECIMAL(7,2) AFTER bp;
ALTER TABLE labs ADD COLUMN bp_dias DECIMAL(7,2) AFTER bp_sys;
ALTER TABLE labs ADD COLUMN haemolysedid VARCHAR(255) AFTER lactate;
ALTER TABLE labs ADD COLUMN bloodcollected DATETIME AFTER comorbiditiesanticoagsid;
ALTER TABLE labs DROP COLUMN bp; 

ALTER TABLE rif DROP COLUMN finalaastgradeid;

ALTER TABLE ruq DROP COLUMN prevadmiswithcholid; 
ALTER TABLE ruq DROP COLUMN peritonealcontaminationid; 
ALTER TABLE ruq ADD COLUMN prevadmiswithcholid VARCHAR(10) AFTER firstepisodeid;

ALTER TABLE imaging ADD COLUMN transabdominalvaginal VARCHAR(100) AFTER usid;
ALTER TABLE imaging ADD COLUMN otherimagingtype VARCHAR(100) AFTER otherimageid;
ALTER TABLE imaging ADD COLUMN daterecwatersolubleagent DATETIME AFTER ctreporteddatetime;

ALTER TABLE sbo ADD COLUMN sbo_otheraetiology VARCHAR(200) AFTER sbo_Aetiology;
ALTER TABLE sbo ADD COLUMN sbo_procedure VARCHAR(200) AFTER sbo_contrast_date;
ALTER TABLE sbo ADD COLUMN sbo_procedure_date VARCHAR(200) AFTER sbo_procedure;
ALTER TABLE sbo ADD COLUMN sbo_otherintervention VARCHAR(200) AFTER sbointerventionid;
ALTER TABLE sbo DROP COLUMN sbo_abdoXray; 
ALTER TABLE sbo DROP COLUMN sbo_abdoXray_date; 
ALTER TABLE sbo DROP COLUMN sbo_ct; 
ALTER TABLE sbo DROP COLUMN sbo_ct_date; 
ALTER TABLE sbo DROP COLUMN readmittedwithin30daysid; 
ALTER TABLE sbo DROP COLUMN statusatdischarge; 
ALTER TABLE sbo DROP COLUMN sbo_dischargedate; 
ALTER TABLE sbo DROP COLUMN sbo_destinationid; 
ALTER TABLE sbo DROP COLUMN sbo_complicationsid; 

ALTER TABLE lap DROP COLUMN timefromsymptomonset; 
ALTER TABLE lap DROP COLUMN usedpredictionid; 
ALTER TABLE lap DROP COLUMN predictionid; 
ALTER TABLE lap DROP COLUMN predictionscoreid; 
ALTER TABLE lap ADD COLUMN otherindforsurgery VARCHAR(255) AFTER proceduresurgeryindid;
ALTER TABLE lap ADD COLUMN othermainprocedure VARCHAR(255) AFTER proceduremainprocedureid;
ALTER TABLE lap ADD COLUMN othersecondprocedure VARCHAR(255) AFTER proceduresecondprocedureid;
ALTER TABLE lap ADD COLUMN otherthirdprocedure VARCHAR(255) AFTER procedurethirdprocedureid;
ALTER TABLE lap ADD COLUMN otheroperativefindings VARCHAR(255) AFTER procedureoperfindingsid;

ALTER TABLE surgery ADD COLUMN surgerylocum VARCHAR(255) AFTER dispositionsurgeonid;
ALTER TABLE surgery ADD COLUMN otherprocedure VARCHAR(255) AFTER procedureid;
ALTER TABLE surgery ADD COLUMN surgeryconvlcrscopictoopen VARCHAR(255) AFTER findings;
ALTER TABLE surgery ADD COLUMN othercomplication VARCHAR(255) AFTER complicationsid;
ALTER TABLE surgery ADD COLUMN otherfinaldiagnosis VARCHAR(255) AFTER finaldiagnosisid;
ALTER TABLE surgery ADD COLUMN readmittedwithin30daysid VARCHAR(50) AFTER otherfinaldiagnosis;
ALTER TABLE surgery ADD COLUMN statusatdischarge VARCHAR(100) AFTER readmittedwithin30daysid;
ALTER TABLE surgery ADD COLUMN lengthoftotalstay INT AFTER dischargedate;


USE esoap_global;

ALTER TABLE demographics ADD COLUMN otherprovisionaldiagnosis VARCHAR(255) AFTER provisionaldiagnosisid;

ALTER TABLE labs ADD COLUMN bp_sys DECIMAL(7,2) AFTER bp;
ALTER TABLE labs ADD COLUMN bp_dias DECIMAL(7,2) AFTER bp_sys;
ALTER TABLE labs ADD COLUMN haemolysedid VARCHAR(255) AFTER lactate;
ALTER TABLE labs ADD COLUMN bloodcollected DATETIME AFTER comorbiditiesanticoagsid;
ALTER TABLE labs DROP COLUMN bp; 

ALTER TABLE rif DROP COLUMN finalaastgradeid;

ALTER TABLE ruq DROP COLUMN prevadmiswithcholid; 
ALTER TABLE ruq DROP COLUMN peritonealcontaminationid; 
ALTER TABLE ruq ADD COLUMN prevadmiswithcholid VARCHAR(10) AFTER firstepisodeid;

ALTER TABLE imaging ADD COLUMN transabdominalvaginal VARCHAR(100) AFTER usid;
ALTER TABLE imaging ADD COLUMN otherimagingtype VARCHAR(100) AFTER otherimageid;
ALTER TABLE imaging ADD COLUMN daterecwatersolubleagent DATETIME AFTER ctreporteddatetime;

ALTER TABLE sbo ADD COLUMN sbo_otheraetiology VARCHAR(200) AFTER sbo_Aetiology;
ALTER TABLE sbo ADD COLUMN sbo_procedure VARCHAR(200) AFTER sbo_contrast_date;
ALTER TABLE sbo ADD COLUMN sbo_procedure_date VARCHAR(200) AFTER sbo_procedure;
ALTER TABLE sbo ADD COLUMN sbo_otherintervention VARCHAR(200) AFTER sbointerventionid;
ALTER TABLE sbo DROP COLUMN sbo_abdoXray; 
ALTER TABLE sbo DROP COLUMN sbo_abdoXray_date; 
ALTER TABLE sbo DROP COLUMN sbo_ct; 
ALTER TABLE sbo DROP COLUMN sbo_ct_date; 
ALTER TABLE sbo DROP COLUMN readmittedwithin30daysid; 
ALTER TABLE sbo DROP COLUMN statusatdischarge; 
ALTER TABLE sbo DROP COLUMN sbo_dischargedate; 
ALTER TABLE sbo DROP COLUMN sbo_destinationid; 
ALTER TABLE sbo DROP COLUMN sbo_complicationsid; 

ALTER TABLE lap DROP COLUMN timefromsymptomonset; 
ALTER TABLE lap DROP COLUMN usedpredictionid; 
ALTER TABLE lap DROP COLUMN predictionid; 
ALTER TABLE lap DROP COLUMN predictionscoreid; 
ALTER TABLE lap ADD COLUMN otherindforsurgery VARCHAR(255) AFTER proceduresurgeryindid;
ALTER TABLE lap ADD COLUMN othermainprocedure VARCHAR(255) AFTER proceduremainprocedureid;
ALTER TABLE lap ADD COLUMN othersecondprocedure VARCHAR(255) AFTER proceduresecondprocedureid;
ALTER TABLE lap ADD COLUMN otherthirdprocedure VARCHAR(255) AFTER procedurethirdprocedureid;
ALTER TABLE lap ADD COLUMN otheroperativefindings VARCHAR(255) AFTER procedureoperfindingsid;

ALTER TABLE surgery ADD COLUMN surgerylocum VARCHAR(255) AFTER dispositionsurgeonid;
ALTER TABLE surgery ADD COLUMN otherprocedure VARCHAR(255) AFTER procedureid;
ALTER TABLE surgery ADD COLUMN surgeryconvlcrscopictoopen VARCHAR(255) AFTER findings;
ALTER TABLE surgery ADD COLUMN othercomplication VARCHAR(255) AFTER complicationsid;
ALTER TABLE surgery ADD COLUMN otherfinaldiagnosis VARCHAR(255) AFTER finaldiagnosisid;
ALTER TABLE surgery ADD COLUMN readmittedwithin30daysid VARCHAR(50) AFTER otherfinaldiagnosis;
ALTER TABLE surgery ADD COLUMN statusatdischarge VARCHAR(100) AFTER readmittedwithin30daysid;
ALTER TABLE surgery ADD COLUMN lengthoftotalstay INT AFTER dischargedate;