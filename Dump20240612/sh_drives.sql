-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: sh
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `drives`
--

DROP TABLE IF EXISTS `drives`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `drives` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) NOT NULL,
  `job_description` text NOT NULL,
  `doc_link` varchar(255) NOT NULL,
  `drive_date` date NOT NULL,
  `attended_stu` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drives`
--

LOCK TABLES `drives` WRITE;
/*!40000 ALTER TABLE `drives` DISABLE KEYS */;
INSERT INTO `drives` VALUES (1,'Company A','Job Description A','http://example.com/docA','2024-05-01',100),(2,'Company B','Job Description B','http://example.com/docB','2024-05-10',78),(3,'Company C','Job Description C','http://example.com/docC','2024-05-15',23),(4,'Company D','Job Description D','http://example.com/docD','2024-05-20',54),(5,'Company E','Job Description E','http://example.com/docE','2024-06-01',89),(6,'Tech Innovators','Tech Innovators is looking for talented computer engineering students to join our team as interns. As an intern, you will work on exciting projects involving software development, system analysis, and troubleshooting. You will gain hands-on experience in programming languages such as Java, Python, and C++, and you will collaborate with experienced engineers to develop innovative solutions.','http://example.com/docF','2024-06-15',0),(7,'Data Analyst Internship','We are offering a data analyst internship for computer engineering students who are passionate about data analysis and visualization. As an intern, you will work with large datasets, perform data cleansing and transformation, and create insightful reports and visualizations. You will also have the opportunity to learn data analysis tools such as SQL, R, and Tableau, and work on real-world data projects.','http://example.com/docG','2024-06-20',0),(8,'Software Developer Trainee','Join our team as a software developer trainee and kickstart your career in software development. In this role, you will work closely with our development team to design, develop, and test software applications. You will gain hands-on experience in front-end and back-end development technologies such as HTML/CSS, JavaScript, Node.js, and React.js.This is a great opportunity to learn and grow. ','http://example.com/docH','2024-06-25',0),(9,'Company I','Job Description I','http://example.com/docI','2024-06-30',0),(10,'Company J','Job Description J','http://example.com/docJ','2024-07-05',0);
/*!40000 ALTER TABLE `drives` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-12 12:33:34
