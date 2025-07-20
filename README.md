# HTTP Server Project

## Overview
This project is a simple HTTP server implemented in Node.js. It demonstrates how to serve different types of content (JSON, CSV, HTML) and how to implement basic routing for API endpoints. The project is structured for easy development and includes nodemon for automatic server restarts during development.

## Features
- **Environment Configuration**: Uses `dotenv` to manage environment variables for server configuration (e.g., `PORT`, `HOST`).
- **Development Tools**: Includes `nodemon` for hot-reloading during development. Configuration is provided in `nodemon.json`.
- **API Routing**: The main server uses a custom request listener from `src/routes.js` to handle API endpoints for books and authors.
- **Multiple Content Types**:
  - **JSON**: `src/data/json.js` serves a JSON response.
  - **CSV**: `src/data/csv.js` serves a CSV file as a download.
  - **HTML**: `src/data/html/html.js` serves an HTML file (`index.html`).

## File Structure
```
root/
├── nodemon.json           # Nodemon configuration
├── package.json           # Project metadata and dependencies
├── src/
│   ├── server.js          # Main server entry point
│   ├── routes.js          # API routing for /books and /authors
│   └── data/
│       ├── csv.js         # CSV server
│       ├── json.js        # JSON server
│       └── html/
│           ├── html.js    # HTML server
│           └── index.html # HTML content
```

## Implemented Endpoints
- `GET /books`   → Returns a list of books in JSON format
- `GET /authors` → Returns a list of authors in JSON format
- Other endpoints return a 404 JSON error

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up a `.env` file with the following variables:
   ```env
   PORT=8000
   HOST=localhost
   ```
3. Start the server:
   ```bash
   npm start
   ```
   Or for development with hot-reload:
   ```bash
   npm run dev
   ```

## Author
Gabriel J
