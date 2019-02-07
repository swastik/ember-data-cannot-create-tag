import Response from 'ember-cli-mirage/response';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    
    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
    */
  this.get('/templates/:id', () => {
    return new Response(200, {'Content-Type': 'application/json'},{
      "data": {
        "type": "templates",
        "id": "1",
        "attributes": {},
        "relationships": {
          "layout": {
            "data": {
              "type": "layouts",
              "id": "1"
            }
          }
        }
      }
    })
  });
  this.get('/layouts/:id');
}
