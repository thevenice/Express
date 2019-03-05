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
  <ul>
    <h4>All Members :</h4>
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
