---
layout: project-layout
project-name: EasyMarking
---

## Introduction
   EasyNarking is an assignment marking application developed for people who have a basic understanding of command line applications and need a software that can help them marking assignments. EasyMarking automatically creates feedback and grade files for each student, compares their assignments’ output with the solution, generates class and individual reports and send emails to students with individual feedback and grade information.

## Motivation
   In September, 2011, I accepted a position as a marker for the COMP 2160 (Programming Practices course) at the University of Manitoba. As part of my job, I was asked to mark approximately 500 assignments in a spam of two and a half months. Meanwhile, I was working for FreshBooks full time. I quickly realized that taking 25 minutes to mark each assignment would be bad. That's when I started developping a set of batch scripts that would take care of some of the manual work for me, such as X,Y and Z.

   In January, 2012, I decided to write a python application using SQLite to improve on the functionality provided by the scripts, and to allow any users (other than myself) to use the application. The idea was to distribute the application to future markers at the University of Manitoba.

## Languages, Libraires and Frameworks
   - Python
   - SQL
   - SQLite

## Features
   - Automatic directory navigation using `next` and `prev`
   - Automatic creation of feedback and grade files
   - Generate grade and feedback files containing information about all students in the class
   - Generate individual feedback files intended to be sent to a particular student
   - Automatically send individual feedback files to all students in which the assignment was marked
   - Compare assignment output with solution
   - Allows you to use any UNIX commands

## Commands
  - `init`: Initiate marking
  - `ccourse`: Create a new course
  - `postasgmnt`: Tell EasyMarking that a new assignment is ready to be marked
  - `newfd`: Create a new feedback message
  - `fd`: Applies an existing feedback message to the student you are currently marking
  - `nextdir`: Changes to the next student directory
  - `prevdir`: Changes to the previous student directory
  - `gensrep`: Generates an individual student feedback report
  - `genfrep`: Generates a report containing feedback from all the students who had their assignments marked
  - `genagrep`: Generates a report containing the assignment grades of all students in the class
  - `gencgrep`: Generates a report containing the all the grades of all students in the class
  - `genallreps`: Generates all major the reports
  - `sendallemails`: Automatically sends an email to each student whose assignment was marked