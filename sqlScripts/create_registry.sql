-- DROP DATABASE `esoap_global`;

CREATE DATABASE IF NOT EXISTS `esoap_global` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `esoap_global`;



CREATE TABLE IF NOT EXISTS demographics (

userid INT, 
registryid INT AUTO_INCREMENT PRIMARY KEY,
patientid INT,
uniqueid INT,
admissiondate DATE,
age INT,
genderid VARCHAR(20),
consultantdemographicsid VARCHAR(50),
demographicslocum VARCHAR(30),
residencepreadmissionid VARCHAR(50),
presententingcompaintid VARCHAR(500),
otherpresententingcompaintid VARCHAR(500),
provisionaldiagnosisid VARCHAR(255),
otherprovisionaldiagnosis VARCHAR(500)
moduleid VARCHAR(100),
includeinstudyid VARCHAR(3),
FirstAdmitSpecialityId VARCHAR(50),
referredbyid VARCHAR(50),
transportid VARCHAR(50),
registeredtime DATETIME,
registeredtimend VARCHAR(20),
triagetime DATETIME,
triagetimend VARCHAR(20)
timereferred DATETIME,
timereferrednd VARCHAR(20),
timeseen DATETIME,
timeseennd VARCHAR(20),
movedtoid VARCHAR(100),
dispositiondatetime DATETIME,
antibioticsrecordedid VARCHAR(3),
dispositiondatetimend VARCHAR(20),
antibioticsrecordedtimend VARCHAR(20),
antibioticsrecordedtime DATETIME,
dispositionsurgrecordedid VARCHAR(3),
percentComplete INT
) ENGINE=InnoDB;



CREATE TABLE IF NOT EXISTS labs (
labid INT AUTO_INCREMENT PRIMARY KEY,
registryid INT,
bp_sys DECIMAL(7,2),
bp_dias DECIMAL(7,2),
temperature DECIMAL(7,2),
pulse DECIMAL(7,2),
Rr DECIMAL(7,2),
spo2 DECIMAL(7,2),
comorbiditiesanticoagsid VARCHAR(3),
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
FOREIGN KEY(registryid) REFERENCES demographics(registryid)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS imaging(
imagingid INT AUTO_INCREMENT PRIMARY KEY,
registryid INT,
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
FOREIGN KEY(registryid) REFERENCES demographics(registryid)
)ENGINE=InnoDB;



CREATE TABLE IF NOT EXISTS surgery(
surgeryid INT AUTO_INCREMENT PRIMARY KEY,
registryid INT,
dateofsurgery DATETIME,
dateofsurgerynd VARCHAR(20),
surgeryinductiontime DATETIME,
surgeryinductiontimend VARCHAR(20),
asascoreid VARCHAR(50),
dispositionsurgeonid VARCHAR(50),
surgerylocum VARCHAR(255),
procedurecategory VARCHAR(255),
procedureid VARCHAR(255),
otherprocedure VARCHAR(255),
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
FOREIGN KEY(registryid) REFERENCES demographics(registryid)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS rif(

id INT PRIMARY KEY AUTO_INCREMENT,
registryid INT,
histabdominalsurgeryid	VARCHAR(3),
prevadmiswithrifpainid	VARCHAR(3),
hrsdayssincepainonsetid	VARCHAR(10),
neutrophilcount	DECIMAL(5,2),
rifpainid	VARCHAR(3),
migrationofpaintorifid	VARCHAR(3),
tenderid	VARCHAR(3),
guardingid	VARCHAR(3),
reboundtendernessid	VARCHAR(3),
rigidityid	VARCHAR(3),
rovsingssignid	VARCHAR(3),
riskscoreid	VARCHAR(50),
riskscore	INT,
imagingfindingsid	VARCHAR(155),
interventionalradiology	VARCHAR(3),
rifsurgeryid	VARCHAR(3),
appendicitisgradingid	VARCHAR(20),
drainid	VARCHAR(3),
FOREIGN KEY(registryid) REFERENCES demographics(registryid)
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS sbo(

id INT PRIMARY KEY AUTO_INCREMENT,
registryid INT,
sbo_comorbiditiesid	VARCHAR(100),
sbo_onsetvomitting	DATETIME,
sbo_onsetvomittingnd VARCHAR(20),
sbo_initialmgmtstrategyid	VARCHAR(50),
albumin	DECIMAL(5,2),
sbo_contrast_agent	VARCHAR(3),
sbo_procedure VARCHAR(200),
sbo_procedure_date VARCHAR(200),
sbo_procedure_datend VARCHAR(20),
sbo_Aetiology	VARCHAR(100),
sbo_otheraetiology VARCHAR(200),
sbo_surgery	VARCHAR(3),
sbointerventionid	VARCHAR(255),
sbo_otherintervention VARCHAR(200),
enteralnutritiondate	DATETIME,
enteralnutritiondatend VARCHAR(20),
statusatdischarge	VARCHAR(3),
readmittedwithin30daysid	VARCHAR(3),
FOREIGN KEY(registryid) REFERENCES demographics(registryid)
)ENGINE=InnoDB;



CREATE TABLE IF NOT EXISTS ruq(
id INT PRIMARY KEY AUTO_INCREMENT,
registryid INT,
dayssincepainonsetid VARCHAR(10),
firstepisodeid VARCHAR(3),
prevadmiswithcholid	VARCHAR(10),
alt	DECIMAL(5,2),
ast	DECIMAL(5,2),
alkalinephosphatase	DECIMAL(5,2),
totalbilirubin	DECIMAL(5,2),
rmurphyssignpositiveid	VARCHAR(3),
ruq_jaundiceid	VARCHAR(3),
ruq_rigorsid	VARCHAR(3),
lowerabdominalsignsid	VARCHAR(3),
confusionid	VARCHAR(3),
ercpid	VARCHAR(3),
ercpfindings	VARCHAR(255),
cholangiographyid	VARCHAR(3),
gallbladdergradingid	VARCHAR(20),
postoperativedrainid	VARCHAR(20),
bileleakid	VARCHAR(20),
lengthofpostoperativestay	INT,
unplanmove7daysid	VARCHAR(3),
FOREIGN KEY(registryid) REFERENCES demographics(registryid)
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS lap(
id INT PRIMARY KEY AUTO_INCREMENT,
registryid INT,
usedfrailtyid	VARCHAR(3),
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
Intermittentpertfluidused	VARCHAR(3),
negpressuredressingused	VARCHAR(3),
openabdomendocumented	VARCHAR(3),
postopcritcalcarestaylen	VARCHAR(150),
postopassesbyspecid	VARCHAR(3),
unplannedorplannedreturnid	VARCHAR(50),
indunplannedreturnid	VARCHAR(100),
indplannedreturnid	VARCHAR(250),
isunplannedmove	VARCHAR(3),
FOREIGN KEY(registryid) REFERENCES demographics(registryid)
)ENGINE=InnoDB;