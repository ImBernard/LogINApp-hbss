-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2016 at 08:14 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `login`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbluser`
--

CREATE TABLE `tbluser` (
  `Fname` varchar(11) DEFAULT NULL,
  `Lname` varchar(11) DEFAULT NULL,
  `Mname` varchar(11) DEFAULT NULL,
  `password` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbluser`
--

INSERT INTO `tbluser` (`Fname`, `Lname`, `Mname`, `password`) VALUES
('Bernard', 'Aguilar', 'G', 'themaster'),
('qwerty', 'qwerty', 'q', '123456'),
(NULL, NULL, NULL, ''),
(NULL, NULL, NULL, ''),
(NULL, NULL, NULL, ''),
('qw', 'qw', NULL, NULL),
('qwe', 'qwe', 'r', NULL),
('asd', 'asd', 'd', NULL),
('asd', 'qe', 'q', NULL),
('chester', 'balaman', 'rodaje', NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
