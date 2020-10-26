-- sudo cat /etc/mysql/debian.cnf

CREATE TABLE IF NOT EXISTS lessons (
  ID int NOT NULL AUTO_INCREMENT,
  NAME varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO lessons (name) VALUES ('Deno');
INSERT INTO lessons (name) VALUES ('Node');
INSERT INTO lessons (name) VALUES ('Javascript');
INSERT INTO lessons (name) VALUES ('Java');
INSERT INTO lessons (name) VALUES ('Ruby');
INSERT INTO lessons (name) VALUES ('Kotlin');
INSERT INTO lessons (name) VALUES ('Python');
INSERT INTO lessons (name) VALUES ('PHP');
