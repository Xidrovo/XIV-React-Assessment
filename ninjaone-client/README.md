# XIV-NinjaOne-Assessment

This project is a device dashboard that allows users to manage and visualize various devices. It follows the Atomic Design principles for organizing components.

## Features

- Fetch and display devices from a database
- Filter and sort devices by different criteria
- Add, edit, and delete devices
- Responsive design using Tailwind CSS

## Tech Stack

- React
- Tailwind CSS
- Jest for testing
- Atomic Design principles for component organization

## Atomic Design

The project is structured according to the Atomic Design methodology, which divides components into the following categories:

- Atoms: Basic building blocks, such as buttons and input fields
- Molecules: Combinations of atoms, such as forms and cards
- Organisms: Combinations of molecules, such as navigation bars and tables
- Containers: manage state, handle data fetching, and pass data to presentational components, encapsulating application logic and data flow.

## Installation

To set up the project, follow these steps:

#### Clone the repository

```
git clone https://github.com/Xidrovo/XIV-NinjaOne-Assessment.git
```

#### Change into the project directory

```
cd device-dashboard
```

#### Install dependencies

```
npm install
```

#### Start the development server, in other project. It should run on localhost:3000

```
npm start
```

## Testing

To run the tests, execute the following command:

```
npm test
npm test:watch
```
