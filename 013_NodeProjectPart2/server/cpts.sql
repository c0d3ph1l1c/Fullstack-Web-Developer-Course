-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Jan 13, 2020 at 04:54 AM
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
-- Database: `cpts`
--

-- --------------------------------------------------------

--
-- Table structure for table `article_table`
--

DROP TABLE IF EXISTS `article_table`;
CREATE TABLE IF NOT EXISTS `article_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `catalog_ID` int(11) NOT NULL,
  `created_time` int(11) NOT NULL,
  `author` varchar(32) NOT NULL,
  `view` int(11) NOT NULL,
  `comment` int(11) NOT NULL,
  `summary` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `list_img_src` varchar(32) NOT NULL,
  `banner_img_src` varchar(32) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `banner_table`
--

DROP TABLE IF EXISTS `banner_table`;
CREATE TABLE IF NOT EXISTS `banner_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `src` varchar(255) NOT NULL,
  `href` varchar(32) NOT NULL,
  `serial` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `banner_table`
--

INSERT INTO `banner_table` (`ID`, `title`, `src`, `href`, `serial`) VALUES
(1, '源码下载好4', 'upload_723aeecf9b12cca39911b7fa6463b040', 'https://cn.bing.com/', 88),
(2, '随便的第二个banner', 'upload_6d45e619b6c08f9d5c55b192e8efa4fb', 'http://google.com/', 2),
(3, 'aa', 'upload_39991398cdc7fbcc2e7ffedf5979a222', 'http://aaaaa.com', 5),
(4, 'qqqqq', 'upload_457055129da4aa26000044aa12fdbe1b', 'http://bing.cn/', 88);

-- --------------------------------------------------------

--
-- Table structure for table `catalog_table`
--

DROP TABLE IF EXISTS `catalog_table`;
CREATE TABLE IF NOT EXISTS `catalog_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `catalog_table`
--

INSERT INTO `catalog_table` (`ID`, `title`) VALUES
(1, 'javascript'),
(2, 'xhtml'),
(3, 'node');

-- --------------------------------------------------------

--
-- Table structure for table `comment_table`
--

DROP TABLE IF EXISTS `comment_table`;
CREATE TABLE IF NOT EXISTS `comment_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `article_ID` int(11) NOT NULL,
  `nickname` varchar(32) NOT NULL,
  `url` varchar(255) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
