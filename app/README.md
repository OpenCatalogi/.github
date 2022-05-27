# Skeleton Application

This skeleton application is designed for rapid application testing and prototype development on the NL Design System. It provides a basic skeleton application with full NL Design system functionality that any developer can easily extend, view locally and deploy to an online environment for demonstration purposes. The main benefits are:

-   Development and (online) demonstration of prototypes without the need of a server.
-   An out-of-the-box basic application that doesn't require configuration or setup and can be extended immediately.


## Getting started

To set up your own project, you will need a GitHub account and be logged in. Simply click on the "use this template" button. Tell GitHub where you want to spin up your prototype and click "create a repository from template".


## Spinning up your local environment

To develop locally, clone your new repository to your local machine. Open the terminal, navigate to the folder containing your repository, and make a choice to run the app in Node.js/npm or docker.

### Node.js / NPM
You will need a Git client(optional), and have Node.js and NPM installed. This will use port :8000 so make sure nothing runs on that.

```cli
$ cd /pwa
$ npm install
$ npm run develop
```


### Docker @TODO IN PROGRESS
You will need to have docker installed. This will also run Conductions gateway on port :80 and the app itself on :8000 so make sure nothing runs on those.
```cli
$ docker-compose pull
$ docker-compose up --build (for first time)
$ docker-compose up (after first time)
```

After succesfully setting up your dev environment, navigate to [http://localhost:8000/](http://localhost:8000/) to view the app in your browser.

## Technical Documentation @TODO IN PROGRESS

Full technical documentation is provided on [read the docs](https://skeleton-app.readthedocs.io/en/latest//) and is based on [MKDocs](https://www.mkdocs.org/). A more product owner focused (and less technical) product page is hosted at [link to be added]().

If you want to run the technical documentation locally, you can do so by using MKDocs build server and the serve command. Just go to the local repository and execute the following command for the documenation to be available on [port 8000](localhost://8000). Make sure to [install MKDocs](https://www.mkdocs.org/user-guide/installation/) first.





