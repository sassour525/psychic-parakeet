drop database planado;
create database planado;
use planado;

insert into users(name, company, boss, profilePic, manager, personality, salary, pay, clock, hours, email, password, createdAt, updatedAt)values
("Gene", "Bob's Burgers", "Bob", 'https://longislandweekly.com/wp-content/uploads/2016/09/Gene_Belcher-267x400.png', 0, 777, 0, 10, 0, 0, "gene@gmail.com", "$2a$06$ZvdshqHdIRKd2Xqu/LT42.N98oq6dV5cBOKNahlHwJyzDKrCJyrbS", "2017-05-04 17:29:56", "2017-05-04 17:29:56"),
("Louise", "Bob's Burgers", "Bob", 'https://s-media-cache-ak0.pinimg.com/236x/e7/76/0d/e7760dbe604afa576538e515239e459f.jpg', 0, 666, 0, 10, 1, 5, "louise@gmail.com", "$2a$06$ZvdshqHdIRKd2Xqu/LT42.N98oq6dV5cBOKNahlHwJyzDKrCJyrbS", "2017-05-04 17:29:56", "2017-05-04 17:29:56"),
("Tina", "Bob's Burgers", "Bob", 'https://s-media-cache-ak0.pinimg.com/736x/e1/22/ef/e122efd658aa8c41a052ff263976d968.jpg', 0, 555, 0, 10, 0, 0, "tina@gmail.com", "$2a$06$ZvdshqHdIRKd2Xqu/LT42.N98oq6dV5cBOKNahlHwJyzDKrCJyrbS", "2017-05-04 17:29:56", "2017-05-04 17:29:56"),
("Bob", "Bob's Burgers", "Bob", 'https://s-media-cache-ak0.pinimg.com/236x/ca/ae/f0/caaef0704b9cf8fe2efa0829d30b7215.jpg', 1, 333, 1, 1000, 1, 5, "bob@gmail.com", "$2a$06$ZvdshqHdIRKd2Xqu/LT42.N98oq6dV5cBOKNahlHwJyzDKrCJyrbS", "2017-05-04 17:29:56", "2017-05-04 17:29:56");

insert into availabilities(UserId, monday_Morn, monday_Eve, tuesday_Morn, tuesday_Eve, wednesday_Morn, wednesday_Eve, thursday_Morn, thursday_Eve, friday_Morn, friday_Eve, createdAt, updatedAt)values
(1, 0,0,1,0,1,0,0,1,0,0, "2017-05-04 17:29:56", "2017-05-04 17:29:56"),
(2, 0,1,0,1,0,0,1,0,1,0, "2017-05-04 17:29:56", "2017-05-04 17:29:56"),
(3, 1,0,1,0,0,1,0,1,0,1, "2017-05-04 17:29:56", "2017-05-04 17:29:56"),
(4, 1,1,1,0,1,0,1,1,1,1, "2017-05-04 17:29:56", "2017-05-04 17:29:56");

insert into shifts(UserId, weekday, night, createdAt, updatedAt)values
(3, "Monday", 0, "2017-05-04 17:29:56", "2017-05-04 17:29:56"),
(1, "Monday", 1, "2017-05-04 17:29:56", "2017-05-04 17:29:56"),
(2, "Tuesday", 0, "2017-05-04 17:29:56", "2017-05-04 17:29:56"),
(3, "Tuesday", 1, "2017-05-04 17:29:56", "2017-05-04 17:29:56"),
(4, "Wednesday", 0, "2017-05-04 17:29:56", "2017-05-04 17:29:56"),
(1, "Wednesday", 1, "2017-05-04 17:29:56", "2017-05-04 17:29:56"),
(2, "Thursday", 0, "2017-05-04 17:29:56", "2017-05-04 17:29:56"),
(1, "Thursday", 1, "2017-05-04 17:29:56", "2017-05-04 17:29:56"),
(4, "Friday", 0, "2017-05-04 17:29:56", "2017-05-04 17:29:56"),
(1, "Friday", 1, "2017-05-04 17:29:56", "2017-05-04 17:29:56");

select * from users;
select * from availabilities;
select * from shifts;