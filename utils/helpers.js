// Custom handlebars helper functions
// Week 14 Exercise 14
module.exports = {
        format_date: (date) => {
          console.log(date)
          // return `${Date.getMonh() + 1}/${Date.getDate()}/${Date.getFullYear()}`;

          return `${new Date(date).getDate()}/${
            new Date(date).getMonth() + 1
          }/${new Date(date).getFullYear()} at ${date.toLocaleTimeString()}`;
          // at ${date.toLocaleTimeString()}
       
        },
        // format_date: date => {
        //   return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        // }
        format_plural: (word, amount) => {
          if (amount !== 1) {
            return `${word}s`;
          }
      
          return word;
      }
     
};
