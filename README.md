# Bank of Flatiron

Bank of Flatiron is a mini web application built with React that allows users to view their recent bank transactions, add new transactions, and filter transactions by description. This project serves as a practice exercise to reinforce concepts like components, props, state, events, and data fetching in React.

## Table of Contents

- [Project Overview](#project-overview)
- [Project Setup](#project-setup)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Author's Information](#authors-information)

## Project Overview

Bank of Flatiron is a React application that provides users with the following core features:

- View a table of all transactions.
- Fill out and submit the form to add a new transaction.
- Filter transactions by typing into the search bar.

## Project Setup

To get started with the project, follow these steps:

1. Create a new project folder and set up your React application using `npx create-react-app bankofflatiron`.

2. - Create a `db.json` file.
   - Run the following command to start the server: `npx json-server --watch db.json --port 8001`
   - If you don't want to specify the port, you can use the default port (3000) and run: `npx json-server --watch db.json`

3. Install the required dependencies for the project.

4. Set up the local JSON DB server.

5. Run the React application.

## Features

The Bank of Flatiron project includes the following:

- Fill out and submit the form to add a new transaction.
- See a table of all transactions.
- Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.
- Sort transactions alphabetically by category or description.
- Ability to delete transactions from the table.

## Technologies Used

The project is built using the following technologies:

- React
- JSON DB server (for local data fetching)

## Installation

To run the Bank of Flatiron application locally, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory.

3. Install the required dependencies using `npm install`.

4. Start the development server using `npm start`.

## Contributing

Contributions to the Bank of Flatiron project are welcome! If you have any improvements or bug fixes to propose, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Author's Information

- LinkedIn: [Patience Mugambi](https://www.linkedin.com/feed/)
 