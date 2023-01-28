<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com//subh-cs/Blare">
    <img src="/assets/BlareLogo.png" alt="Logo" width="200">
  </a>

<h3 align="center">Blare</h3>

  <p align="center">
    Discover about culture and music
    <br />
    <a href="https://github.com/subh-cs/Blare"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://subh-ace-it.herokuapp.com">View Demo</a>
    ·
    <a href="https://github.com/subh-cs/Blare/issues">Report Bug</a>
    ·
    <a href="https://github.com/subh-cs/Blare/issues">Request Feature</a>
  </p>
</div>

Blare is a social media platform for musicians. It allows musicians to create profiles, share and stream music, collaborate with other musicians, share updates and events, and interact with fans.

## Features

- Profile creation: Musicians can create a personal profile on the platform, which includes information about themselves, their music, and their interests.
- Music streaming: The platform allows musicians to upload and share their music, and allows users to stream and discover new music.
- Collaboration tools: Musicians can connect with other musicians on the platform, potentially leading to collaborations on new music.
- News feed: The platform includes a news feed feature, where musicians can share updates about their music, upcoming shows, and other relevant news.
- Event listings: Musicians can list and promote their upcoming shows on the platform, and users can discover new shows and events to attend.
- Group creation: Musicians can create and join groups based on their interests or genre of music, allowing for a sense of community on the platform.
- Direct messaging: Musicians can privately message each other and collaborate on music projects or discuss other topics.
- Fan engagement: The platform allows musicians to interact with their fans and share content with them, such as exclusive behind-the-scenes photos or videos.
- Analytics: Musicians have access to analytics on their music and interactions on the platform, allowing them to track their growth and engagement.

## Tech stack

Blare is built with the following technologies:

- [Next.js](https://nextjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [JWT](https://jwt.io/)
- [MongoDB](https://www.mongodb.com/)


<!-- GETTING STARTED -->
## Getting Started

Follow this instructions and setup this project on your system locally

### Prerequisites
_[Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) should be installed in your system._

_Don't forget to set environment variables of `PORT` and `MONGO_URI`._
   
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/subh-cs/Blare.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create .env file in the parent file directory and copy this
   ```sh
   const PORT = 3000
   const MONGO_URI = 'mongodb://localhost:27017/myapp'
   ```
5. Start the server
   ```sh
   npm start
   ```

See the [open issues](https://github.com/subh-cs/Blare/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the Apache License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

[Subhodip Roy](https://linkedin.com/in/subh-cs) - [@23_subh](https://twitter.com/subh-cs) - itssubhodiproy@gmail.com

Project Link: [https://github.com/subh-cs/Blare](https://github.com/subh-cs/Blare)

# API Endpoints

## User Authentication

- **POST /api/authenticate**
    - Perform user authentication and return a JWT token
    - Input: 
        - Email
        - Password
    - Return:
        - JWT token

## User Follow/Unfollow
- **POST /api/follow/{id}**
    - Authenticated user would follow user with {id}
- **POST /api/unfollow/{id}**
    - Authenticated user would unfollow a user with {id}

## User Profile
- **GET /api/user**
    - Authenticate the request and return the respective user profile
    - Return: 
        - User Name
        - Number of followers 
        - Number of followings

## Posts
- **POST /api/posts/**
    - Add a new post created by the authenticated user
    - Input:
        - Title
        - Description
    - Return:
        - Post-ID
        - Title
        - Description
        - Created Time(UTC)
- **DELETE /api/posts/{id}**
    - Delete post with {id} created by the authenticated user
- **POST /api/like/{id}**
    - Like the post with {id} by the authenticated user
- **POST /api/unlike/{id}**
    - Unlike the post with {id} by the authenticated user
- **POST /api/comment/{id}**
    - Add comment for post with {id} by the authenticated user
    - Input:
        - Comment
    - Return:
        - Comment-ID
- **GET /api/posts/{id}**
    - Return a single post with {id} populated with its number of likes and comments
- **GET /api/all_posts**
    - Return all posts created by authenticated user sorted by post time
    - Return:
        - id: ID of the post
        - title: Title of the post
        - desc: Description of the post
        - created_at: Date and time when the post was created
        - comments: Array of comments, for the particular post
        - likes: Number of likes for the particular post


