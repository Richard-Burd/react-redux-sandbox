## Instructions for Setting up Backend API for Final Portfolio Project
Instructions are here:
https://www.newline.co/fullstack-react/articles/how-to-get-create-react-app-to-work-with-your-rails-api/

The repo this is based on is here:
https://github.com/fullstackreact/food-lookup-demo-rails


The instructions start at the "Here we go" title

1.) ./portfolio-project (master) $ create-react-app client
      ...this will create a React app called "client"

2.) Create a backend Rails API app in the same directory:
    ./portfolio-project (master) $ rails new server --api
    ...this will create a Rails app called "server"

3.) Go into the backend Rails API app and add the following gem to the Gemfile:
    a.) gem 'foreman', '~> 0.82.0'
    ...then make sure to run bundle install

4.) inside (the main directory of ?) the backend Rails API create a folder called: Procfile

5.) Inside Procfile you need 2 lines of code that look like this:
    ```
    web: cd client && npm start
    api: bundle exec rails s -p 3001
    ```
6.) Inside the Rails app run this command:
    ./portfolio-project/server (master) $ foreman start -p 3000
    ...The client app will boot — we can see it running in our browser at
    localhost:3000. And our API server is up and listening at localhost:3001.
    Hitting CTRL+C kills both processes together, humanely.

7.) For our sanity, let's add a Rake task that executes this command for us.
    Create the file ```lib/tasks/start.rake:```
    ```
    task :start do
      exec 'foreman start -p 3000'
    end
    ```
    ...We can now boot the app with:
    ./portfolio-project/server (master) $ rake start
    NOTE: the file is here:
    https://github.com/fullstackreact/food-lookup-demo-rails/blob/master/lib/tasks/start.rake


## React-Redux Sandbox
This is a big sloppy workspace that I use to tinker around with stuff and get things to work properly before I use them in projects.  Most of the content will be nonsensical or seemingly useless.  Sorry about that.


Left off on this video here:
https://www.youtube.com/watch?v=tQ80uAyqVyI&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=28
React Redux Tutorials - 28 - Async Actions

looking at this project here:
/home/redburd/Desktop/dev/2/react-redux-sandbox/React-Redux-Tutorials/react-redux-demo









## React-Redux
https://www.youtube.com/watch?v=9boMnm5X9ak

## React Only (Got to Lesson 19)
https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3

## Built Out A React Router:
https://www.youtube.com/watch?v=Law7wfdg_ls
completed this codealong until "30:00 / 33:09"
...the Fortnite API used in the codealong was down so I used a GOT API but it is
missing id's so it was unfinished.  The scaffolding is there and working though.

## Completed 43 of "ReactJS Tutorial" with Vishwas
https://www.youtube.com/watch?v=j3j8St50fNY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=43

## Libraries Required for Final Project:
./portfolio-project (master) $ rails new back-end-api --api
./portfolio-project (master) $ npx create-react-app front-end
./portfolio-project/front-end (master) $ npm install --save redux
./portfolio-project/front-end (master) $ npx install redux react-redux
./portfolio-project/front-end (master) $ npm install react-router-dom
./portfolio-project/front-end (master) $ npm install --save redux-thunk
./portfolio-project/front-end (master) $ npm install redux-logger ---- Vishwas method
./portfolio-project/front-end (master) $ npm install axios redux-thunk ---- Vishwas method
./portfolio-project/front-end (master) $ npm i --save redux-logger ---- Some guy
./portfolio-project/front-end (master) $ npm install --save redux-devtools-extension ----Vishwas method
NOTE: this last one is very important and makes the store a lot cleaner because you don't need this big
bag of verbage if you use it:
"window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"

./portfolio-project/front-end (master) $ npm install fetch ?
./portfolio-project/front-end (master) $ npm install node-fetch --save
## Left off Review Here:
https://learn.co/tracks/full-stack-web-development-v8/module-17-redux/section-4-async-redux/redux-thunk

trying to implement this here:
https://learn.co/tracks/full-stack-web-development-v8/module-17-redux/section-4-async-redux/redux-thunk

the code's problem could be anywhere between these files:

react-redux-demo/src/components/Astronauts.js
react-redux-demo/src/redux/astronauts/actions/fetchAstronauts.js
react-redux-demo/src/redux/astronauts/reducers/astronautsReducer.js

## Left off watching this video here:
https://www.youtube.com/watch?v=WRk0nT8ps6w

# This could be a useful thing to utilize:
https://github.com/reduxjs/redux-toolkit
