# Recipe Mock App 

This mini project is a mock web page built with React (frontend) and Django (backend) to manage recipes.

## Features

- **View Recipes:** Browse through a list of recipes.
- **Recipe Details:** Click on a recipe to view its details including ingredients and instructions.

## Technologies Used

- **Frontend:** React, Axios
- **Backend:** Django, Django REST Framework
- **Styling:** CSS
- **Deployment:** AWS S3 (frontend), AWS EC2 (backend)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pianist-in-tech/assess-Jul24.git
   cd assess-Jul24
   ```

2. Install dependencies:
   ```bash
   npm install   # Install frontend dependencies
   pip install -r requirements.txt   # Install backend dependencies
   ```

3. Configure the backend:
   - Ensure Django is set up with a PostgreSQL database for development.
   - Update `settings.py` with database credentials and other configurations.

4. Run the development servers:
   ```bash
   npm run dev   # Start React development server
   python manage.py runserver   # Start Django development server
   ```

5. Access the application at `http://localhost:5173` in your browser.

## API Endpoints

- **GET `/api/recipes/`**: Fetch all recipes.
- **POST `/api/recipes/`**: Add a new recipe.
- **GET `/api/recipes/<id>/`**: Fetch a specific recipe by ID.
- **PUT `/api/recipes/update-delete/<id>/`**: Update a recipe by ID.
- **DELETE `/api/recipes/update-delete/<id>/`**: Delete a recipe by ID.

## Deployment

To deploy this application to production:

1. **Frontend (React)**: Deploy to AWS S3.
   - Build the React app: `npm run build`
   - Configure AWS S3 and upload the build files.
   - Set permissions and configure the bucket for static website hosting.

2. **Backend (Django)**: Deploy to AWS EC2 (or preferred server).
   - Set up a server instance (EC2) and install necessary software (Python, Django, PostgreSQL/SQLite).
   - Configure server settings and database connections.
   - Deploy Django application and set up Gunicorn with Nginx as a reverse proxy.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any improvements or fixes.
