import * as express from 'express';
import {treeviewData} from './treeview-data';
import {lamborghiniModels, lamborghinData} from './car-data';
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/api/log', (req, res) => {
  const log = {
    entries: [
      {text: 'loading failed', severity: 1},
      {text: 'system failure', severity: 1},
      {text: 'slow response', severity: 2},
      {text: 'login failed', severity: 2},
      {text: 'null argument exception', severity: 1},
    ],
  };

  res.json(log);
});

app.get('/api/friends', (req, res) => {
  const friends = {
    friends: ['Joe', 'Tim', 'Jim', 'Jane', 'Anne', 'Billy', 'James', 'Peter'],
  };

  res.json(friends);
});

app.get('/api/cars/:type', (req, res) => {
  if (req.params.type === 'ferrari') {
    res.status(500).send({error: 'there was an error'});
  } else {
    res.json(lamborghiniModels);
  }
});

app.get('/api/car/:model', (req, res) => {
  res.json(lamborghinData.find(l => l.key === req.params.model));
});

app.get('/api/people', (req, res) => {
  const people = {
    people: [
      {name: 'Joe', address: 'Test Street1'},
      {name: 'Peter', address: 'Test Street2'},
      {name: 'Tom', address: 'Test Street3'},
      {name: 'Jack', address: 'Test Street4'},
      {name: 'Bob', address: 'Test Street5'},
    ],
  };

  res.json(people);
});

app.get('/api/customer', (req, res) => {
  const customer = {
    name: 'Joe Smith',
    contractUrl: 'contract',
  };

  res.json(customer);
});

app.get('/api/country-info/:country', (req, res) => {
  const countryInfo = {
    usa: 'Washington DC',
    argentina: 'Buenos Aires',
    germany: 'Berlin',
    denmark: 'Copenhagen',
  };

  res.json({capitol: countryInfo[req.params.country]});
});

app.get('/api/contract', (req, res) => {
  const contract = {
    contractId: 123,
    product: 'Computer',
  };

  res.json(contract);
});

app.get('/api/treeview-data/?:id', (req, res) => {
  res.json(treeviewData[req.params.id]);
});

app.listen(9000, () => console.log('Example app listening on port 9000!'));
