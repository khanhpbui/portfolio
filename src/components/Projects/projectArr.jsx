import giveManna from '../../assets/img/projectImg/give-manna.png';
import socialNetworkApi from '../../assets/img/projectImg/social-network-api.png';
import weather from '../../assets/img/projectImg/weather.png';
import bookFinder from '../../assets/img/projectImg/book.png';
import artbot from '../../assets/img/projectImg/artbot.png';
import teamProfile from '../../assets/img/projectImg/team-profile.png';


const projectArr = [
    {
      id: 1,
      image: artbot,
      title: "Artbot AI",
      repositoryLink: "https://github.com/Thedanbrown/artbot-ai.git",
      deployedLink: "https://artbotai.herokuapp.com/",
      description: "A MERN-stack application utilizing OpenAI API, Cloudinary API, GraphQL, and JWT to generate and store unique AI created images.",
    },
    {
      id: 2,
      image: bookFinder,
      title: "Book Finder",
      repositoryLink: "https://github.com/khanhpbui/book-finder.git",
      deployedLink: "https://google-book-search.herokuapp.com/",
      description: "An interactive book search application built using MERN-stack, Google Book API ,GraphQL, and JWT for user authentication.",
    },
    {
      id: 3,
      image: giveManna,
      title: "Give Manna",
      repositoryLink: "https://github.com/frutaseca/Give-Manna.git",
      deployedLink: "https://frutaseca.github.io/Give-Manna/",
      description: "A front-end web application created for a non-profit organization utilizing Materialize CSS Library, Accuweather API, and BlueCart API.",
    },
    {
      id: 4,
      image: socialNetworkApi,
      title: "Social Network API",
      repositoryLink: "https://github.com/khanhpbui/social-network-api.git",
      deployedLink: "https://drive.google.com/file/d/1defoxPiyOZAgM3VugRPqkJu-hIMPrhHS/view",
      description: "An API for supporting a social network application where users can demonstrate the CRUD capabilities utilizing MongoDB, Mongoose, Express.js",
    },
    {
      id: 5,
      image: weather,
      title: "Weather Forecast",
      repositoryLink: "https://github.com/khanhpbui/weather-forcast.git",
      deployedLink: "https://khanhpbui.github.io/weather-forcast/",
      description: "A front-end application created to retrieve weather data for cities by making calls to third party API - OpenWeather.",
    },
    {
      id: 6,
      image: teamProfile,
      title: "Team Profile Generator",
      repositoryLink: "https://github.com/khanhpbui/team-profile-generator.git",
      deployedLink: "https://drive.google.com/file/d/18Tt-qrgQEsX21YoGwewQhlBbbI9qlcIk/view",
      description: "A CLI-based UI tool for employee managenent created with HTML, CSS, JavaScript, Bootstrap, jQuery, Node.js, and tested with Jest",
    },
  ]

  export default projectArr;