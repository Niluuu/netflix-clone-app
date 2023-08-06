export const movieCategories = {
  title: "Trends now",
  movies: [
    { id: "1", imagePath: require("../assets/movie-1.jpg") },
    { id: "2", imagePath: require("../assets/movie-2.jpg") },
    { id: "3", imagePath: require("../assets/movie-1.jpg") },
    { id: "4", imagePath: require("../assets/movie-2.jpg") },
  ],
};

export const movieDetail = {
   name: "Wednesday",
   year: "2020",
   age: "18",
   seasons: 4,
   description:
     "Wednesday is an American coming-of-age supernatural mystery comedy horror television series based on the character Wednesday Addams",
   episodes: [
     {
       name: "Some episode name",
       id: "someid",
       min: 57,
       video: "url",
       description:
         "Wednesday is an American coming-of-age supernatural mystery comedy horror television series based on the character Wednesday Addams",
     },
     {
       name: "2 Some episode name longer than first one ",
       min: 47,
       id: "2someid",
       video: "url",
       description:
         "Wednesday is an American coming-of-age supernatural mystery comedy horror television series based on the character Wednesday Addams",
     },
   ],
   similar: [
     { id: "1", imagePath: require("../assets/movie-1.jpg") },
     { id: "2", imagePath: require("../assets/movie-2.jpg") },
     { id: "3", imagePath: require("../assets/movie-1.jpg") },
     { id: "4", imagePath: require("../assets/movie-2.jpg") },
   ],
 };
