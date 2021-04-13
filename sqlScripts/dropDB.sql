USE esoap_local

ALTER TABLE demographics DROP COLUMN otherprovisionaldiagnosis;

ALTER TABLE labs DROP COLUMN bp_sys;
ALTER TABLE labs DROP COLUMN bp_dias;
ALTER TABLE labs DROP COLUMN haemolysedid;
ALTER TABLE labs DROP COLUMN bloodcollected;
ALTER TABLE labs DROP COLUMN bp; 

ALTER TABLE rif DROP COLUMN finalaastgradeid;

ALTER TABLE ruq DROP COLUMN prevadmiswithcholid; 
ALTER TABLE ruq DROP COLUMN peritonealcontaminationid; 
ALTER TABLE ruq DROP COLUMN prevadmiswithcholid;

ALTER TABLE imaging DROP COLUMN transabdominalvaginal;
ALTER TABLE imaging DROP COLUMN otherimagingtype;
ALTER TABLE imaging DROP COLUMN daterecwatersolubleagent;

ALTER TABLE sbo DROP COLUMN sbo_otheraetiology;
ALTER TABLE sbo DROP COLUMN sbo_procedure;contrast_date;
ALTER TABLE sbo DROP COLUMN sbo_procedure_date;
ALTER TABLE sbo DROP COLUMN sbo_otherintervention;
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
ALTER TABLE lap DROP COLUMN otherindforsurgery;
ALTER TABLE lap DROP COLUMN othermainprocedure;
ALTER TABLE lap DROP COLUMN othersecondprocedure;
ALTER TABLE lap DROP COLUMN otherthirdprocedure;
ALTER TABLE lap DROP COLUMN otheroperativefindings;

ALTER TABLE surgery DROP COLUMN surgerylocum;
ALTER TABLE surgery DROP COLUMN otherprocedure;
ALTER TABLE surgery DROP COLUMN surgeryconvlcrscopictoopen;
ALTER TABLE surgery DROP COLUMN othercomplication;
ALTER TABLE surgery DROP COLUMN otherfinaldiagnosis;
ALTER TABLE surgery DROP COLUMN readmittedwithin30daysid;
ALTER TABLE surgery DROP COLUMN statusatdischarge;
ALTER TABLE surgery DROP COLUMN lengthoftotalstay;