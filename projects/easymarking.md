---
layout: project-layout
project-name: EasyMarking
---

## Introduction
   EasyNarking is a command-line assignment marking application developed with the intent to speed up the process of marking student assignments by taking care of all the manual work for you and letting you concentrate in the assignments themselves. EasyMarking creates feedback and grade files for each student, compares their assignments’ output with the solution, generates different kinds of course and individual reports and send emails to all the students with individual feedback and grade information. All you have to do is create general feedback sentences once such as "Make sure you indent your code next time", assign an alias and mark value to it, and apply the sentence to any assignments that don't indent their code properly by using the command "fd [alias]".

## Languages, Libraires and Frameworks
   - Python
   - [SQLAlchemy](http://www.sqlalchemy.org/)
   - SQL
   - SQLite

## Features
   - Automatic directory navigation using `nextdir` and `prevdir`
   - Automatic creation of feedback and grade files
   - Create general feedback messages with `newfd` and easily apply them to any assignments using `fd`
   - Generate course grade and feedback reports to keep track of each student's feedback and grade in one file
   - Generate individual feedback reports intended to be sent to a particular student
   - Automatically send individual feedback to each students
   - Compare a student's assignment output with the solution
   - Support for any UNIX commands

## EasyMarking Commands
  - `init`: Initiate marking
  - `ccourse`: Create a new course
  - `postasgmnt`: Tell EasyMarking that a new assignment is ready to be marked
  - `newfd`: Create a new general feedback message
  - `fd`: Applies an existing feedback message to the student you are currently marking
  - `nextdir`: Changes to the next student directory
  - `prevdir`: Changes to the previous student directory
  - `gensrep`: Generates an individual student feedback report
  - `genfrep`: Generates a report containing feedback from all the students who had their assignments marked
  - `genagrep`: Generates a report containing the assignment grades of all students in the class
  - `gencgrep`: Generates a report containing all the grades of all students in the class
  - `genallreps`: Generates all the major reports described above
  - `sendallemails`: Automatically sends an email to each student whose assignment has been marked