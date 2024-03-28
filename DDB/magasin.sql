-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 28 mars 2024 à 11:55
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `magasin`
--

-- --------------------------------------------------------

--
-- Structure de la table `tableau`
--

DROP TABLE IF EXISTS `tableau`;
CREATE TABLE IF NOT EXISTS `tableau` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tablecolonne` int(11) NOT NULL,
  `tableligne` int(11) NOT NULL,
  `colSpan` int(11) NOT NULL,
  `rowSpan` int(11) NOT NULL,
  `ligne` int(11) NOT NULL,
  `colonne` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `tableau`
--

INSERT INTO `tableau` (`id`, `tablecolonne`, `tableligne`, `colSpan`, `rowSpan`, `ligne`, `colonne`, `nom`) VALUES
(1, 5, 5, 2, 1, 2, 3, 'dfdf'),
(2, 5, 5, 2, 1, 1, 3, 'Gestion');

-- --------------------------------------------------------

--
-- Structure de la table `voiture`
--

DROP TABLE IF EXISTS `voiture`;
CREATE TABLE IF NOT EXISTS `voiture` (
  `immatriculation` varchar(50) NOT NULL,
  `modele` varchar(50) NOT NULL,
  `marque` varchar(50) NOT NULL,
  `vitesse` int(11) NOT NULL,
  `nationalite` varchar(50) NOT NULL,
  `prix` int(50) NOT NULL,
  `nombreStock` int(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  PRIMARY KEY (`immatriculation`),
  KEY `immatriculation` (`immatriculation`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `voiture`
--

INSERT INTO `voiture` (`immatriculation`, `modele`, `marque`, `vitesse`, `nationalite`, `prix`, `nombreStock`, `color`) VALUES
('0212', 'HODI', 'Toyata', 120, 'francaise', 5000, 20, 'Blanc,Noir,Jaune'),
('4575', 'lumbergin servel', 'lumbergin', 250, 'allemande', 500, 200, 'Blanc,Noir,Rouge'),
('0001', 'RANGER', 'FORD', 250, 'francaise', 50000000, 5, 'Blanc,Noir,Rouge');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
