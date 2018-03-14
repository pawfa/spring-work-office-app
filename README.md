# Work Office

Work Office web application in REST architecture using Spring Boot and Angular.

## Description

Example application to learn how integrate Spring Boot and Angular. It simulates employment office website with registration and funcionality of adding news. Every code review and criticism is welcome.

## Getting Started

### Technology Stack
Component         | Technology
---               | ---
Frontend          | [Angular 5](https://github.com/angular/angular)
Backend (REST)    | [SpringBoot](https://projects.spring.io/spring-boot) (Java)
Security          | Token Based (Spring Security and [JWT](https://github.com/auth0/java-jwt) )
In Memory DB      | H2
Persistence       | JPA (Using Spring Data)
Client Build Tools| [angular-cli](https://github.com/angular/angular-cli), Webpack, npm
Server Build Tools| Maven(Java)


### Dependencies

- Java 8
- Maven 3.3.9+ or Gradle 3.3+
- Node 6.0 or above,  
- npm 5 or above,   
- Angular-cli 1.6.3

### Installing

To install this application, run the following commands:

git clone git@github.com:pawfa/work-office-app.git
cd spring-work-office
This will get a copy of the project installed locally.

### Executing program

To run the server, cd into the `server` folder and run:
 
```bash
mvn spring-boot:run
```

To run the client, cd into the `client` folder and run:
 
```bash
npm install && npm start
```
