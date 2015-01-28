var gcloud = require('gcloud');
var dataset;

// From Google Compute Engine:
dataset = gcloud.datastore.dataset({
  projectId: 'precise-airship-823'
});

// Or from elsewhere:
dataset = gcloud.datastore.dataset({
  projectId: 'precise-airship-823',
  keyFilename: './keyfile-1991.json'
});

dataset.get(dataset.key(['Trivia', 'hgtg']), function(err, entity) {
  console.log(err || entity);
});

console.log("other:");

dataset.get(dataset.key(['Product', 'Computer']), function(err, entity) {
  console.log(err || entity);
});
