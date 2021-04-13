USE `esoap_local`;

DROP TABLE IF EXISTS kois;

CREATE TABLE IF NOT EXISTS kois (
  id int(11) NOT NULL AUTO_INCREMENT,
  module varchar(100),
  koi varchar(255),
  koicategory varchar(100),
  koitarget INT,
  koiscore INT,
  PRIMARY KEY (id)
)ENGINE=InnoDB;

INSERT INTO kois (module, koi, koicategory, koitarget)
VALUES 
('SBO','Enrolment of patient on pathway in ED before leaving for the ward.','Care Process',100),
('SBO','Complicated SBO (WCC >20, CRP >150, tenderness with guarding and rebound on abdominal exam) seen by consultant within 2 hours of surgical review documented in proforma/chart.','Care Process',90),
('SBO','Complicated SBO to have CT abdomen with contrast performed within 4 hours of surgical review.','Care Process',80),
('SBO','Gastrografin (100ml, undiluated po/via nasogastric tube) given within 24 hours of admission for SBO that is unresolved by the next day of admission.','Care Process',90),
('SBO','Persistent SBO operated on before 4 days have elapsed, or <72hrs for those coming to surgery.','Surgical Outcomes',90),
('SBO','Complicated obstruction with peritonitis/strangulated hernia have surgery <4hrs from surgical referral.','Surgical Outcomes',90),
('SBO','Patients post laparotomy admitted to HDU/ICU','Surgical Outcomes',90),
('SBO','Laparotomy closure bundle used with wound/suture ratio measured and documented in operative notes.','Surgical Outcomes',90),
('SBO','In-hospital wound complications <10%.','Adverse Events',100),
('SBO','Plain abdominal X-Ray not performed in the emergency department phase.','Resource Use',80),
('SBO','No readmission to hospital within 90 days.','Resource Use',90),
('RUQ_Cholecystitis','Abdominal US should be completed with 24 hours of admission','Care Process',90),
('RUQ_Cholecystitis','Patients with radiologically proven choledocholithiasis should have ERCP within 72hrs of admission','Care Process',80),
('RUQ_Cholecystitis','Patients admitted with acute cholecystitis should undergo surgery within 6 days of symptom onset and within 3 days of admission','Surgical Outcomes',60),
('RUQ_Cholecystitis','For those where a decision to perform interval cholecystectomy has been made this should be completed with 3 months','Surgical Outcomes',90),
('RUQ_Cholecystitis','Bile Leak  <2%','Adverse Events',100),
('RUQ_Cholecystitis','No re-admission following either cholecystectomy, cholecystostomy or ERCP','Resource Use',90),
('RIF_Appendicitis','Enrolment of Patient to pathway before leaving Emergency','Care Process',90),
('RIF_Appendicitis','Patients with Grade 5 appendicitis should have surgery in <12 hours of initial surgical review in ED','Care Process',90),
('RIF_Appendicitis','RIF pain patients should have a appendicitis risk score documented on the admissions proforma','Care Process',90),
('RIF_Appendicitis','Laparoscopic surgical approach','Surgical Outcomes',90),
('RIF_Appendicitis','No Laparoscopic conversion','Surgical Outcomes',97),
('RIF_Appendicitis','No negative appendectomy','Surgical Outcomes',90),
('RIF_Appendicitis','No re-admission to hospital within 30 days following appendectomy','Adverse Events',95)



-- SELECT * FROM (SELECT  lastviewed, pcn, viewhistory.patientid, admissiondate, percentcomplete FROM viewhistory LEFT JOIN demographics ON viewhistory.patientid = demographics.patientid ORDER BY lastviewed DESC) as t1 GROUP BY patientid;

-- SELECT max(lastviewed), pcn, viewhistory.patientid, admissiondate, percentcomplete FROM viewhistory LEFT JOIN demographics ON viewhistory.patientid = demographics.patientid WHERE viewhistory.userid = ? GROUP BY viewhistory.patientid ORDER BY lastviewed DESC LIMIT 5