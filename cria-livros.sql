CREATE DATABASE  IF NOT EXISTS `cria-livros` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `cria-livros`;
-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: cria-livros
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `livros`
--

DROP TABLE IF EXISTS `livros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `livros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(245) NOT NULL,
  `sinopse` varchar(500) NOT NULL,
  `capa` varchar(1200) DEFAULT NULL,
  `exemplares` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livros`
--

LOCK TABLES `livros` WRITE;
/*!40000 ALTER TABLE `livros` DISABLE KEYS */;
INSERT INTO `livros` VALUES (2,'O Pequeno Príncipe Preto','Em um minúsculo planeta, vive o Pequeno Príncipe Preto.\nAlém dele, existe apenas uma árvore Baobá, sua única companheira. Quando chegam as ventanias, o menino viaja por diferentes planetas, espalhando o amor e a empatia.','https://m.media-amazon.com/images/P/B084CX1YYD.01._SCLZZZZZZZ_SX500_.jpg','2'),(3,'Então Quem é?','Este conto de adivinhação lembra crianças brincando de adivinhas. Em primeira pessoa, o narrador se dirige ao leitor propondo adivinhas e sempre terminando com a pergunta “É o lobo?”. No decorrer da história, são os animais de estimação do narrador que aparecem: o cachorro Godofredo, o gato Jeremias, a tartaruga Ernestina e o peixe Claudionor. ','https://m.media-amazon.com/images/I/61PEWCo37fL._SX258_BO1,204,203,200_QL70_ML2_.jpg','1'),(5,'Amoras','Na música “Amoras”, Emicida canta: “Que a doçura das frutinhas sabor acalanto/ Fez a criança sozinha alcançar a conclusão/ Papai que bom, porque eu sou pretinha também”. ','https://m.media-amazon.com/images/I/910wNGmLT4L.jpg','1'),(7,'A revolução dos bichos: Um conto de fadas','Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos.','https://m.media-amazon.com/images/I/612QiXA+FyL.jpg','1'),(8,'Joyland','Em Joyland, Stephen King mistura mistério, suspense e drama para construir uma história poderosa sobre amar e perder, crescer e envelhecer ― e sobre aqueles que não tiveram a chance de experimentar nada disso, pois a morte lhes chegou cedo demais.','https://m.media-amazon.com/images/I/81xkL3UroYL.jpg','2'),(9,'As Crônicas de Nárnia: A viagem do peregrino da alvorada','Reinos mágicos, criaturas inesquecíveis e batalhas épicas entre o bem e o mal: essas histórias são narradas em As Crônicas de Nárnia ― uma série de sete livros que acompanha crianças curiosas e suas aventuras entre o nosso mundo e outros universos mágicos e que, por décadas, encanta leitores de todas as idades.','https://m.media-amazon.com/images/I/51+7vY35MxL._SX327_BO1,204,203,200_.jpg','1');
/*!40000 ALTER TABLE `livros` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-01 22:08:27
