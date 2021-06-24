USE `esoap_local`;

DROP TABLE IF EXISTS clinical_decision;
DROP TABLE IF EXISTS flowchart_vars;

CREATE TABLE IF NOT EXISTS flowchart_vars(
id int(11) NOT NULL AUTO_INCREMENT,
patientid INT,
userid INT,
moduleid varchar(100),
createdat timestamp DEFAULT NOW(),
age INT,
genderid VARCHAR(20),
symptomduration INT,
wcc DECIMAL(7,2),
crp DECIMAL(7,2),
tenderid	VARCHAR(10),
guardingid	VARCHAR(10),
reboundtendernessid	VARCHAR(10),
rigidityid	VARCHAR(10),
rifpainid	VARCHAR(10),
palpablemassid	VARCHAR(10),
rigidityentire	VARCHAR(10),
riskscoreid	VARCHAR(50),
riskscore	INT,
PRIMARY KEY (id),
FOREIGN KEY(patientid) REFERENCES demographics(patientid),
FOREIGN KEY(userid) REFERENCES authorisedEmails(id)

)ENGINE=InnoDB;

DROP TABLE IF EXISTS criteria;

CREATE TABLE IF NOT EXISTS criteria(
    id INT NOT NULL AUTO_INCREMENT,
    module VARCHAR(100),
    groupnum INT,
    crit VARCHAR(200),
    class VARCHAR(200),
    PRIMARY KEY (id)
)ENGINE=InnoDB;

INSERT INTO criteria (module, groupnum, crit,class) 
VALUES
('rif',0,'Normal Bloods','show'),
('rif',0,'AIR &#60 5','Adult Inflammatory Score (AIR)'),
('rif',0,'AAS &#8804 10','Adult Appendicitis Score (AAS)'),
('rif',0,'SHERA F(5-15yrs) &#8804 3','SHERA'),
('rif',0,'SHERA M(5-10yrs) &#8804 3','SHERA'),
('rif',0,'SHERA M(11-15yrs) &#8804 2','SHERA'),
('rif',1,'Tender','show'),
('rif',1,'Guarding','show'),
('rif',1,'Rigidity','show'),
('rif',1,'Rebound RIF','show'),
('rif',1,'WCC &#62 13000','show'),
('rif',1,'CRP &#62 10','show'),
('rif',1,'AIR: 5-8','Adult Inflammatory Score (AIR)'),
('rif',1,'AAS 11-15','Adult Appendicitis Score (AAS)'),
('rif',2,'Tender','show'),
('rif',2,'Guarding','show'),
('rif',2,'Rigidity','show'),
('rif',2,'Rebound RIF','show'),
('rif',2,'WCC &#62 15000','show'),
('rif',2,'CRP &#62 20','show'),
('rif',2,'AIR &#62 8','Adult Inflammatory Score (AIR)'),
('rif',2,'AAS &#8805 16','Adult Appendicitis Score (AAS)'),
('rif',2,'SHERA &#62 3','SHERA'),
('rif',3,'Tender','show'),
('rif',3,'Guarding','show'),
('rif',3,'Rigidity','show'),
('rif',3,'Rebound RIF','show'),
('rif',3,'Palpable Mass','show'),
('rif',3,'High WCC, CRP','show'),
('rif',3,'Duration of sympotms &#62 48hrs','show'),
('rif',4,'Tender','show'),
('rif',4,'Guarding','show'),
('rif',4,'Rigidity Entire Abdomen','show'),
('rif',4,'High WCC, CRP','show');




CREATE TABLE IF NOT EXISTS clinical_decision(
    id INT NOT NULL AUTO_INCREMENT,
    createdat timestamp DEFAULT NOW() ON UPDATE NOW(),
    flowid INT,
    clinicaldiagnosis VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY(flowid) REFERENCES flowchart_vars(id)

)ENGINE=InnoDB;