import * as express from 'express';
import {treeviewData} from './treeview-data';
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/api/friends', (req, res) => {
  const friends = {
    friends: ['Joe', 'Tim', 'Jim', 'Jane', 'Anne', 'Billy', 'James', 'Peter'],
  };

  res.json(friends);
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
