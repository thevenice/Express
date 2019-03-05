<h1>Express Notes</h1>
<a href="https://warm-sierra-71335.herokuapp.com/" target="_blank">Visit End Product</a>
<br />
<div>
  <h3>Introduction</h3>
  <ul>
    <li>
      Express is a fast(high performance), (not high level, still rpvodes full
      control), minimalist web framework for Node.js
    </li>
    <li>
      <b>"server-side"</b>
      <b>"Backend"</b>
      framework.
    </li>
    <li>
      It is used with React,vue,Angular,..etc. front end framework to create a
      fullstack Webapp .
    </li>
    <li>
      We can built API with Express to take requests from frontend to render
      client side views.
    </li>
  </ul>
</div>
<div>
  <h3>Why to use Express ?</h3>
  <ul>
    <li>Easier to Build in compare to Node.</li>
    <li>minimum codes.</li>
    <li>Express used for API/JSON data,and also for server-rendered apps.</li>
    <li>other less popular Node Frameworks: Koa, happyJS, ...</li>
    <li>Great to use with Client side JS frameworks</li>
  </ul>
</div>
<div>
  <h3>Learn before Express</h3>
  <ul>
    <li>Basic knowleagde of NodeJS and NPM</li>

    <li>JS fundamentals</li>
    <li>HTTP Status Code</li>
    <li>JSON</li>
    <li>ES6+</li>

  </ul>
</div>
<div>
  <h3>Basic Route Handling</h3>
  <ul>
    <li>
      app.get(),app.post(),app.put(),app.delete() etc are crud routes of
      Express.
    </li>
    <li>
      Express has router so we can store routes in separate files and export
    </li>
    <ul>
      <h4>Handling requests/routes is simple</h4>
      <b>within routes we can</b>
      <span
        ><li>
          //Fetch data from DB
        </li>
        <li>
          //Load pages
        </li>
        //Return JSON
        <li>
          //Full access to request & response
        </li></span
      >
    </ul>
    <ul>
      <h4>About Request and Response</h4>
      <p>
        Request and Response objects are very important. The Request object
        represents the HTTP request properties for things like "Url parameters",
        "Query strings","Any daat that sent in the body","HTTP header", and all
        the stuff is included in request. The Response Object represents HTTP
        response its on use to send back response maybe "JSON data",
        "Template","Redirect", ...etc.
      </p>
    </ul>
    <li>We can parse incoming data with body Parser</li>
  </ul>
</div>
<div>
  <h3>Express Middleware</h3>
  <ul>
    <li>
      Middleware functions are functions the have functions that have access to
      request and response object. Express has built in Middleware but it also
      comes from 3rd party packages as well as custom middleware
    </li>
    <li>Execute any code</li>
    <li>Make changes to request/response objects</li>
    <li>End Response cycle</li>
    <li>Call next middleware in the stack</li>
  </ul>
</div>

<span>---</span>

<h1>Practical Notes</h1>
<div>
  <h3>Error: Cannot GET "/"</h3>
  <p>
    means it unable to find any Route handler for home url :"/", same for any
    route that doesn't have any specific handler attached.
  </p>
</div>
<div>
  <h3>Type of request and methods</h3>
  <p>
    To go to webpage we will use a type of request called get() request. and
    note every route has access to request and response object.
    <code
      >app.get("route", "callback function with req and res as
      parameters")</code
    >
  </p>
  <p>
    use() is Method to include Middleware.
  </p>
  <p>
    to create a middlware in use() method, we have used express.static() to set
    a static folder that gets load on web by default without setting routes for
    each individual route/page.
  </p>
  <p>
    in express.static( using path.join pass "dirname","folder") and thats it we
    can now use that static folder to upload out web pages without setting
    routes.
  </p>
  <p>
    we use express for things like JSON API so that we can connect frontend
    framework woth our express server, or we can create templates where we can
    add dynamic data instead of static web app.
  </p>
</div>

<div>
  <h3>We will create Middleware(logger )</h3>
  <ul>
    <li>
      now we will create a Middleware
    </li>
    <li></li>
    it will be a logger function
    <li>
      it will take 3 params (req,res,next)
    </li>
    <li>
      here next is next function to run after resloving
    </li>
    <li>
      everytime we makes a request from server the middleware runs with it
    </li>
    <li>to get protocols(http or https) use req.protocol</li>
    <li>to get hostname(localhost or mywebsite.com) use req.hostname</li>
    <li>
      to get hostname(localhost or mywebsite.com) we can also use
      req.get("host")
    </li>
    <li>
      to get pagename with object attached(/about, /contact?id=100) use
      req.originalUrl
    </li>
  </ul>
</div>
<div>
  <h3>Using moment: a 3rd party lib.function for date and time</h3>
  <ul>
    <li>install momment, import it ,and attach it at the end of your url</li>
    <li>
      to format it as current date format attach .format() method with moment()
    </li>
  </ul>
</div>

<div>
  <h3>How to get All Members and Single Member</h3>
  <h4>All Members :</h4>
  <ul>
    <li>We wil use get() method</li>
    <li>
      In get Method we will pass first param our route which is "/api/members/"
    </li>
    <li>Second param is our callback fun() with re and res</li>
    <li>
      In it we will use resolve.json() method and we will pass our members array
      in it, and thats it .
    </li>
  </ul>
  <h4>Single Member :</h4>
  <ul>
    <li>now we need to get :id at the end</li>
    <li>first we will use res.send() to send data in postman</li>
    <li>then we will access params in request: req.params.""</li>
    <li>member.id is number type</li>
    <li>req.params.id is string type</li>
    <li>
      so we will use parser function : parseInt and put the req.params.id in it
    </li>
    <li>
      we also throw error if member is not there
    </li>
    <li>
      we will use .some() js method
    </li>
    <li>
      it checks weather the given condition is true or false
    </li>
    <li>
      in some() we will just pass a function that checks memeber.id=params.id
    </li>
    <li>
      now apply condition if some() give true run res.json
    </li>
    <li>
      if some() gives false run errormsg
    </li>
  </ul>
</div>
<div>
  <h3>Routes folder</h3>
  <ul>
    <li>
      create a routes/api/member.js file to relocate our app.use() methods that
      provides single/all members
    </li>
    <li>
      import express and than create a router using express.Router() with
      Capatial R.
    </li>
    <li>
      replace app with router and remove first param from all .use() methods.
    </li>
    <li>
      replace it with "/" and "/:id as we are going to provide path in index
      file
    </li>
    <li>
      using routes from routes/api folder
    </li>
    <li>
      <code>
        app.use("/api/members", require("./routes/api/members"));
      </code>
    </li>
    <li>
      as we have define our router here
    </li>
    <li>
      we have to remove our routes from routes/api/mem file
    </li>
    <li>
      and replace it with "/"
    </li>
  </ul>
</div>
<div>
  <h3>Mutation in API using Express</h3>
  <ul>
    <li>
      Create new Member variable body{}
    </li>
    <li>
      for creating any mutation/post in express we use post() request method
    </li>
    <li>
      <code>router.post("/", callback)</code>
    </li>
    <li>we can dynamically get name and email from req.body.*</li>
    <li>put condition if we dont get name and email throw error</li>
    <li>we will use res.status() to send status code</li>
    <li>then we will use json to send newMem object</li>
    <li>
      then we will push this new member in old members array and resolve this
      members objects using res.json(members array here)
    </li>
  </ul>
</div>
<div>
  <h3>Body Parser Middleware</h3>
  <ul>
    <li>
      Body Parser Middleware is used to resolve and get the item we have posted
      using post().
    </li>
    <li>
      without express.json() we can't post object data of a body
    </li>
    <code>
      app.use(express.json());
    </code>
    <li>
      and without express.urlencoded() we cant get values from form
    </li>
    <code>
      app.use(express.urlencoded());
    </code>
  </ul>
</div>
<div>
  <h3>Update Value in DB using Express Put()</h3>
  <ul>
    <li>update member details on basis of id</li>
    <li>to update data on server we use put() request</li>
    <li>
      check if id contains same data in our array/db by using some() and in it
      compare member id with parsed Int req.params.id
    </li>
    <li>
      get request body and assign it too new varibale called updatedMember
    </li>

 <li>
      now compare this new info with each id in members
    </li>
    <li>
      parse update member id in integer
    </li>
    <li>lets update member/name/email</li>
    <li>
      send json back
    </li>
    <li>
      <code>
        res.json({ msg: "member updated", member });
      </code>
    </li>

  </ul>
</div>
<div>
  <h3>Deleting a Member using Delete() request</h3>
  <ul>
    <li>create a route with delete() method of request</li>
    <li>
      again using some() check if we have member with same id client is
      requesting
    </li>
    <li>
      now if its true resolve the json by filtering out the members array, and
      only display the remaining members(remaining members of the array, or we
      can say members - requested member)
    </li>
    <li>thats it for CRUD in Express</li>
  </ul>
</div>
<div>
  <h3>Express_handlebars: A template engine for Express</h3>
  <ul>
    <li>
      to use it install express-handlebars, and create folder name views in root
      of project and then create another folder inside it called layouts.
    </li>
    <li>
      now in view folder create index.handlebars (yes .handlebars as extension)
      and create one file in layouts folder with name main.handlebars
    </li>
    <li>
      now in our main server file index.js import express-handlebars as exphbs
      and create a Middleware. Middle will use .engine() and .set() methods.
    </li>
    <ul>
      Example:
     <li> <code>
      app.engine("handlebars", exphbs({
       defaultLayout: "main" 
       }));
       </code> </li>
      <li>  <code>
        app.set("view engine",
        "handlebars");
        </code> </li>
       <li> <code>
        app.get("/", (req, res) => {
        res.render("index", { title: "Handlebars", members }); });
      </code></li>
    </ul>
  </ul>
</div>
