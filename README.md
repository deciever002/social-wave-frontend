# Social Waves - Frontend Documentation

### Overview
"Social Waves" is a full-stack social media application that enables users to share photos, like, comment on posts, search for content, and connect with others. This documentation focuses on the frontend part of the application, which is built using React, Material UI, Redux, and other modern libraries.

Backend Repo: https://github.com/deciever002/social-wave-backend

Project is live at: [Social Wave](https://social-wave-frontend.vercel.app/)

<img width="1440" alt="Screenshot 2023-09-05 at 3 43 38 PM" src="https://github.com/deciever002/social-wave-frontend/assets/112121338/4bf144e6-9548-4395-98d4-12add7915964">
<img width="1440" alt="Screenshot 2023-09-05 at 3 43 04 PM" src="https://github.com/deciever002/social-wave-frontend/assets/112121338/06811194-5ee7-4e9f-b999-98e0631c6c6f">


## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - [Cloning the Repository](#cloning-the-repository)
   - [Running the Application](#running-the-application)
   - [Environment Variables](#environment-variables)
3. [Project Structure](#project-structure)
   - [Folder Structure](#folder-structure)
   - [Key Files](#key-files)
4. [Authentication](#authentication)
   - [User Registration](#user-registration)
   - [User Login](#user-login)
   - [Authentication Middleware](#authentication-middleware)
5. [Post Interaction](#post-interaction)
    - [Liking Posts](#liking-posts)
    - [Commenting on Posts](#commenting-on-posts)
6. [Searching and Filtering](#searching-and-filtering)
    - [Searching by User Title](#searching-by-user-title)
    - [Filtering by Tags](#filtering-by-tags)
7. [Recommended Posts](#recommended-posts)
8. [Pagination](#pagination)
    - [Paginating Through Posts](#paginating-through-posts)
9. [Contribution](#contribution)

# 1. Introduction

### Technologies Used
The following technologies and libraries were used in the frontend development of "Social Waves":

- React: A JavaScript library for building user interfaces.
- Material UI: A popular React UI framework.
- Redux: A state management library for managing application data.
- React Router DOM: A library for routing in React applications.

### Prerequisites
Before you begin working with the "Social Waves" frontend application, ensure that you have the following prerequisites installed on your machine:

- **Node.js and npm**: You'll need Node.js, which includes npm, to run the application and its development tools. You can download and install Node.js from the official website: [Node.js](https://nodejs.org/).

# 2. Getting Started

#### Cloning the Repository
To get started, clone the GitHub repository for "Social Waves" frontend:

```bash
git clone https://github.com/deciever002/social-wave-frontend.git
```

#### Running the Application
Navigate to the project directory:

```bash
cd social-waves-frontend
```

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

This will launch the application locally, typically at `http://localhost:3000/`.

#### Environment Variables
Some parts of the application may require environment variables for configuration. Create a `.env` file in the project root and define the necessary variables, referencing the `.env.example` file for guidance.

# 3. Project Structure

### Folder Structure
The project follows a standard folder structure:

```
- src/
  - components/
  - actionConstants/
  - reducers/
  - actions/
  - services/
  - utils/
  - ...
```

### Key Files
- `src/index.js`: Entry point of the application.
- `src/components/`: Contains reusable UI components.
- `src/actionConstants/`: Includes action constants of the application.
- `src/reducers/`: Redux reducers for managing state.
- `src/actions/`: Redux actions for state updates.
- `src/services/`: API service functions.
- `src/utils/`: Utility functions.

# 4. Authentication

Authentication is a critical component of the "Social Waves" application, ensuring that only authorized users can access certain features and perform actions. This section provides an overview of how authentication works in the application.

## User Registration

### Registration Process

1. Navigate to the Registration Page.
2. Provide Registration Information (Full Name, Email, Password,Confirm Password).
3. Submit Registration.
4. Validation (Frontend).
5. API Interaction (POST request to backend).
6. Backend Processing (Hashing Password, Storing Data).
7. Registration Confirmation (Optional).
8. Account Created.

## User Login

### Login Process

1. Navigate to the Login Page.
2. Provide Login Credentials (Email, Password).
3. Submit Login.
4. Validation (Frontend).
5. API Interaction (POST request to backend).
6. Backend Processing (Credential Verification).
7. Authentication Token Generation.
8. Logged In.

## Authentication Middleware

Authentication middleware is used to protect routes and ensure that only authenticated users can access certain parts of the application.

1. Route Protection.
2. Route Navigation.
3. Redirect to Login (If not authenticated).
4. Authentication Check (During login/registration).
5. Access Granted (If valid token).

# 5. Post Interaction

In "Social Waves," users can interact with posts by liking them and leaving comments. This section explains how these interactions are implemented.

## Liking Posts

### Liking a Post

1. **Locate the Like Button**: Users can find a "Like" button associated with each post.

2. **Click the Like Button**: Users can click the "Like" button to express their interest in the post.

3. **Update Post Likes**: After clicking, the frontend sends a request to the backend to register the like. The post's like count is updated.

4. **Real-Time Update**: In many cases, the like count is updated in real-time to reflect the user's action without requiring a full page refresh.

### Unliking a Post

1. **Locate the Unlike Button**: If a user has already liked a post, they can find an "Unlike outlined" button associated with the post.

2. **Click the Unlike Button**: Users can click the "Unlike" button to remove their like from the post.

3. **Update Post Likes**: Similar to liking a post, the frontend sends a request to the backend to unregister the like. The post's like count is updated accordingly.

## Commenting on Posts

### Adding a Comment

1. **Navigate to the Post**: Users can view a post and find a "Comment" section.

2. **Enter a Comment**: Users can enter their comment text in a designated input field.

3. **Submit the Comment**: After entering their comment, users can click a "Submit" or "Post" button.

4. **API Interaction**: The frontend sends a POST request to the backend to add the comment to the post.

5. **Display the Comment**: The frontend updates the post's comment section to display the new comment.


# 6. Searching and Filtering

"Social Waves" allows users to search for posts by user title and filter posts by tags. This section outlines how these features are implemented.

## Searching by User Title

### Performing a Search

1. **Access the Search Functionality**: Users can typically find a search bar at the top of the application.

2. **Enter a Search Query**: Users type a search query, often related to user titles or post content.

3. **Initiate the Search**: Users click a "Search" button or press "Enter" to perform the search.

4. **Frontend Processing**: The frontend sends a request to the backend with the search query.

5. **Backend Handling**: The backend processes the query, searching for matching user titles or post content.

6. **Display Search Results**: The frontend displays the search results, usually in a list format, allowing users to click on a result to view the corresponding post or user profile.

## Filtering by Tags

### Applying Filters

1. **Tag Selection**: Users can see tags associated with posts and select one or more tags of interest.

2. **Apply Filters**: After selecting tags, users click an "Search" button.

3. **Frontend Processing**: The frontend sends a request to the backend, specifying the selected tags as filter criteria.

4. **Backend Handling**: The backend processes the request, retrieving posts that match the selected tags.

5. **Display Filtered Posts**: The frontend displays the filtered posts, often in a grid or list format, with only the posts that match the selected tags.

6. **Reset Filters**: Users can usually reset filters by deselecting tags or clicking a "x" on tags option.


# 7. Recommended Posts

Users can see the recommended posts based on the similar tags the other users used.


# 8. Pagination

Pagination is a crucial feature in "Social Waves" that allows users to browse through posts efficiently. This section explains how pagination is implemented in the application.

## Paginating Through Posts

### Displaying Posts

1. **Initial Post Display**: When users access the application, an initial set of posts is loaded , usually limited to a fixed number (e.g., 8 posts per page).

2. **Pagination Controls**: Below the list of posts, users can find pagination controls, typically including "Next," "Previous," and numbered pages.

3. **Page Navigation**: Users can click "Next" and "Previous" buttons to move between pages or click on specific page numbers.

4. **API Interaction**: When users request a different page, the frontend sends a request to the backend, specifying the desired page number.

5. **Backend Handling**: The backend processes the request, retrieves the appropriate set of posts, and sends them back to the frontend.

6. **Display Updated Posts**: The frontend updates the post list with the posts from the selected page, providing a seamless browsing experience.

### Real-Time Updates

1. **New Posts**: As new posts are created by users, they are typically added to the top of the post list in real-time without requiring a full page refresh.

2. **Sorting Options**: Users may have sorting options (e.g., "Most Recent," "Top Posts") to influence the order in which posts are displayed.

### Page Size

1. **Configurable**: Some applications allow users to configure the number of posts displayed per page, providing flexibility in their browsing experience.

2. **Default Value**: There's usually a default page size set by the application to balance performance and usability.

## Pagination and Backend Efficiency

Efficiency in pagination is vital for the application's performance. The backend should handle pagination efficiently by using database queries with proper limits and offsets.

Certainly! Here's the content for the "Contributing" section of your documentation:

# 9. Contributing

"Social Waves" welcomes contributions from the community to help improve and enhance the application. We value your input and assistance in making this project better. This section explains how you can contribute to the project.

## How to Contribute

1. **Fork the Repository**: Start by forking the "Social Waves" repository on GitHub. This will create a copy of the project under your GitHub account.

2. **Clone the Repository**: Clone your forked repository to your local development environment using the following command:

   ```bash
   git clone https://github.com/deciever002/social-wave-frontend.git
   ```

3. **Create a Branch**: Create a new branch for your contributions, naming it appropriately to describe the work you plan to do:

   ```bash
   git checkout -b feature/new-feature
   ```

4. **Make Changes**: Make your desired changes or enhancements to the codebase.

5. **Test**: Ensure that your changes work as expected and do not introduce new issues.

6. **Commit Changes**: Commit your changes with a clear and concise commit message:

   ```bash
   git commit -m "Add new feature: feature description"
   ```

7. **Push Changes**: Push your changes to your forked repository on GitHub:

   ```bash
   git push origin feature/new-feature
   ```

8. **Create a Pull Request**: Open a pull request (PR) on the official "Social Waves" repository. Provide a detailed description of your changes and why they are valuable.

9. **Review and Collaboration**: Collaborate with maintainers and other contributors to address feedback, review comments, and ensure the quality of your contribution.

10. **Merge and Deployment**: Once your PR is approved, it will be merged into the main codebase, and your contributions will be deployed with the next release.

## Code Style Guidelines

To maintain a consistent codebase, "Social Waves" follows specific code style guidelines. When contributing, please adhere to these guidelines to ensure that your code integrates smoothly:

- Use consistent indentation and formatting.
- Follow naming conventions for variables, functions, and components.
- Comment your code when necessary to explain complex logic or provide context.

## Issue Tracking

Contributors can check the project's issue tracker on GitHub to find tasks, bugs, and features that need attention. If you plan to work on a specific issue, comment on it to let others know you're addressing it.

## Community Guidelines

We encourage open and respectful communication within our community. Be kind and considerate when interacting with other contributors and users. Harassment or disrespectful behavior will not be tolerated.

We appreciate your interest in contributing to "Social Waves" and look forward to your valuable contributions. Together, we can make this project even better.




