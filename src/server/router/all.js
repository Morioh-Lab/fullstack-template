
module.exports = [
  

  {
    method: 'GET',
    path: '/www/{file*}',
    options: {
      auth: false
    },
    handler: {
      directory: {
        path: './www'
      }
    }
  },

  {
    method: "GET",
    path: "/robots.txt",
    options: {
      auth: false
    },
    handler: (request, h) => {

      return h.file('./www/robots.txt');

    }
  }

];

