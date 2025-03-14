
# Introduction

### Project Overview
Dolce Far Niente is a multilingual restaurant web application developed using Next.js 14. It features a menu available in English, Russian, and Azerbaijani, and enables customers to reserve tables via WhatsApp.

### Technology Stack
- React 18
- NextJS 14
# Setup and Installation

### Prerequisites
- Node.js
- npm

### Environment variables
- ```GOOGLE_SHEETS_SPREADSHEET_ID```
- ```GOOGLE_SHEETS_API_KEY```
- ```MESSAGE_RECEIVER_PHONE_NUMBER```

### Installation steps
```
git clone https://github.com/heybetov1998/dfn-menu.git
cd dfn-menu
npm install
```

### Running the Application
```
npm run dev
```
# Features

### Multilingual Menu
The application features two distinct menus: a **Meal Menu** and a **Drinks Menu**, both available in three languages: **English**, **Russian**, and **Azerbaijani**. This multilingual capability ensures accessibility for a diverse audience.

#### Implementation
The menu items and their translations are stored in Google Sheets, with each column corresponding to a specific language.

The menu data is structured across four Google Sheets:

- **categories**: Contains category IDs and their names in each language.
- **meals**: Stores information about meal items, including their category, price, and names in multiple languages.
- **bar_categories**: Similar to categories, but for drink categories.
- **drinks**: Contains detailed information about drinks, including their associated bar category, pricing, and ingredients.

Non-menu-related website content is stored in JSON files. These JSON files allow for easy management of static content.

Data is fetched from these sheets using the **Google Sheets API**. Changes to the menu can be made directly in Google Sheets, enabling real-time updates.

#### Rendering
Menu content is dynamically fetched from Google Sheets, while other data is loaded from JSON files during the build or runtime process.

The user's selected language determines which columns from Google Sheets are displayed and which JSON file fields are rendered.

### Reservation Form

The application includes a Reservation Form that allows users to book a table at the restaurant. The form collects the following details from the user:
- **Full Name**: The user's name.
- **Reservation Day**: The day they wish to reserve a table.
- **Reservation Hour**: The desired time for the reservation.
- **Number of Guests**: The total number of guests.

Form Submission Workflow:
1. The user fills out the form and clicks the **Submit** button.
2. Upon submission, a server-side action processes the data to create a formatted text message.
3. The message is sent to a predefined WhatsApp number using the WhatsApp API.

#### Technical Implementation
The form submission is handled server-side, ensuring data validation and secure processing.

The WhatsApp message is sent using an API endpoint

This design ensures that dynamic and static content is managed efficiently, while providing a seamless user experience for both menu browsing and table reservations.
