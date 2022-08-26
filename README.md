Welcome to Red-Tech-App, this app demonstrates my ability to build a responive front end app, that allows users to see, filter by id or type, and sort through a list of orders. As well as
create new, delete one or more existing orders, as well as save a draft order.

This app is built using react, redux, material ui, and jest.

This app is hosted using Heroku as well as continuous integration has been implmented using heroku pipelines.
You can visit the app live here:
https://red-tech-app-stage.herokuapp.com/

To run this app locally you will need to clone this repository to your local drive.
Once you have navigated to this app directory run 'npm install' in your command line.

Once all the dependencies have been installed you can launch the app locally by running 'npm run start' on the command line.

Run 'npm run tests' to execute all tests.
Run 'npm run build' to create a production optimized build.

The continuous is executed by creating a pull request from a feature branch into the Stage branch. Once all heroku CI checks have passed, the PR can be merged, which will trigger a deployment into the Stage environment. Once the changes have been deployed in the Stage they can then be deployed into the production environment.

This was a fun and challenging project, that allowed me to learn some new things as well as refine some of my other skills.

Thanks,
Caleb
