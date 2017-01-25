# nodejs-mvc
this is a simple web apps allowing to expose the Node-js MVC capabilities.

This kind of web apps can easily replace huge .NET/Java infrastructure for small and autonomous web application.

The strength:
- small footprint
- portable on all platform
- container compliant
- modular (use only necessary componement)
- fullstack javascript framework (very helpful in web apps univers)

The Weakness:
- full javascript environment (for whose don't like this language!)
- no dedicated IDE

The nodejs componnement used in this apps:
- Express.js : the MVC backbones
- twig       : the HTML rendering
- sqlite3    : the Database storage manage (including database itself)
- i18n       : the Internationalisation framework
- loadash    : an handy feature to manage arrays.


The MVC directoires:
.
├── app.js
├── bin
│   └── www
├── package.json
├── Models
│   ├── db.js
│   ├── document.js
│   └── schema.js
├── public
│   ├── images
│   ├── javascripts
│       ├── jquery-3.1.1
│       └── jquery-ui-1.12.1
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── layout.twig
    ├── search.twig
    └── error.twig
  
  
  
