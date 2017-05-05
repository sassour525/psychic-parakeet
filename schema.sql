create database planado_db;
use planado_db;

#	USER PROFILES
create table user(	#replace tablename
	id integer not null auto_increment,
    primary key(id),
    company varchar(50), 		# company name
    manager boolean,			# manager or employee
    boss integer(11),			# id of manager incharge of employee (null for managers)
    name varchar(50),			# First & last name
    password varchar(50),		# user password
    personality integer(11),	# Score for matching
    wage varchar(50),			# salary or hourly
    rate integer(11),			# salary or hourly rate
    clocked boolean,			# check if clocked in or not
    hours integer(11),			# amount of hours they have worked this pay period
	date timestamp 				# timestamp when created
);

# HOLDS ALL REGISTERED COMPANIES
create table companies(
	id integer not null auto_increment,
    primary key(id),
    company varchar(50),		# company name
    founder varchar(50),		# name of initial register
    date timestamp				# timestamp when created
);