-- DROP DATABASE `esoap_local`;



CREATE DATABASE IF NOT EXISTS `esoap_local` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `esoap_local`;



CREATE TABLE IF NOT EXISTS accounts (
  id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL UNIQUE,
  password varchar(255) NOT NULL,
  email varchar(50) NOT NULL UNIQUE,
  fname varchar(50),
  lname varchar(50),
  PRIMARY KEY (id)
)ENGINE=InnoDB;

-- INSERT INTO accounts (username, password, email, fname, lname) 
-- VALUES ('admin', 'es0ap', 'admin@blah.com', 'eSOAP', 'administrator'),
-- ('mbroderick11', 'dsfsdfsdfsd!', 'michael.broderick11@blah.ie', 'Michael', 'Broderick'),
-- ('a', 'b', 'a@blah.com', 'eSOAP', 'administrator1');

-- SELECT * FROM accounts;

-- ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
-- ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;


CREATE TABLE IF NOT EXISTS demographics (

userid INT, 
pcn INT,
patientid INT AUTO_INCREMENT PRIMARY KEY,
uniqueid INT,
admissiondate DATE,
age INT,
genderid VARCHAR(20),
consultantdemographicsid VARCHAR(50),
demographicslocum VARCHAR(100),
residencepreadmissionid VARCHAR(50),
presententingcompaintid VARCHAR(500),
otherpresententingcompaintid VARCHAR(500),
provisionaldiagnosisid VARCHAR(255),
otherprovisionaldiagnosis VARCHAR(500),
moduleid VARCHAR(100),
includeinstudyid VARCHAR(10),
FirstAdmitSpecialityId VARCHAR(50),
referredbyid VARCHAR(50),
transportid VARCHAR(50),
registeredtime DATETIME,
registeredtimend VARCHAR(20),
triagetime DATETIME,
triagetimend VARCHAR(20),
timereferred DATETIME,
timereferrednd VARCHAR(20),
timeseen DATETIME,
timeseennd VARCHAR(20),
movedtoid VARCHAR(100),
dispositiondatetime DATETIME,
antibioticsrecordedid VARCHAR(10),
dispositiondatetimend VARCHAR(20),
antibioticsrecordedtimend VARCHAR(20),
antibioticsrecordedtime DATETIME,
dispositionsurgrecordedid VARCHAR(10),
percentComplete INT
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS viewhistory (id INT AUTO_INCREMENT PRIMARY KEY, userid INT, patientid INT, lastviewed DATETIME DEFAULT NOW(), FOREIGN KEY(userid) REFERENCES accounts(id), FOREIGN KEY(patientid) REFERENCES demographics(patientid))ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS labs (
labid INT AUTO_INCREMENT PRIMARY KEY,
patientid INT,
bp_sys DECIMAL(7,2),
bp_dias DECIMAL(7,2),
temperature DECIMAL(7,2),
pulse DECIMAL(7,2),
Rr DECIMAL(7,2),
spo2 DECIMAL(7,2),
comorbiditiesanticoagsid VARCHAR(10),
bloodcollected DATETIME,
bloodcollectednd VARCHAR(20),
wcc DECIMAL(7,2),
hb DECIMAL(7,2),
crp DECIMAL(7,2),
amylase DECIMAL(7,2),
ggt DECIMAL(7,2),
creat DECIMAL(7,2),
inr DECIMAL(7,2),
baseexcess DECIMAL(7,2),
basedeficit DECIMAL(7,2),
lactate DECIMAL(7,2),
haemolysedid VARCHAR(255),
FOREIGN KEY(patientid) REFERENCES demographics(patientid)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS imaging(
imagingid INT AUTO_INCREMENT PRIMARY KEY,
patientid INT,
cxrdatetime DATETIME,
cxrdatetimend VARCHAR(20),
cxrrequested VARCHAR(20),
pfadatetime DATETIME,
pfadatetimend VARCHAR(20),
pfarequested VARCHAR(20),
usid VARCHAR(50),
transabdominalvaginal VARCHAR(100),
usbookeddatetime DATETIME,
usbookeddatetimend VARCHAR(20),
usperformeddatetime DATETIME,
usperformeddatetimend VARCHAR(20),
usreporteddatetime DATETIME,
usreporteddatetimend VARCHAR(20),
ctid VARCHAR(50),
ctbookeddatetime DATETIME,
ctbookeddatetimend VARCHAR(20),
ctperformeddatetime DATETIME,
ctperformeddatetimend VARCHAR(20),
ctreporteddatetime DATETIME,
ctreporteddatetimend VARCHAR(20),
daterecwatersolubleagent DATETIME,
mriid VARCHAR(50),
mribookeddatetime DATETIME,
mribookeddatetimend VARCHAR(20),
mriperformeddatetime DATETIME,
mriperformeddatetimend VARCHAR(20),
mrireporteddatetime DATETIME,
mrireporteddatetimend VARCHAR(20),
otherimageid VARCHAR(50),
otherimagingtype VARCHAR(100),
otherimagebookeddatetime DATETIME,
otherimagebookeddatetimend VARCHAR(20),
otherimageperformeddatetime DATETIME,
otherimageperformeddatetimend VARCHAR(20),
otherimagereporteddatetime DATETIME,
otherimagereporteddatetimend VARCHAR(20),
FOREIGN KEY(patientid) REFERENCES demographics(patientid)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS surgery(
surgeryid INT AUTO_INCREMENT PRIMARY KEY,
patientid INT,
dateofsurgery DATETIME,
dateofsurgerynd VARCHAR(20),
surgeryinductiontime DATETIME,
surgeryinductiontimend VARCHAR(20),
asascoreid VARCHAR(50),
dispositionsurgeonid VARCHAR(50),
surgerylocum VARCHAR(255),
procedurecategory VARCHAR(255),
procedureid VARCHAR(255),
otherprocedure VARCHAR(3000),
findings VARCHAR(3000),
surgeryconvlcrscopictoopen VARCHAR(255),
destinationid VARCHAR(150),
complicationsid VARCHAR(255),
othercomplication VARCHAR(255),
complicclassificationid VARCHAR(50),
finaldiagnosisid VARCHAR(255),
otherfinaldiagnosis VARCHAR(255),
readmittedwithin30daysid VARCHAR(50),
statusatdischarge VARCHAR(100),
dischargedate DATE,
dischargedatend VARCHAR(20),
lengthoftotalstay INT,
FOREIGN KEY(patientid) REFERENCES demographics(patientid)
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS rif(

id INT PRIMARY KEY AUTO_INCREMENT,
patientid INT,
histabdominalsurgeryid	VARCHAR(10),
prevadmiswithrifpainid	VARCHAR(10),
hrsdayssincepainonsetid	VARCHAR(10),
neutrophilcount	DECIMAL(7,2),
rifpainid	VARCHAR(10),
migrationofpaintorifid	VARCHAR(10),
tenderid	VARCHAR(10),
guardingid	VARCHAR(10),
reboundtendernessid	VARCHAR(10),
rigidityid	VARCHAR(10),
rovsingssignid	VARCHAR(10),
riskscoreid	VARCHAR(50),
riskscore	INT,
imagingfindingsid	VARCHAR(155),
interventionalradiology	VARCHAR(10),
rifsurgeryid	VARCHAR(10),
appendicitisgradingid	VARCHAR(20),
drainid	VARCHAR(10),
FOREIGN KEY(patientid) REFERENCES demographics(patientid)
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS sbo(

id INT PRIMARY KEY AUTO_INCREMENT,
patientid INT,
sbo_comorbiditiesid	VARCHAR(100),
sbo_onsetvomitting	DATETIME,
sbo_onsetvomittingnd VARCHAR(20),
sbo_initialmgmtstrategyid	VARCHAR(50),
albumin	DECIMAL(7,2),
sbo_contrast_agent	VARCHAR(10),
sbo_procedure VARCHAR(200),
sbo_procedure_date VARCHAR(200),
sbo_procedure_datend VARCHAR(20),
sbo_Aetiology	VARCHAR(100),
sbo_otheraetiology VARCHAR(200),
sbo_surgery	VARCHAR(10),
sbointerventionid	VARCHAR(255),
sbo_otherintervention VARCHAR(200),
enteralnutritiondate	DATETIME,
enteralnutritiondatend VARCHAR(20),
FOREIGN KEY(patientid) REFERENCES demographics(patientid)
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS ruq(
id INT PRIMARY KEY AUTO_INCREMENT,
patientid INT,
dayssincepainonsetid VARCHAR(10),
firstepisodeid VARCHAR(10),
prevadmiswithcholid	VARCHAR(10),
alt	DECIMAL(7,2),
ast	DECIMAL(7,2),
alkalinephosphatase	DECIMAL(7,2),
totalbilirubin	DECIMAL(7,2),
rmurphyssignpositiveid	VARCHAR(10),
ruq_jaundiceid	VARCHAR(10),
ruq_rigorsid	VARCHAR(10),
lowerabdominalsignsid	VARCHAR(10),
confusionid	VARCHAR(10),
ercpid	VARCHAR(10),
ercpfindings	VARCHAR(3000),
cholangiographyid	VARCHAR(20),
gallbladdergradingid	VARCHAR(20),
postoperativedrainid	VARCHAR(20),
bileleakid	VARCHAR(20),
lengthofpostoperativestay	INT,
unplanmove7daysid	VARCHAR(10),
FOREIGN KEY(patientid) REFERENCES demographics(patientid)
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS lap(
id INT PRIMARY KEY AUTO_INCREMENT,
patientid INT,
usedfrailtyid	VARCHAR(10),
frailtyid	VARCHAR(50),
frailtyscoreid	INT,
seniorsurgeonid	VARCHAR(20),
presentconsultantid	VARCHAR(50),
lap_locum_name	VARCHAR(50),
procedurefirstprocedureid	VARCHAR(400),
proceduresurgeryindid	VARCHAR(400),
otherindforsurgery VARCHAR(400),
proceduremainprocedureid	VARCHAR(400),
othermainprocedure VARCHAR(400),
proceduresecondprocedureid	VARCHAR(400),
othersecondprocedure VARCHAR(400),
procedurethirdprocedureid	VARCHAR(400),
otherthirdprocedure VARCHAR(400),
procedureprocapproachid	VARCHAR(50),
procedureoperfindingsid	VARCHAR(150),
otheroperativefindings VARCHAR(400),
procedureperitonealcontid	VARCHAR(150),
procedurecontaminationid	VARCHAR(100),
abdomentleftopen	VARCHAR(10),
Intermittentpertfluidused	VARCHAR(10),
negpressuredressingused	VARCHAR(10),
openabdomendocumented	VARCHAR(10),
postopcritcalcarestaylen	VARCHAR(150),
postopassesbyspecid	VARCHAR(10),
unplannedorplannedreturnid	VARCHAR(50),
indunplannedreturnid	VARCHAR(100),
indplannedreturnid	VARCHAR(250),
isunplannedmove	VARCHAR(10),
FOREIGN KEY(patientid) REFERENCES demographics(patientid)
)ENGINE=InnoDB;