USE user_login;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `first_name` varchar(255) default NULL,
  `last_name` varchar(255) default NULL,
  `email` varchar(255) default NULL,
  `postalZip` varchar(10) default NULL,
  `address` varchar(255) default NULL,
  `region` varchar(50) default NULL,
  `country` varchar(100) default NULL,
  `password` varchar(255) default 'password',
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `users` (`first_name`,`last_name`,`email`,`postalZip`,`address`,`region`,`country`)
VALUES
  ("Cameron"," Mercer","enim.etiam@yahoo.net","40311","Ap #150-3041 Nunc Street","Brussels Hoofdstedelijk Gewest","Australia"),
  ("Cameran"," Dunlap","nulla.integer@aol.couk","6348 QI","876-6201 Donec Rd.","Munster","India"),
  ("Arthur"," Hernandez","nec@protonmail.edu","970515","6928 Vitae Rd.","Västra Götalands län","Germany"),
  ("Isadora"," Phillips","a.auctor.non@aol.couk","SE1S 8XU","3577 Nisi. Av.","Prince Edward Island","Pakistan"),
  ("Davis"," Vega","odio.auctor@protonmail.ca","50500","967-1670 In Avenue","Eastern Cape","Ireland");