# React E-commerce Store

This is a React-based E-commerce store that allows users to browse products, filter them by categories, and manage product data (add, update, delete). The data is initially fetched from the FakeStore API and saved to localStorage for further manipulation.

## Features

- **Product Listing:** View all products on the homepage.
- **Category Filtering:** Browse products by specific categories via navigation.
- **CRUD Operations:** Add, update, and delete products using localStorage.
- **Notifications:** User feedback with React Toastify.

## Technologies Used

- **React**: Frontend framework
- **Axios**: For fetching data from the FakeStore API
- **FakeStore API**: Source of product data
- **localStorage**: For persisting product data
- **React Toastify**: For displaying notifications

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/111-amann/Ecommerce-Store.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Ecommerce-Store
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Important Note

The project **will not run** as expected because the API fetching code is commented out, and the app currently relies on `localStorage` for data handling. To make the app functional:

1. Uncomment the API fetching code in the project files.
2. Adjust the code to re-enable fetching from the FakeStore API if needed.

## Project Link

[GitHub Repository](https://github.com/111-amann/Ecommerce-Store)

---

Feel free to fork the project and modify it according to your needs. Contributions are welcome!

