import giveManna from '../../assets/img/projectImg/give-manna.png';
import socialNetworkApi from '../../assets/img/projectImg/social-network-api.jpg';
import weather from '../../assets/img/projectImg/weather.png';
import bookFinder from '../../assets/img/projectImg/book.png';
import artbot from '../../assets/img/projectImg/artbot.png';


const projectArr = [
    {
      id: 1,
      image: artbot,
      title: "Artbot AI",
      repositoryLink: "https://github.com/Thedanbrown/artbot-ai.git",
      deployedLink: "https://artbotai.herokuapp.com/",
      description: "A MERN application utilizing OpenAI API, Cloudinary API to generate unique, high-quality images. JSON Web Tokens was used for user authentication.",
    },
    {
      id: 2,
      image: bookFinder,
      title: "Book Finder",
      repositoryLink: "https://github.com/khanhpbui/book-finder.git",
      deployedLink: "https://google-book-search.herokuapp.com/",
      description: "An application was built using MERN stack, and Google Book API. JSON Web Tokens was used for user authentication. User will be able to sign up for an account, login, search for books, and save book searches to the back end.",
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
      description: "A back-end API for a social network application where users can demonstrate the CRUD capabilities utilizing MongoDB, Mongoose, Express.js",
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
      image: "https://picsum.photos/seed/picsum/200/200",
      title: "HEllo",
      repositoryLink: "",
      deployedLink: "",
      description: "Lorem ipsum dolor sit amet consectetur, animi officiis consectetur ex perspiciatis sint molestiae, possimus in reiciendis doloremque, placeat dicta? Dolores?",
    },
  ]

  export default projectArr;