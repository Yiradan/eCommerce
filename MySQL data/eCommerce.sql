CREATE DATABASE  IF NOT EXISTS `magazin-online` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `magazin-online`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: magazin-online
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `fName` varchar(45) NOT NULL,
  `lName` varchar(45) NOT NULL,
  `phoneNumber` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `postalCode` varchar(45) NOT NULL,
  `address` varchar(500) NOT NULL,
  `orders` varchar(5000) NOT NULL,
  `total` float NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'Benyamin','David','54678648684','dreaminboutnothing@gmail.com','UK','London','WC2N 5DU','3 North Road','[{\"product_id\":4,\"productName\":\"ASRock Radeon RX 7900 XTX Taichi White\",\"price\":1249.99,\"quantity\":2,\"subTotal\":\"2499.98\"},{\"product_id\":2,\"productName\":\"Asus Rog Strix Gaming Keyboard\",\"price\":158.73,\"quantity\":1,\"subTotal\":\"158.73\"},{\"product_id\":8,\"productName\":\"Samsung 980 PRO Gen.4, 1TB\",\"price\":79.99,\"quantity\":2,\"subTotal\":\"159.98\"},{\"product_id\":5,\"productName\":\"AMD Ryzen 5 7600X\",\"price\":289.99,\"quantity\":1,\"subTotal\":\"289.99\"}]',3108.68),(2,'Benyamin','David','+465475205011','kaaywyth@gmail.com','US','NYC','10011','755 WHITE PLAINS RD','[{\"product_id\":6,\"productName\":\"ASUS ROG STRIX 650-A\",\"price\":319.99,\"quantity\":2,\"subTotal\":\"639.98\"},{\"product_id\":11,\"productName\":\"NZXT Kraken Elite 360 RGB CPU Cooler\",\"price\":639.99,\"quantity\":2,\"subTotal\":\"1279.98\"},{\"product_id\":5,\"productName\":\"AMD Ryzen 5 7600X\",\"price\":289.99,\"quantity\":1,\"subTotal\":\"289.99\"},{\"product_id\":10,\"productName\":\"Corsair RM850e V2, ATX 3.0, 80 PLUS GOLD, 850W PSU\",\"price\":129.99,\"quantity\":1,\"subTotal\":\"129.99\"}]',2339.94);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(45) NOT NULL,
  `productName` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `images` varchar(5000) NOT NULL,
  `quantity` int NOT NULL,
  `price` float NOT NULL,
  `tags` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Alienware','Alienware Gaming Monitor','ALIENWARE 34 CURVED QD-OLED GAMING MONITOR - AW3423DW','https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw3423dw/media-gallery/monitor-alienware-aw3423dw-gallery-1.psd https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw3423dw/media-gallery/monitor-alienware-aw3423dw-gallery-2.psd https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw3423dw/media-gallery/monitor-alienware-aw3423dw-gallery-3.psd https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw3423dw/media-gallery/monitor-alienware-aw3423dw-gallery-8.psd https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw3423dw/media-gallery/monitor-alienware-aw3423dw-gallery-7.psd',7,1099.99,'alienware monitor gaming 34 curved'),(2,'ASUS','Asus Rog Strix Gaming Keyboard','ASUS ROG Strix Scope NX TKL Moonlight White Gaming Keyboard','https://s13emagst.akamaized.net/products/45127/45126818/images/res_27fb7c45114041d185a128a2d5ffeb89.jpg https://s13emagst.akamaized.net/products/45127/45126818/images/res_38a5fe73b82f27924f9194396fab55d5.jpg https://s13emagst.akamaized.net/products/45127/45126818/images/res_c4ce034e83190d77d673350eeb5cd247.jpg https://s13emagst.akamaized.net/products/45127/45126818/images/res_51a108fb14f23ca3d69f4454f3487d42.jpg https://s13emagst.akamaized.net/products/45127/45126818/images/res_626c044203c015c584b00814af06a2ec.jpg',13,158.73,'asus rog strix gaming keyboard'),(3,'Razer','Razer DeathAdder Essential 2021','Razer DeathAdder Essential 2021 White Gaming Mouse','https://s13emagst.akamaized.net/products/38936/38935445/images/res_6d1161d3cc1dcafe97ea6dac96d7d611.jpg https://s13emagst.akamaized.net/products/38936/38935445/images/res_35abbece3b8b513a24e35427d90cda82.jpg https://s13emagst.akamaized.net/products/38936/38935445/images/res_6b1a7d6149ad9db8c4c2dde840a6b6af.jpg',24,24.99,'gaming mouse razer white'),(4,'ASRock','ASRock Radeon RX 7900 XTX Taichi White','ASRock Radeon RX 7900 XTX Taichi White OC 24GB GDDR6 384-bit Graphics card','https://s13emagst.akamaized.net/products/56139/56138237/images/res_23a0d7ef294cee3f20971345c1fc1ff9.png https://s13emagst.akamaized.net/products/56139/56138237/images/res_c795b95884e1bf1942e607a36d86b050.png https://s13emagst.akamaized.net/products/56139/56138237/images/res_8ecf0dda23b860a751b71bf485a2fa09.png https://s13emagst.akamaized.net/products/56139/56138237/images/res_9baf3547ea6216f0f76a5c3517857116.png https://s13emagst.akamaized.net/products/56139/56138237/images/res_1140ac68c462731d03b59de62f784df3.png',5,1249.99,'graphics card amd Radeon rx 7900xtx 7900 white'),(5,'AMD','AMD Ryzen 5 7600X','AMD Ryzen 5 7600X 4.7GHZ CPU','https://3.grgs.ro/images/products/1/2770/2451332/full/ryzen-5-7600x-47ghz-box-2af90e505e1db726dbcbde559865addc.jpg https://1.grgs.ro/images/products/1/2770/2451332/full/ryzen-5-7600x-47ghz-box-f20281518c51ed902a8fa217467fe95b.jpg https://3.grgs.ro/images/products/1/2770/2451332/full/ryzen-5-7600x-47ghz-box-598142f9457d69d5e32bd67759914da0.jpg https://1.grgs.ro/images/products/1/2770/2451332/full/ryzen-5-7600x-47ghz-box-nda-4add9f5720cf545507d83ac6112b38f4.jpg https://2.grgs.ro/images/products/1/2770/2451332/full/ryzen-5-7600x-47ghz-box-nda-4b800274fd7da128043f31c8bfb03091.jpg',15,289.99,'amd ryzen 7600x cpu'),(6,'ASUS','ASUS ROG STRIX 650-A','ASUS ROG STRIX B650-A GAMING WIFI, Socket AM5 Motherboard','https://s13emagst.akamaized.net/products/50078/50077786/images/res_45a2d0b624f3fc996652af3984cf0a54.jpg https://s13emagst.akamaized.net/products/50078/50077786/images/res_1636615cb76cce392b20bc93019d9b9c.jpg https://s13emagst.akamaized.net/products/50078/50077786/images/res_ab8270fa56f5c3df2ac235d3dbc854b2.jpg https://s13emagst.akamaized.net/products/50078/50077786/images/res_50a83acacc0882967344758a27205acf.jpg',3,319.99,'asus rog strix motherboard am5'),(7,'Kingston','Kingston FURY Beast 32GB(2x16GB) DDR5 RAM','Kingston FURY Beast RGB White 32GB DDR5 5200 CL40 Dual Channel Kit RAM','https://www.forit.ro/images/products/img_202303291445/440643/full/memorie-ram-kingston-fury-beast-rgb-white-16gb-ddr5-5200mhz-cl40-716545.jpg https://www.flax.ro/static/imagini-produse/kf556c36bwea-16-2.jpg https://www.flax.ro/static/imagini-produse/kf556c36bwea-16-3.jpg',4,139.99,'ram corsair 32gb 16gb ddr5 6000mhz'),(8,'Samsung','Samsung 980 PRO Gen.4, 1TB','Solid State Drive (SSD) Samsung 980 PRO Gen.4, 1TB, NVMe, M.2.','https://s13emagst.akamaized.net/products/33380/33379005/images/res_808f5f7d9a257bcf8dc8d2caaea65da9.jpg https://s13emagst.akamaized.net/products/33380/33379005/images/res_168e870023e9fc48008be90b75c93993.jpg https://s13emagst.akamaized.net/products/33380/33379005/images/res_3411d7e1cc80a65825d856709df43b97.jpg https://s13emagst.akamaized.net/products/33380/33379005/images/res_af744b04544092931e628dee7e6b8451.jpg',25,79.99,'ssd samsung m2 1tb'),(9,'Corsair','Corsair 4000D AIRFLOW, Mid-Tower','Corsair 4000D AIRFLOW, Mid-Tower Case, without psu, ATX, White','https://s13emagst.akamaized.net/products/33173/33172118/images/res_c8d021036537e7464a78dc478b7d1601.jpg https://s13emagst.akamaized.net/products/33173/33172118/images/res_1d2257a48eeb8a9615686c5a8a2e9cb0.jpg https://s13emagst.akamaized.net/products/33173/33172118/images/res_dbaeddb17fd5879c0e6891566deb6bda.jpg https://s13emagst.akamaized.net/products/33173/33172118/images/res_ca50d7fe40ae55f4e64d7107e6f4b976.jpg https://s13emagst.akamaized.net/products/33173/33172118/images/res_2d06a4ab11d8c4e440b7656a8a0c0d6a.jpg',7,94.99,'corsair 4000d airflow mid tower case'),(10,'Corsair','Corsair RM850e V2, ATX 3.0, 80 PLUS GOLD, 850W PSU','Corsair RM850e V2, ATX 3.0, 80 PLUS GOLD, 850W, 140mm Fan, PSU','https://s13emagst.akamaized.net/products/54945/54944146/images/res_5e525891bf343004ffc1e55670f03192.png https://s13emagst.akamaized.net/products/54945/54944146/images/res_098437996f2b89d0307c79a2e1144ef7.png https://s13emagst.akamaized.net/products/54945/54944146/images/res_7076ba006841dbf2d29f6129cc83c865.png https://s13emagst.akamaized.net/products/54945/54944146/images/res_d9e34efdcffb6dda4e795e09dcfcd689.png https://s13emagst.akamaized.net/products/54945/54944146/images/res_b453f7c4822590473846715a46c89342.png',8,129.99,'psu corsair 850w 140mm fan'),(11,'NZXT','NZXT Kraken Elite 360 RGB CPU Cooler','NZXT Kraken Elite 360mm RGB CPU Cooler, compatible with AMD/Intel processors','https://s13emagst.akamaized.net/products/56396/56395156/images/res_3eca222340c2cc64a4dc556d0eeffe78.png https://s13emagst.akamaized.net/products/56396/56395156/images/res_ce6ecf6a036de6672ccfe37a18f7a323.png https://s13emagst.akamaized.net/products/56396/56395155/images/res_2f9c150a55be0eb73503184bc6529a89.png https://s13emagst.akamaized.net/products/56396/56395155/images/res_d264051cd9d8afb1af507f9a937ad692.png',3,639.99,'aio cooler 360 kraken cpu');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-10 20:44:05
