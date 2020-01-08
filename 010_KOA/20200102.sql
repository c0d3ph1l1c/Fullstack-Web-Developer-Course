-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Jan 08, 2020 at 09:17 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `20200102`
--

-- --------------------------------------------------------

--
-- Table structure for table `item_table`
--

DROP TABLE IF EXISTS `item_table`;
CREATE TABLE IF NOT EXISTS `item_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `price` float NOT NULL,
  `count` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `title` (`title`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `item_table`
--

INSERT INTO `item_table` (`ID`, `title`, `price`, `count`) VALUES
(1, 'Test', 19.8, 298),
(2, 'Item1', 19.8, 200);

-- --------------------------------------------------------

--
-- Table structure for table `user_table`
--

DROP TABLE IF EXISTS `user_table`;
CREATE TABLE IF NOT EXISTS `user_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_table`
--

INSERT INTO `user_table` (`ID`, `username`, `password`) VALUES
(1, 'blue2', '654321'),
(3, 'lisi', '111111'),
(4, 'blue', '666666'),
(11, 'blue3', '123456'),
(12, 'zhangsan', '654987'),
(13, 'lisi2', '654321');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
