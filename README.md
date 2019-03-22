# data-practices-site
The site for the data practices values and courseware

To view the courseware specifically, view /contents/courseware/

If you would like to add content, or a new course, please submit a pull request or contact community@data.world.

## Setup Instructions
* Install Node (7.x.x)
* Install Wintersmith globally on your node environment.
```
npm install -g wintersmith
```
* Install NPM Dependencies
```
npm install
```

## Run Development server
* Run following command on terminal
```
wintersmith preview
```
* Open `http://localhost:8080` on your browser.

## Generate static build
```
wintersmith build
```
