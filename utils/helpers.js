// Custom handlebars helper functions
// Week 14 Exercise 14
module.exports = {
        format_date: (date) => {
          return `${new Date(date).getDate()}/${
            new Date(date).getMonth() + 1
          }/${new Date(date).getFullYear()} at ${date.toLocaleTimeString()}`;
        },
};
