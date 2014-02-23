// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.

        url: 'http://my-ghost-blog.com',

        // Example mail config
        // Visit http://docs.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        // ```



// Host    ec2-54-197-237-231.compute-1.amazonaws.com
// Database    d2iq6v493lir13
// User    ritrrmmtfdobdi
// Port    5432
// Password    Hide 7_x5MyTnGHIvhNmSsBys5u-aOx

        database: {
            client: 'pg',
            connection: {
		host:'ec2-54-197-237-231.compute-1.amazonaws.com', 
		user:'ritrrmmtfdobdi',
		password:'Hide 7_x5MyTnGHIvhNmSsBys5u-aOx',
		database:'d2iq6v493lir13',
		port:'5432'
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: process.env.PORT
        }
    }
};

// Export config
module.exports = config;
