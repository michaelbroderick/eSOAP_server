-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 12, 2021 at 08:48 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `esoap_local`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fname` varchar(50) DEFAULT NULL,
  `lname` varchar(50) DEFAULT NULL,
  `emailID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `emailID` (`emailID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `authorisedemails`
--

DROP TABLE IF EXISTS `authorisedemails`;
CREATE TABLE IF NOT EXISTS `authorisedemails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `accessLevel` int(11) NOT NULL,
  `registered` varchar(10) DEFAULT 'No',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `authorisedemails`
--

INSERT INTO `authorisedemails` (`id`, `email`, `accessLevel`, `registered`) VALUES
(1, 'brodermi@tcd.ie', 1, 'No'),
(2, 'michaelsugrue@gmail.com', 1, 'No'),
(3, 'carolann.walker@hse.ie', 2, 'No'),
(4, 'rita.marren@hse.ie', 2, 'No'),
(5, 'louise.flanagan@hse.ie', 2, 'No'),
(6, 'alison.johnston@hse.ie', 2, 'No');

-- --------------------------------------------------------

--
-- Table structure for table `clinical_decision`
--

DROP TABLE IF EXISTS `clinical_decision`;
CREATE TABLE IF NOT EXISTS `clinical_decision` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdat` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `flowid` int(11) DEFAULT NULL,
  `clinicaldiagnosis` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `flowid` (`flowid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `criteria`
--

DROP TABLE IF EXISTS `criteria`;
CREATE TABLE IF NOT EXISTS `criteria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `module` varchar(100) DEFAULT NULL,
  `groupnum` int(11) DEFAULT NULL,
  `crit` varchar(200) DEFAULT NULL,
  `class` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `criteria`
--

INSERT INTO `criteria` (`id`, `module`, `groupnum`, `crit`, `class`) VALUES
(1, 'rif', 0, 'Normal Bloods', 'show'),
(2, 'rif', 0, 'AIR &#60 5', 'Adult Inflammatory Score (AIR)'),
(3, 'rif', 0, 'AAS &#8804 10', 'Adult Appendicitis Score (AAS)'),
(4, 'rif', 0, 'SHERA F(5-15yrs) &#8804 3', 'SHERA'),
(5, 'rif', 0, 'SHERA M(5-10yrs) &#8804 3', 'SHERA'),
(6, 'rif', 0, 'SHERA M(11-15yrs) &#8804 2', 'SHERA'),
(7, 'rif', 1, 'Tender', 'show'),
(8, 'rif', 1, 'Guarding', 'show'),
(9, 'rif', 1, 'Rigidity', 'show'),
(10, 'rif', 1, 'Rebound RIF', 'show'),
(11, 'rif', 1, 'WCC &#62 13000', 'show'),
(12, 'rif', 1, 'CRP &#62 10', 'show'),
(13, 'rif', 1, 'AIR: 5-8', 'Adult Inflammatory Score (AIR)'),
(14, 'rif', 1, 'AAS 11-15', 'Adult Appendicitis Score (AAS)'),
(15, 'rif', 2, 'Tender', 'show'),
(16, 'rif', 2, 'Guarding', 'show'),
(17, 'rif', 2, 'Rigidity', 'show'),
(18, 'rif', 2, 'Rebound RIF', 'show'),
(19, 'rif', 2, 'WCC &#62 15000', 'show'),
(20, 'rif', 2, 'CRP &#62 20', 'show'),
(21, 'rif', 2, 'AIR &#62 8', 'Adult Inflammatory Score (AIR)'),
(22, 'rif', 2, 'AAS &#8805 16', 'Adult Appendicitis Score (AAS)'),
(23, 'rif', 2, 'SHERA &#62 3', 'SHERA'),
(24, 'rif', 3, 'Tender', 'show'),
(25, 'rif', 3, 'Guarding', 'show'),
(26, 'rif', 3, 'Rigidity', 'show'),
(27, 'rif', 3, 'Rebound RIF', 'show'),
(28, 'rif', 3, 'Palpable Mass', 'show'),
(29, 'rif', 3, 'High WCC, CRP', 'show'),
(30, 'rif', 3, 'Duration of sympotms &#62 48hrs', 'show'),
(31, 'rif', 4, 'Tender', 'show'),
(32, 'rif', 4, 'Guarding', 'show'),
(33, 'rif', 4, 'Rigidity Entire Abdomen', 'show'),
(34, 'rif', 4, 'High WCC, CRP', 'show');

-- --------------------------------------------------------

--
-- Table structure for table `demographics`
--

DROP TABLE IF EXISTS `demographics`;
CREATE TABLE IF NOT EXISTS `demographics` (
  `userid` int(11) DEFAULT NULL,
  `pcn` int(11) DEFAULT NULL,
  `patientid` int(11) NOT NULL AUTO_INCREMENT,
  `uniqueid` int(11) DEFAULT NULL,
  `admissiondate` date DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `genderid` varchar(20) DEFAULT NULL,
  `consultantdemographicsid` varchar(50) DEFAULT NULL,
  `demographicslocum` varchar(100) DEFAULT NULL,
  `residencepreadmissionid` varchar(50) DEFAULT NULL,
  `presententingcompaintid` varchar(500) DEFAULT NULL,
  `otherpresententingcompaintid` varchar(500) DEFAULT NULL,
  `provisionaldiagnosisid` varchar(255) DEFAULT NULL,
  `otherprovisionaldiagnosis` varchar(500) DEFAULT NULL,
  `moduleid` varchar(100) DEFAULT NULL,
  `includeinstudyid` varchar(10) DEFAULT NULL,
  `FirstAdmitSpecialityId` varchar(50) DEFAULT NULL,
  `referredbyid` varchar(50) DEFAULT NULL,
  `transportid` varchar(50) DEFAULT NULL,
  `registeredtime` datetime DEFAULT NULL,
  `registeredtimend` varchar(20) DEFAULT NULL,
  `triagetime` datetime DEFAULT NULL,
  `triagetimend` varchar(20) DEFAULT NULL,
  `timereferred` datetime DEFAULT NULL,
  `timereferrednd` varchar(20) DEFAULT NULL,
  `timeseen` datetime DEFAULT NULL,
  `timeseennd` varchar(20) DEFAULT NULL,
  `movedtoid` varchar(100) DEFAULT NULL,
  `dispositiondatetime` datetime DEFAULT NULL,
  `antibioticsrecordedid` varchar(10) DEFAULT NULL,
  `dispositiondatetimend` varchar(20) DEFAULT NULL,
  `antibioticsrecordedtimend` varchar(20) DEFAULT NULL,
  `antibioticsrecordedtime` datetime DEFAULT NULL,
  `dispositionsurgrecordedid` varchar(10) DEFAULT NULL,
  `percentComplete` int(11) DEFAULT NULL,
  PRIMARY KEY (`patientid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `flowchart_vars`
--

DROP TABLE IF EXISTS `flowchart_vars`;
CREATE TABLE IF NOT EXISTS `flowchart_vars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patientid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `moduleid` varchar(100) DEFAULT NULL,
  `createdat` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `age` int(11) DEFAULT NULL,
  `genderid` varchar(20) DEFAULT NULL,
  `symptomduration` int(11) DEFAULT NULL,
  `wcc` decimal(7,2) DEFAULT NULL,
  `crp` decimal(7,2) DEFAULT NULL,
  `tenderid` varchar(10) DEFAULT NULL,
  `guardingid` varchar(10) DEFAULT NULL,
  `reboundtendernessid` varchar(10) DEFAULT NULL,
  `rigidityid` varchar(10) DEFAULT NULL,
  `rifpainid` varchar(10) DEFAULT NULL,
  `palpablemassid` varchar(10) DEFAULT NULL,
  `rigidityentire` varchar(10) DEFAULT NULL,
  `riskscoreid` varchar(50) DEFAULT NULL,
  `riskscore` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `patientid` (`patientid`),
  KEY `userid` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `imaging`
--

DROP TABLE IF EXISTS `imaging`;
CREATE TABLE IF NOT EXISTS `imaging` (
  `imagingid` int(11) NOT NULL AUTO_INCREMENT,
  `patientid` int(11) DEFAULT NULL,
  `cxrdatetime` datetime DEFAULT NULL,
  `cxrdatetimend` varchar(20) DEFAULT NULL,
  `cxrrequested` varchar(20) DEFAULT NULL,
  `pfadatetime` datetime DEFAULT NULL,
  `pfadatetimend` varchar(20) DEFAULT NULL,
  `pfarequested` varchar(20) DEFAULT NULL,
  `usid` varchar(50) DEFAULT NULL,
  `transabdominalvaginal` varchar(100) DEFAULT NULL,
  `usbookeddatetime` datetime DEFAULT NULL,
  `usbookeddatetimend` varchar(20) DEFAULT NULL,
  `usperformeddatetime` datetime DEFAULT NULL,
  `usperformeddatetimend` varchar(20) DEFAULT NULL,
  `usreporteddatetime` datetime DEFAULT NULL,
  `usreporteddatetimend` varchar(20) DEFAULT NULL,
  `ctid` varchar(50) DEFAULT NULL,
  `ctbookeddatetime` datetime DEFAULT NULL,
  `ctbookeddatetimend` varchar(20) DEFAULT NULL,
  `ctperformeddatetime` datetime DEFAULT NULL,
  `ctperformeddatetimend` varchar(20) DEFAULT NULL,
  `ctreporteddatetime` datetime DEFAULT NULL,
  `ctreporteddatetimend` varchar(20) DEFAULT NULL,
  `daterecwatersolubleagent` datetime DEFAULT NULL,
  `mriid` varchar(50) DEFAULT NULL,
  `mribookeddatetime` datetime DEFAULT NULL,
  `mribookeddatetimend` varchar(20) DEFAULT NULL,
  `mriperformeddatetime` datetime DEFAULT NULL,
  `mriperformeddatetimend` varchar(20) DEFAULT NULL,
  `mrireporteddatetime` datetime DEFAULT NULL,
  `mrireporteddatetimend` varchar(20) DEFAULT NULL,
  `otherimageid` varchar(50) DEFAULT NULL,
  `otherimagingtype` varchar(100) DEFAULT NULL,
  `otherimagebookeddatetime` datetime DEFAULT NULL,
  `otherimagebookeddatetimend` varchar(20) DEFAULT NULL,
  `otherimageperformeddatetime` datetime DEFAULT NULL,
  `otherimageperformeddatetimend` varchar(20) DEFAULT NULL,
  `otherimagereporteddatetime` datetime DEFAULT NULL,
  `otherimagereporteddatetimend` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`imagingid`),
  KEY `patientid` (`patientid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `kois`
--

DROP TABLE IF EXISTS `kois`;
CREATE TABLE IF NOT EXISTS `kois` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `module` varchar(100) DEFAULT NULL,
  `koi` varchar(255) DEFAULT NULL,
  `koicategory` varchar(100) DEFAULT NULL,
  `koitarget` int(11) DEFAULT NULL,
  `koiscore` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `kois`
--

INSERT INTO `kois` (`id`, `module`, `koi`, `koicategory`, `koitarget`, `koiscore`) VALUES
(1, 'Small Bowel Obstruction', 'Enrolment of patient on pathway in ED before leaving for the ward.', 'Care Process', 100, NULL),
(2, 'Small Bowel Obstruction', 'Complicated SBO (WCC >20, CRP >150, tenderness with guarding and rebound on abdominal exam) seen by consultant within 2 hours of surgical review documented in proforma/chart.', 'Care Process', 90, NULL),
(3, 'Small Bowel Obstruction', 'Complicated SBO to have CT abdomen with contrast performed within 4 hours of surgical review.', 'Care Process', 80, NULL),
(4, 'Small Bowel Obstruction', 'Gastrografin (100ml, undiluated po/via nasogastric tube) given within 24 hours of admission for SBO that is unresolved by the next day of admission.', 'Care Process', 90, NULL),
(5, 'Small Bowel Obstruction', 'Persistent SBO operated on before 4 days have elapsed, or <72hrs for those coming to surgery.', 'Surgical Outcomes', 90, NULL),
(6, 'Small Bowel Obstruction', 'Complicated obstruction with peritonitis/strangulated hernia have surgery <4hrs from surgical referral.', 'Surgical Outcomes', 90, NULL),
(7, 'Small Bowel Obstruction', 'Patients post laparotomy admitted to HDU/ICU', 'Surgical Outcomes', 90, NULL),
(8, 'Small Bowel Obstruction', 'Laparotomy closure bundle used with wound/suture ratio measured and documented in operative notes.', 'Surgical Outcomes', 90, NULL),
(9, 'Small Bowel Obstruction', 'In-hospital wound complications <10%.', 'Adverse Events', 100, NULL),
(10, 'Small Bowel Obstruction', 'Plain abdominal X-Ray not performed in the emergency department phase.', 'Resource Use', 80, NULL),
(11, 'Small Bowel Obstruction', 'No readmission to hospital within 90 days.', 'Resource Use', 90, NULL),
(12, 'RUQ & Cholecystitis', 'Abdominal US should be completed with 24 hours of admission', 'Care Process', 90, NULL),
(13, 'RUQ & Cholecystitis', 'Patients with radiologically proven choledocholithiasis should have ERCP within 72hrs of admission', 'Care Process', 80, NULL),
(14, 'RUQ & Cholecystitis', 'Patients admitted with acute cholecystitis should undergo surgery within 6 days of symptom onset and within 3 days of admission', 'Surgical Outcomes', 60, NULL),
(15, 'RUQ & Cholecystitis', 'For those where a decision to perform interval cholecystectomy has been made this should be completed with 3 months', 'Surgical Outcomes', 90, NULL),
(16, 'RUQ & Cholecystitis', 'Bile Leak  <2%', 'Adverse Events', 100, NULL),
(17, 'RUQ & Cholecystitis', 'No re-admission following either cholecystectomy, cholecystostomy or ERCP', 'Resource Use', 90, NULL),
(18, 'RIF Pain & Appendicitis', 'Enrolment of Patient to pathway before leaving Emergency', 'Care Process', 90, NULL),
(19, 'RIF Pain & Appendicitis', 'Patients with Grade 5 appendicitis should have surgery in <12 hours of initial surgical review in ED', 'Care Process', 90, NULL),
(20, 'RIF Pain & Appendicitis', 'RIF pain patients should have a appendicitis risk score documented on the admissions proforma', 'Care Process', 90, NULL),
(21, 'RIF Pain & Appendicitis', 'Laparoscopic surgical approach', 'Surgical Outcomes', 90, NULL),
(22, 'RIF Pain & Appendicitis', 'No Laparoscopic conversion', 'Surgical Outcomes', 97, NULL),
(23, 'RIF Pain & Appendicitis', 'No negative appendectomy', 'Surgical Outcomes', 90, NULL),
(24, 'RIF Pain & Appendicitis', 'No re-admission to hospital within 30 days following appendectomy', 'Adverse Events', 95, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `labs`
--

DROP TABLE IF EXISTS `labs`;
CREATE TABLE IF NOT EXISTS `labs` (
  `labid` int(11) NOT NULL AUTO_INCREMENT,
  `patientid` int(11) DEFAULT NULL,
  `bp_sys` decimal(7,2) DEFAULT NULL,
  `bp_dias` decimal(7,2) DEFAULT NULL,
  `temperature` decimal(7,2) DEFAULT NULL,
  `pulse` decimal(7,2) DEFAULT NULL,
  `Rr` decimal(7,2) DEFAULT NULL,
  `spo2` decimal(7,2) DEFAULT NULL,
  `comorbiditiesanticoagsid` varchar(10) DEFAULT NULL,
  `bloodcollected` datetime DEFAULT NULL,
  `bloodcollectednd` varchar(20) DEFAULT NULL,
  `wcc` decimal(7,2) DEFAULT NULL,
  `hb` decimal(7,2) DEFAULT NULL,
  `crp` decimal(7,2) DEFAULT NULL,
  `amylase` decimal(7,2) DEFAULT NULL,
  `ggt` decimal(7,2) DEFAULT NULL,
  `creat` decimal(7,2) DEFAULT NULL,
  `inr` decimal(7,2) DEFAULT NULL,
  `baseexcess` decimal(7,2) DEFAULT NULL,
  `basedeficit` decimal(7,2) DEFAULT NULL,
  `lactate` decimal(7,2) DEFAULT NULL,
  `haemolysedid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`labid`),
  KEY `patientid` (`patientid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lap`
--

DROP TABLE IF EXISTS `lap`;
CREATE TABLE IF NOT EXISTS `lap` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patientid` int(11) DEFAULT NULL,
  `usedfrailtyid` varchar(10) DEFAULT NULL,
  `frailtyid` varchar(50) DEFAULT NULL,
  `frailtyscoreid` int(11) DEFAULT NULL,
  `seniorsurgeonid` varchar(20) DEFAULT NULL,
  `presentconsultantid` varchar(50) DEFAULT NULL,
  `lap_locum_name` varchar(50) DEFAULT NULL,
  `procedurefirstprocedureid` varchar(400) DEFAULT NULL,
  `proceduresurgeryindid` varchar(400) DEFAULT NULL,
  `otherindforsurgery` varchar(400) DEFAULT NULL,
  `proceduremainprocedureid` varchar(400) DEFAULT NULL,
  `othermainprocedure` varchar(400) DEFAULT NULL,
  `proceduresecondprocedureid` varchar(400) DEFAULT NULL,
  `othersecondprocedure` varchar(400) DEFAULT NULL,
  `procedurethirdprocedureid` varchar(400) DEFAULT NULL,
  `otherthirdprocedure` varchar(400) DEFAULT NULL,
  `procedureprocapproachid` varchar(50) DEFAULT NULL,
  `procedureoperfindingsid` varchar(150) DEFAULT NULL,
  `otheroperativefindings` varchar(400) DEFAULT NULL,
  `procedureperitonealcontid` varchar(150) DEFAULT NULL,
  `procedurecontaminationid` varchar(100) DEFAULT NULL,
  `abdomentleftopen` varchar(10) DEFAULT NULL,
  `Intermittentpertfluidused` varchar(10) DEFAULT NULL,
  `negpressuredressingused` varchar(10) DEFAULT NULL,
  `openabdomendocumented` varchar(10) DEFAULT NULL,
  `postopcritcalcarestaylen` varchar(150) DEFAULT NULL,
  `postopassesbyspecid` varchar(10) DEFAULT NULL,
  `unplannedorplannedreturnid` varchar(50) DEFAULT NULL,
  `indunplannedreturnid` varchar(100) DEFAULT NULL,
  `indplannedreturnid` varchar(250) DEFAULT NULL,
  `isunplannedmove` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `patientid` (`patientid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `rif`
--

DROP TABLE IF EXISTS `rif`;
CREATE TABLE IF NOT EXISTS `rif` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patientid` int(11) DEFAULT NULL,
  `histabdominalsurgeryid` varchar(10) DEFAULT NULL,
  `prevadmiswithrifpainid` varchar(10) DEFAULT NULL,
  `hrsdayssincepainonsetid` varchar(10) DEFAULT NULL,
  `neutrophilcount` decimal(7,2) DEFAULT NULL,
  `rifpainid` varchar(10) DEFAULT NULL,
  `migrationofpaintorifid` varchar(10) DEFAULT NULL,
  `tenderid` varchar(10) DEFAULT NULL,
  `guardingid` varchar(10) DEFAULT NULL,
  `reboundtendernessid` varchar(10) DEFAULT NULL,
  `rigidityid` varchar(10) DEFAULT NULL,
  `rovsingssignid` varchar(10) DEFAULT NULL,
  `riskscoreid` varchar(50) DEFAULT NULL,
  `riskscore` int(11) DEFAULT NULL,
  `imagingfindingsid` varchar(155) DEFAULT NULL,
  `interventionalradiology` varchar(10) DEFAULT NULL,
  `rifsurgeryid` varchar(10) DEFAULT NULL,
  `appendicitisgradingid` varchar(20) DEFAULT NULL,
  `drainid` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `patientid` (`patientid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ruq`
--

DROP TABLE IF EXISTS `ruq`;
CREATE TABLE IF NOT EXISTS `ruq` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patientid` int(11) DEFAULT NULL,
  `dayssincepainonsetid` varchar(10) DEFAULT NULL,
  `firstepisodeid` varchar(10) DEFAULT NULL,
  `prevadmiswithcholid` varchar(10) DEFAULT NULL,
  `alt` decimal(7,2) DEFAULT NULL,
  `ast` decimal(7,2) DEFAULT NULL,
  `alkalinephosphatase` decimal(7,2) DEFAULT NULL,
  `totalbilirubin` decimal(7,2) DEFAULT NULL,
  `rmurphyssignpositiveid` varchar(10) DEFAULT NULL,
  `ruq_jaundiceid` varchar(10) DEFAULT NULL,
  `ruq_rigorsid` varchar(10) DEFAULT NULL,
  `lowerabdominalsignsid` varchar(10) DEFAULT NULL,
  `confusionid` varchar(10) DEFAULT NULL,
  `ercpid` varchar(10) DEFAULT NULL,
  `ercpfindings` varchar(3000) DEFAULT NULL,
  `cholangiographyid` varchar(20) DEFAULT NULL,
  `gallbladdergradingid` varchar(20) DEFAULT NULL,
  `postoperativedrainid` varchar(20) DEFAULT NULL,
  `bileleakid` varchar(20) DEFAULT NULL,
  `lengthofpostoperativestay` int(11) DEFAULT NULL,
  `unplanmove7daysid` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `patientid` (`patientid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sbo`
--

DROP TABLE IF EXISTS `sbo`;
CREATE TABLE IF NOT EXISTS `sbo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patientid` int(11) DEFAULT NULL,
  `sbo_comorbiditiesid` varchar(100) DEFAULT NULL,
  `sbo_onsetvomitting` datetime DEFAULT NULL,
  `sbo_onsetvomittingnd` varchar(20) DEFAULT NULL,
  `sbo_initialmgmtstrategyid` varchar(50) DEFAULT NULL,
  `albumin` decimal(7,2) DEFAULT NULL,
  `sbo_contrast_agent` varchar(10) DEFAULT NULL,
  `sbo_procedure` varchar(200) DEFAULT NULL,
  `sbo_procedure_date` varchar(200) DEFAULT NULL,
  `sbo_procedure_datend` varchar(20) DEFAULT NULL,
  `sbo_Aetiology` varchar(100) DEFAULT NULL,
  `sbo_otheraetiology` varchar(200) DEFAULT NULL,
  `sbo_surgery` varchar(10) DEFAULT NULL,
  `sbointerventionid` varchar(255) DEFAULT NULL,
  `sbo_otherintervention` varchar(200) DEFAULT NULL,
  `enteralnutritiondate` datetime DEFAULT NULL,
  `enteralnutritiondatend` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `patientid` (`patientid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `surgery`
--

DROP TABLE IF EXISTS `surgery`;
CREATE TABLE IF NOT EXISTS `surgery` (
  `surgeryid` int(11) NOT NULL AUTO_INCREMENT,
  `patientid` int(11) DEFAULT NULL,
  `dateofsurgery` datetime DEFAULT NULL,
  `dateofsurgerynd` varchar(20) DEFAULT NULL,
  `surgeryinductiontime` datetime DEFAULT NULL,
  `surgeryinductiontimend` varchar(20) DEFAULT NULL,
  `asascoreid` varchar(50) DEFAULT NULL,
  `dispositionsurgeonid` varchar(50) DEFAULT NULL,
  `surgerylocum` varchar(255) DEFAULT NULL,
  `procedurecategory` varchar(255) DEFAULT NULL,
  `procedureid` varchar(255) DEFAULT NULL,
  `otherprocedure` varchar(3000) DEFAULT NULL,
  `findings` varchar(3000) DEFAULT NULL,
  `surgeryconvlcrscopictoopen` varchar(255) DEFAULT NULL,
  `destinationid` varchar(150) DEFAULT NULL,
  `complicationsid` varchar(255) DEFAULT NULL,
  `othercomplication` varchar(255) DEFAULT NULL,
  `complicclassificationid` varchar(50) DEFAULT NULL,
  `finaldiagnosisid` varchar(255) DEFAULT NULL,
  `otherfinaldiagnosis` varchar(255) DEFAULT NULL,
  `readmittedwithin30daysid` varchar(50) DEFAULT NULL,
  `statusatdischarge` varchar(100) DEFAULT NULL,
  `dischargedate` date DEFAULT NULL,
  `dischargedatend` varchar(20) DEFAULT NULL,
  `lengthoftotalstay` int(11) DEFAULT NULL,
  PRIMARY KEY (`surgeryid`),
  KEY `patientid` (`patientid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `viewhistory`
--

DROP TABLE IF EXISTS `viewhistory`;
CREATE TABLE IF NOT EXISTS `viewhistory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `patientid` int(11) DEFAULT NULL,
  `lastviewed` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  KEY `patientid` (`patientid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`emailID`) REFERENCES `authorisedemails` (`id`);

--
-- Constraints for table `clinical_decision`
--
ALTER TABLE `clinical_decision`
  ADD CONSTRAINT `clinical_decision_ibfk_1` FOREIGN KEY (`flowid`) REFERENCES `flowchart_vars` (`id`);

--
-- Constraints for table `flowchart_vars`
--
ALTER TABLE `flowchart_vars`
  ADD CONSTRAINT `flowchart_vars_ibfk_1` FOREIGN KEY (`patientid`) REFERENCES `demographics` (`patientid`),
  ADD CONSTRAINT `flowchart_vars_ibfk_2` FOREIGN KEY (`userid`) REFERENCES `authorisedemails` (`id`);

--
-- Constraints for table `imaging`
--
ALTER TABLE `imaging`
  ADD CONSTRAINT `imaging_ibfk_1` FOREIGN KEY (`patientid`) REFERENCES `demographics` (`patientid`);

--
-- Constraints for table `labs`
--
ALTER TABLE `labs`
  ADD CONSTRAINT `labs_ibfk_1` FOREIGN KEY (`patientid`) REFERENCES `demographics` (`patientid`);

--
-- Constraints for table `lap`
--
ALTER TABLE `lap`
  ADD CONSTRAINT `lap_ibfk_1` FOREIGN KEY (`patientid`) REFERENCES `demographics` (`patientid`);

--
-- Constraints for table `rif`
--
ALTER TABLE `rif`
  ADD CONSTRAINT `rif_ibfk_1` FOREIGN KEY (`patientid`) REFERENCES `demographics` (`patientid`);

--
-- Constraints for table `ruq`
--
ALTER TABLE `ruq`
  ADD CONSTRAINT `ruq_ibfk_1` FOREIGN KEY (`patientid`) REFERENCES `demographics` (`patientid`);

--
-- Constraints for table `sbo`
--
ALTER TABLE `sbo`
  ADD CONSTRAINT `sbo_ibfk_1` FOREIGN KEY (`patientid`) REFERENCES `demographics` (`patientid`);

--
-- Constraints for table `surgery`
--
ALTER TABLE `surgery`
  ADD CONSTRAINT `surgery_ibfk_1` FOREIGN KEY (`patientid`) REFERENCES `demographics` (`patientid`);

--
-- Constraints for table `viewhistory`
--
ALTER TABLE `viewhistory`
  ADD CONSTRAINT `viewhistory_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `viewhistory_ibfk_2` FOREIGN KEY (`patientid`) REFERENCES `demographics` (`patientid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
