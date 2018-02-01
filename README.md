# PennApps18-Chrome-Messenger

##All instructions will go here
A MQTT based Chat messenger for the Google Chrome Extension bar.

It consist of two part:
1) Front-end Chrome Extension
2) Back-end MQTT+Nodejs+MySQL

Front-end it offers the UX interface with register, login and chat features
Back-end offers the backbone of the communication layer. It works on the MQTT protocol woth opensource MOSCA MQTT broker.
Back-end is writtn in nodejs with different nodejs modules such as
  a) bunyan
  b) debug
  c) mysql
  d) mqtt
  e) bcrypt
There is a MySQL database with supporting schema for user data entry and user-to-user mapping.

Project UX needs more developement, with support for multi-user chatting.
 
