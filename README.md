# Backend - Security - Validate

- Do not use mongo/mongoose
- Create a tiny API with two endpoints:
  - `GET /birds` - returns current list of bird sightings in app memory
  - `POST /birds` - adds a bird sighting to app memory

- A bird sighting record contains three strings: "species", "notes" and "estimatedAmount"
  - species must be at least 3 characters long
  - species must be at most 80 characters long
  - notes must be at most 140 characters long
  - estimatedAmount must contain only numbers


  - Question: what is it called when a string contains only letters and numbers?
  Alphanumeric

  - *BONUS* species and notes must contain only letters (no numbers or symbols)
  

  - *BONUS* Research: what is a mimetype? Provide a very short definition and 3 examples
MIME types enable browsers to recognize the filetype of a file which has been sent via HTTP by the webserver. As a result the browser is able to choose a suitable displaying method. 
 example : 
 - text/html for html-files
 - image/jpeg for jpeg-files
 - application/json



- Do not commit `node_modules`

- Test your API
