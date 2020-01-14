-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Jan 14, 2020 at 06:19 AM
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
  `list_img_src` varchar(255) NOT NULL,
  `banner_img_src` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `article_table`
--

INSERT INTO `article_table` (`ID`, `title`, `catalog_ID`, `created_time`, `author`, `view`, `comment`, `summary`, `content`, `list_img_src`, `banner_img_src`) VALUES
(1, '好2', 6, 1542412800, 'blue', 0, 0, '随便的文章', '春节将至，对于每一个在外打拼的游子来说，回乡团聚的日子越来越近。数据显示，2019年我国新增高铁线路达5474公里，多条线路首次投入春运，不仅提升了旅客的出行速度和范围，也让更多返乡人可以感受到更优质、便捷的服务。\r\n\r\n京张高铁实现“无感进出站”\r\n\r\n2019年12月30日，京张高铁正式开通。进入春运以来，虽然室外天寒地冻，但装饰一新的张家口站内始终热闹非凡，购买高铁纪念品、与新火车站合影、体验高铁速度……每个旅客脸上都洋溢着欣喜和激动。\r\n\r\n“真快！”1月12日上午，在张家口开往北京的G4176次列车上，第一次乘坐“智能动车组”的刘然兴奋地说。\r\n\r\n飞快的速度，是京张高铁带给旅客的第一感受。“还没怎么来得及欣赏窗外的风景，列车就已经到八达岭站了。”刘然说，他女儿在北京读大学，京张高铁开通前，他每次乘坐普速列车来北京看女儿都要花费近4个小时。“高铁开通后，只需47分钟就能到达，早上来北京，下午就能回。”\r\n\r\n作为世界上第一条智能化高速铁路，令刘然赞叹不已的还有京张高铁乘车流程的体验。“说出来你可能不信，我从进站到乘车，手都没有从裤兜里伸出来，‘刷脸’就能解决所有问题，高科技带来的体验简直令人难以置信。”刘然说。\r\n\r\n据北京铁路局张家口站党总支书记陶卫东介绍，在京张高铁全线，旅客都可以通过一部手机尽享全程电子客票和行程信息服务，不用再打印任何纸质凭证。此外，进站、信息查询、打印临时身份证明、机器人个性化服务等，都将启动“刷脸”模式，旅客乘车到站后，也能继续体验“刷脸”，实现“无感进出站”。\r\n\r\n“随着春节的临近，张家口站发送旅客已经从京张高铁刚开通时的每日5800人递增到目前的13000人，为了方便旅客，从春运首日起，京张高铁就加开了高峰时刻列车，尽可能满足旅客的出行需求。”陶卫东表示。\r\n\r\n“最红高铁”串联革命老区\r\n\r\n“现在回家的心情就是两个字——开心。高铁舒服、方便，关键还很快。”1月11日，李师傅一进赣州西站就笑个不停。“以前要坐十几个小时的火车，加上转车，两天都到不了家，现在坐这个高铁，明天中午就能到家了。”\r\n\r\n李师傅是在江西赣州务工的湖北襄阳人，一直盼着赣州通高铁，今天特意和工友们一起来体验。2019年12月26日，昌赣高铁正式开通运营，不仅拉近了赣南地区各市县的距离，让赣南老区一跃跨入高铁时代，更方便了在江西打拼的追梦人。\r\n\r\n“以前我们到赣州来特别不方便，尤其像我们这样做小生意的，要经常往返赣州沿线一些县市，坐绿皮火车至少得五个多小时，而且车次很少。”在江西南昌经商的王先生依然记得当年的辛苦，如今，通过昌赣高铁，赣南人民可以从红色故都乘坐高铁直达北京以及全国各地，旅途时间较之前普速列车缩短了8个小时以上。\r\n\r\n“昌赣高铁串起了南昌、井冈山、瑞金三个‘摇篮’，是名副其实的‘最红高铁’。”赣州西站党支部书记石礼淦表示，昌赣高铁贯通南北，串起了江西的红色旅游、客家旅游、生态旅游资源，赣南革命老区的旅游产业迎来新发展，让老区人民收获了满满的幸福感。\r\n\r\n数据显示，2019年我国多条新线路令许多贫困地区结束了不通高铁的历史。“随着日兰高铁日照至曲阜段、昌赣高铁、成贵高铁宜宾至贵阳段的建成，临沂、赣州、毕节等多个革命老区和贫困地区都已接入全国高铁网。”国铁集团相关负责人表示，相信高铁线路的开通，可以让这些地区群众的返乡路走得更从容、更便捷。\r\n\r\n“旅游高铁”成为出游首选\r\n\r\n近年来，随着人们生活水平的提高，除了年货、年夜饭以外，旅游也成为和春节相关的一个“高频词”，越来越多的人把和家人一起旅游列为春节长假中的重要计划之一。沿线经过川、云、贵三省共拥有26个国家5A级景区和386个国家4A级景区的成贵高铁，就是一条满载人们旅游期待的“旅游高铁”。\r\n\r\n“2019年12月16日成贵高铁全线开通后，成都与贵阳两地之间的通行时间从8小时缩短至2小时58分，因其经过黄果树瀑布、乐山大佛、蜀南竹海、兴文石海、峨眉山等世界级的风景区，所以被网友称为‘最火旅游高铁’。”成都铁路局工作人员郑惟泰表示，一站一风景、一城一世界，成贵高铁简直是为热爱旅行的乘客量身定制的。\r\n\r\n据携程旅行近日发布的《2020年春运旅客出行趋势报告》显示，今年春节长假出游人数预计将达到4.5亿人次，“旅游过年”取代“春节回家”和“宅”，正成为中国人当下最流行的春节长假的休闲方式。\r\n\r\n“‘早上在成都看完大熊猫，晚上到贵阳吃酸汤鱼。’成贵高铁全线通车之后，沿线目的地的旅游热度正在不断走高。”携程旅行相关负责人表示，成贵高铁的全线通车极大缩短了双城之间的距离，双城游、双省游将更受欢迎。\r\n\r\n该负责人指出，最近3年春运期间，乘坐高铁出游的旅客人数连续增长，2020年春运增长势头更显著。根据《报告》预测，约70%的游客会选择高铁或动车。\r\n\r\n“和自驾出行或乘飞机出行相比，高铁快捷、准时、舒适等特点成为其在春运途中最大的优势，去年年底开通的成贵高铁、汉十高铁、大张高铁等线路均串联起多个著名景区，为春节假期中旅客的出游提供更加便捷的选择。”国铁集团相关负责人说。', 'upload_77f5aef486cf8bcc787b39d6f6e6769e', 'upload_86da658a79938e80013d69ee598fb9f1');

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
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `banner_table`
--

INSERT INTO `banner_table` (`ID`, `title`, `src`, `href`, `serial`) VALUES
(1, '源码下载好', 'upload_e8a9e1be6e68f9a70e80c0e5b63567af', 'https://cn.bing.com/', 3),
(2, '随便的第二个banner3', 'upload_6607e1ddd1761f05094d872935a35e0d', 'http://google.com/a', 1);

-- --------------------------------------------------------

--
-- Table structure for table `catalog_table`
--

DROP TABLE IF EXISTS `catalog_table`;
CREATE TABLE IF NOT EXISTS `catalog_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `catalog_table`
--

INSERT INTO `catalog_table` (`ID`, `title`) VALUES
(1, 'js'),
(6, 'java'),
(3, 'node'),
(5, 'css'),
(7, 'php');

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
