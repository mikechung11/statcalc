﻿USE [master]
GO
/****** Object:  Database [StatCalc]    Script Date: 7/11/2018 10:39:42 AM ******/
CREATE DATABASE [StatCalc]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'StatCalc', FILENAME = N'C:\Users\michaelc\StatCalc.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'StatCalc_log', FILENAME = N'C:\Users\michaelc\StatCalc_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [StatCalc] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [StatCalc].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [StatCalc] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [StatCalc] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [StatCalc] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [StatCalc] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [StatCalc] SET ARITHABORT OFF 
GO
ALTER DATABASE [StatCalc] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [StatCalc] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [StatCalc] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [StatCalc] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [StatCalc] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [StatCalc] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [StatCalc] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [StatCalc] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [StatCalc] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [StatCalc] SET  DISABLE_BROKER 
GO
ALTER DATABASE [StatCalc] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [StatCalc] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [StatCalc] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [StatCalc] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [StatCalc] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [StatCalc] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [StatCalc] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [StatCalc] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [StatCalc] SET  MULTI_USER 
GO
ALTER DATABASE [StatCalc] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [StatCalc] SET DB_CHAINING OFF 
GO
ALTER DATABASE [StatCalc] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [StatCalc] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [StatCalc] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [StatCalc] SET QUERY_STORE = OFF
GO
USE [StatCalc]
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
ALTER DATABASE [StatCalc] SET  READ_WRITE 
GO

USE [StatCalc]
GO
/****** Object:  Table [dbo].[BaseStats]    Script Date: 7/11/2018 1:26:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BaseStats](
	[StatName] [nvarchar](50) NOT NULL,
	[StatValue] [int] NOT NULL
) ON [PRIMARY]
GO
INSERT [dbo].[BaseStats] ([StatName], [StatValue]) VALUES (N'SkillCooldown', 0)
GO
INSERT [dbo].[BaseStats] ([StatName], [StatValue]) VALUES (N'IgnoreDefense', 0)
GO
INSERT [dbo].[BaseStats] ([StatName], [StatValue]) VALUES (N'AttackSpeed', 100)
GO
INSERT [dbo].[BaseStats] ([StatName], [StatValue]) VALUES (N'CritRate', 1)
GO
INSERT [dbo].[BaseStats] ([StatName], [StatValue]) VALUES (N'CritDamage', 115)
GO
