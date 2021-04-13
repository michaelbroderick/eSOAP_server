DROP DATABASE `esoap_local`;

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

INSERT INTO accounts (username, password, email, fname, lname) 
VALUES ('admin', 'es0ap', 'admin@blah.com', 'eSOAP', 'administrator'),
('mbroderick11', 'dsfsdfsdfsd!', 'michael.broderick11@blah.ie', 'Michael', 'Broderick'),
('a', 'b', 'a@blah.com', 'eSOAP', 'administrator');

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
demographicslocum VARCHAR(255),
residencepreadmissionid VARCHAR(50),
presententingcompaintid VARCHAR(255),
otherpresententingcompaintid VARCHAR(255),
provisionaldiagnosisid VARCHAR(255),
moduleid VARCHAR(100),
includeinstudyid VARCHAR(3),
FirstAdmitSpecialityId VARCHAR(50),
referredbyid VARCHAR(50),
transportid VARCHAR(50),
registeredtime DATETIME,
triagetime DATETIME,
timereferred DATETIME,
timeseen DATETIME,
movedtoid VARCHAR(100),
dispositiondatetime DATETIME,
antibioticsrecordedid VARCHAR(3),
antibioticsrecordedtime DATETIME,
dispositionsurgrecordedid VARCHAR(3),
percentComplete INT,
FOREIGN KEY(userid) REFERENCES accounts(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS labs (
labid INT AUTO_INCREMENT PRIMARY KEY,
patientid INT,
bp DECIMAL(7,2),
temperature DECIMAL(7,2),
pulse DECIMAL(7,2),
Rr DECIMAL(7,2),
spo2 DECIMAL(7,2),
comorbiditiesanticoagsid VARCHAR(3),
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
FOREIGN KEY(patientid) REFERENCES demographics(patientid)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS imaging(
imagingid INT AUTO_INCREMENT PRIMARY KEY,
patientid INT,
cxrdatetime DATETIME,
pfadatetime DATETIME,
usid VARCHAR(50),
usbookeddatetime DATETIME,
usperformeddatetime DATETIME,
usreporteddatetime DATETIME,
ctid VARCHAR(50),
ctbookeddatetime DATETIME,
ctperformeddatetime DATETIME,
ctreporteddatetime DATETIME,
mriid VARCHAR(50),
mribookeddatetime DATETIME,
mriperformeddatetime DATETIME,
mrireporteddatetime DATETIME,
otherimageid VARCHAR(50),
otherimagebookeddatetime DATETIME,
otherimageperformeddatetime DATETIME,
otherimagereporteddatetime DATETIME,
FOREIGN KEY(patientid) REFERENCES demographics(patientid)
)ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS surgery(
surgeryid INT AUTO_INCREMENT PRIMARY KEY,
patientid INT,
dateofsurgery DATETIME,
surgeryinductiontime DATETIME,
asascoreid VARCHAR(50),
dispositionsurgeonid VARCHAR(50),
procedurecategory VARCHAR(255),
procedureid VARCHAR(255),
findings VARCHAR(255),
destinationid VARCHAR(150),
complicationsid VARCHAR(255),
complicclassificationid VARCHAR(50),
finaldiagnosisid VARCHAR(255),
dischargedate DATE,
FOREIGN KEY(patientid) REFERENCES demographics(patientid)
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS rif(

id INT PRIMARY KEY AUTO_INCREMENT,
patientid INT,
histabdominalsurgeryid	VARCHAR(3),
prevadmiswithrifpainid	VARCHAR(3),
hrsdayssincepainonsetid	VARCHAR(10),
neutrophilcount	DECIMAL(7,2),
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
finalaastgradeid	VARCHAR(20),
FOREIGN KEY(patientid) REFERENCES demographics(patientid)
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS sbo(

id INT PRIMARY KEY AUTO_INCREMENT,
patientid INT,
sbo_comorbiditiesid	VARCHAR(100),
sbo_onsetvomitting	DATETIME,
sbo_initialmgmtstrategyid	VARCHAR(50),
albumin	DECIMAL(7,2),
sbo_abdoXray	VARCHAR(3),
sbo_abdoXray_date	DATETIME,
sbo_ct	VARCHAR(3),
sbo_ct_date	DATETIME,
sbo_contrast_agent	VARCHAR(3),
sbo_contrast_date	DATETIME,
sbo_Aetiology	VARCHAR(100),
sbo_surgery	VARCHAR(3),
sbo_surgery_date	DATETIME,
sbointerventionid	VARCHAR(255),
enteralnutritiondate	DATETIME,
statusatdischarge	VARCHAR(3),
sbo_dischargedate	DATETIME,
readmittedwithin30daysid	VARCHAR(3),
sbo_destinationid	VARCHAR(50),
sbo_complicationsid	VARCHAR(255),
FOREIGN KEY(patientid) REFERENCES demographics(patientid)
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS ruq(
id INT PRIMARY KEY AUTO_INCREMENT,
patientid INT,
dayssincepainonsetid VARCHAR(10),
firstepisodeid VARCHAR(3),
prevadmiswithcholid	VARCHAR(3),
alt	DECIMAL(7,2),
ast	DECIMAL(7,2),
alkalinephosphatase	DECIMAL(7,2),
totalbilirubin	DECIMAL(7,2),
rmurphyssignpositiveid	VARCHAR(3),
ruq_jaundiceid	VARCHAR(3),
ruq_rigorsid	VARCHAR(3),
lowerabdominalsignsid	VARCHAR(3),
confusionid	VARCHAR(3),
ercpid	VARCHAR(3),
ercpfindings	VARCHAR(255),
peritonealcontaminationid	VARCHAR(20),
cholangiographyid	VARCHAR(3),
gallbladdergradingid	VARCHAR(20),
postoperativedrainid	VARCHAR(3),
bileleakid	VARCHAR(20),
lengthofpostoperativestay	INT,
unplanmove7daysid	VARCHAR(3),
FOREIGN KEY(patientid) REFERENCES demographics(patientid)
)ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS lap(
id INT PRIMARY KEY AUTO_INCREMENT,
patientid INT,
timefromsymptomonset VARCHAR(15),
usedfrailtyid VARCHAR(3),
frailtyid VARCHAR(50),
frailtyscoreid INT,
usedpredictionid VARCHAR(3),
predictionid VARCHAR(50),
predictionscoreid INT,
seniorsurgeonid VARCHAR(20),
presentconsultantid VARCHAR(50),
lap_locum_name VARCHAR(50),
procedurefirstprocedureid VARCHAR(255),
proceduresurgeryindid VARCHAR(255),
proceduremainprocedureid VARCHAR(255),
proceduresecondprocedureid VARCHAR(255),
procedurethirdprocedureid VARCHAR(255),
procedureprocapproachid VARCHAR(50),
procedureoperfindingsid VARCHAR(150),
procedureperitonealcontid VARCHAR(150),
procedurecontaminationid VARCHAR(100),
abdomentleftopen VARCHAR(10),
Intermittentpertfluidused VARCHAR(3),
negpressuredressingused VARCHAR(3),
openabdomendocumented VARCHAR(3),
postopcritcalcarestaylen VARCHAR(150),
postopassesbyspecid VARCHAR(3),
unplannedorplannedreturnid VARCHAR(50),
indunplannedreturnid VARCHAR(100),
indplannedreturnid VARCHAR(250),
isunplannedmove VARCHAR(3),
FOREIGN KEY(patientid) REFERENCES demographics(patientid)
)ENGINE=InnoDB;