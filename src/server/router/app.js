



module.exports = [

    {
        method: "GET",
        path: "/{p*}",
        options: {
            auth: false
        },
        handler: (request, h) => {

            return h.view('www/index.html');

        }
    }
]
