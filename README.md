# Juicer

The purpose of this project is to serve as a playground to get familiarized with several technologies and practice design patterns. This document will serve as a kind of log book where the different steps beeing taken are listed and the reasoning behind them explained when deemed worthy of it. 

## React + TypeScript + Vite (+ React Router v7 as a framework)

The project has been created with Vite as bundler and Babel is beeing used for Fast Refresh:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

There was a migration halfway through the project to using React Router as a framework rather than as a library. The whole process is detailed in the official documentation:

- https://reactrouter.com/upgrading/component-routes

One important thing about this change is that it affects how components are tested in Cypress. In order to test components that are wrapped inside the routing tree you have to either mock all the wrappers that are expected to be there or disable the reactRouter plugin. In this case that was the approach adopted.

## TailwindCSS

The CSS framework has been incorporated to the project following the recommended by the developer as of 2/19/2025:

- https://tailwindcss.com/docs/installation/using-vite

## Cypress

Cypress is used to test both components and e2e interactions. Installation and use of plugins can be tricky because of conflicts on how the modules are imported inside the project. The recommended steps as of 19/02/2025 have been followed:

- https://docs.cypress.io/app/get-started/install-cypress
  
After installation, launching the GUI and follwing the guided processes allow you to seemesly set up the project environment both for e2e and component testing... Or so should it be. 

### Component testing
In this case i got this error after the initial setup for component testing:

![alt text](image.png)

To resolve this issue I had to specify to the compiler (tsc) that I wanted him to generate ES6 modules, that use the 'export/import' syntax:

    "compilerOptions": {
        "module": "ES6",
    },

After that i encountered another problem. The component was rendered but the styles provided by Tailwind were not included. Just importing <i>index.css</i> from the source folder of the project in <i>component.ts</i> file generated by Cypress in the support folder fixed the issue.

At this point the linter was complaining about the use of outdated syntax in this autogenerated files inside support, specifically the use of namespaces. Since Cypress was using it and it was not a problem that was going to affect runtime execution I opted for disabling the linter warning.

Finally I was able to render a component as expected in the Cypress GUI for its testing.

<u>Important note:</u>

In order to test components that are wrapped inside the routing tree you have to either mock all the wrappers that are expected to be there or disable the reactRouter plugin. In this case that was the approach adopted.

In the [vite.condig.ts](vite.config.ts) file, the plugin is loaded conditionally, skipping it when Cypress is the one loading the component for testing. A more robust solution involving different configuration files for different purposes would be much better.

### e2e testing

Cypress did all the setup and generated an exemaple that was able to run without further tunning of the environment.
In order to visit my locally hosted application, I set up its url as an environment variable in the <i>cypress.config.ts</i> file:

    env: {
        local_url: 'http://localhost:5173'
    },

After that i was able to visit it from my spec file. At this point the project was set for both component and e2e testing with Cypress.

## Design Patterns

### Factory Pattern

This pattern consists in boilerplating how a certain kind of object should be created inside a <b>factory object</b> and then instanciating particular cases according to the requirements in each call to said factory. 

In this project this pattern is applied to the creation of the different forms. Each possible element that could appear in the project forms is defined once and then, whenever it's required in a particular form, it is built on demand by the factory. 

The factory provides controled customization of the resulting element through the arguments which it was called.

For example, this is how the login form is built:

1. This is the <i>[recipe](src/components/Form/formDefinitions.ts)</i> for the form
2. This is the <i>[template](src/components/Form/FormElements/FormElementTextInput.tsx)</i> for a text input
3. This is the <i>[factory](src/components/Form/FormFactory.tsx)</i>
4. This is the <i>[login form](src/components/Form/LoginForm.tsx)</i> where the factory is called with the recipe instructions to generate the form

This pattern was also applied to the creation of custom error objects to use in the error handling of the API services: [errorHandler.ts](src/helpers/errorHandler.ts).

### Chain of Responsability

This behavioural pattern is based on decoupling different actions to perform in a process so there is a dedicated <b>handler</b> for each of those actions. This way there is no need for each handler to know what the other handlers do. The only thing a handler needs to know about another is how to call it when it is required to further process the object at hand.

In this project, this aproach has been followed to handle errors when calling the API:

1. The <i>[service](src/services/FruitService.ts)</i> calls the API and waits for its response
2. If an exception rises throughout the process, the <i>[throwAxiosError](src/helpers/axiosInstance.ts)</i> function is called from the service and the error is then processed by it
3. The throwAxiosError function analyzes the error and builds a custom error object that is then thrown to be catched by the <i>[handleError](src/helpers/axiosInstance.ts)</i> function, which in turn performs the corresponding operations such as informing the user accordingly and logging data about the error

### Frameworks and Design Patterns

Although a framework is not a design pattern in itself, the scaffolding and a toolkit that provides implicitly guides the developer into adopting the design patterns that have informed how the framework works.

Since this project has been developed using React Router v7 as a framework that itself is built on top of React, the design patterns used throughout this framework are also applied in this project. The most significant ones are:

1. Composite Pattern: elements are structured in Tree/Node compositions and access to both Tree and Node elements is uniform
2. Facade Pattern: the inbuilt tools of the framework provide abstraction from other APIs of lower level that are used by them in our stead, making it easier for the developer to acomplish the desired result
3. State Pattern: React uses hooks to keep track of state (useState) objects and react to changes in them executing the coresponding logic (useEffect)
4. Observable Pattern: the useContext hook in React allows to follow a similar patter to an observable/subscribers system. With one context object providing the state values to each component that uses the useContext hook, sharing information from one to many is accomplished but there are some important differences: 
    - Context triggers re-renderizations, not events
    - The "consumer" is tied to React components render cycle, they can't suscribe and unsuscribe unlike in RxJS
    - Context always provide the state values, there is no "lazyness"