# LuxoftTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.
Make sure Node is installed with v10.15.1
Make sure MongoDB v3.4 is installed.

## Clone the Repo 
1. `git clone https://github.com/jaykanda/luxoft-test.git`
2. `cd luxoft-test`
3. Run `npm install` to download and install the project dependencies.
4. Run `ng serve --proxy-config proxy.conf.json`
5. Open another git bash and run `node server` from the same location

## Development server

1. Run `ng serve --proxy-config proxy.conf.json` to start the Angular Lite Development server. (Proxy is configured as node server is being used at port 3000 to process the http api calls using Express JS)
2. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## To Start the node server
Run `node server`

## Mongo DB Set up

1. Install MongoDB Server v3.4
2. Create local C:\data\db (Setting up the local db for mongod server)
3. After installing the MongoDB Server, please go to C:\Program Files\MongoDB\Server\3.4\bin
4. Run `mongod` and make sure the connection happens on the port 27017

## Use the app
1. Create a new data to the grid by clicking the New button and fill submit the form.
2. Make some 10 entries to form 10 records.
3. Pagination is working with the 10 records as default size is setted to 5.
4. Edit functionality can be verified by selecting the checkbox of a reacord and then hit Edit Button, and make changes and hit update button to see the changes in the grid.
5. Delete functionality can be verified by selecting the checkbox and hit the delete button to see the changes in the grid

Thanks
