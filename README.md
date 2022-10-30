# AngularPyodideExample

This project illustrates an implementation of a Web Worker in an Angular application, which uses Python through Pyodide to run calculations. At the time of this writing the examples found online on how to do this was very sparse, which was the reason that I decided to develop this minimal working example. 

* **app.component.html:** Show an input field and indicates whether the Python application is currently loading or performing calculations.
* **app.component.ts:** Initializes the Web Worker and calls it on input changes. 
* **python.worker.ts:** Initilalizes Python and numpy and performs a calculation on each message. 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `npm install` to install dependencies. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
