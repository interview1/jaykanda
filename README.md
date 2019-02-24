# LuxoftTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.
Make sure Node is installed with v10.15.1
Make sure MongoDB v3.4 is installed.

## Clone the Repo 
`git clone https://github.com/jaykanda/luxoft-test.git`
`cd luxoft-test`
Run `ng serve --proxy-config proxy.conf.json`
Open another git bash and run `node server` from the same location

## Development server

Run `ng serve --proxy-config proxy.conf.json` to start the Angular Lite Development server. (Proxy is configured as node server is being used at port 3000 to process the http api calls using Express JS)
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## To Start the node server
Run `node server`

## Mongo DB Set up

Install MongoDB Server v3.4
Create local C:\data\db (Setting up the local db for mongod server)
After installing the MongoDB Server, please go to C:\Program Files\MongoDB\Server\3.4\bin
Run `mongod` and make sure the connection happens on the port 27017

Thanks
