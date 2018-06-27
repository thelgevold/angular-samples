import * as express from 'express';
import * as path from 'path';
import * as request from 'request';
import * as compression from 'compression';

import {treeviewData} from './treeview-data';
import {lamborghiniModels} from './car-data';

const app = express();

const backendBaseUrl = 'http://localhost:8080';

app.use(compression());

const base = `${__dirname}/api.runfiles/angular_samples`;
const root = `${base}/src/apps/api`;
const node_modules = `${base}/node_modules`;
const dist = `${base}/dist`;
const bundles = path.join(__dirname, '..', 'bundler-comparison-app');
const ngUpgrade = path.join(__dirname, '..', 'ng-upgrade-app');

const indexPage = `${root}/index.html`;
app.use(express.static('/'), express.static(root));
app.use('/node_modules', express.static(node_modules));
app.use('/dist', express.static(dist));
app.use('/bundles', express.static(bundles));
app.use('/ngUpgrade', express.static(ngUpgrade));

app.get('/', (_req, res) => {
  res.sendFile(indexPage);
});

app.get('/api/log', (req, res) => {
  makeRequest(`${backendBaseUrl}/logs`)
    .then((response: any) => {
      res.json({entries: response.logs});
    })
    .catch(() => res.status(500).send({error: 'there was an error'}));
});

app.get('/api/friends', (req, res) => {
  makeRequest(`${backendBaseUrl}/friends`)
    .then((response: any) => {
      res.json({friends: response.friends.map(friend => friend.name)});
    })
    .catch(() => res.status(500).send({error: 'there was an error'}));
});

app.get('/api/cars/:type', (req, res) => {
  if (req.params.type === 'ferrari') {
    res.status(500).send({error: 'there was an error'});
  } else {
    res.json(lamborghiniModels);
  }
});

app.get('/api/car/:model', (req, res) => {
  makeRequest(`${backendBaseUrl}/cars`)
    .then((response: any) => {
      res.json(response.cars.find(l => l.key === req.params.model));
    })
    .catch(() => res.status(500).send({error: 'there was an error'}));
});

app.get('/api/people', (req, res) => {
  makeRequest(`${backendBaseUrl}/persons`)
    .then((response: any) => {
      res.json({people: response.persons});
    })
    .catch(() => res.status(500).send({error: 'there was an error'}));
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

function makeRequest(url: string) {
  return new Promise((resolve, reject) => {
    request.get({url: url, json: true}, (error, response) => {
      if (error) {
        reject({error: 'there was an error'});
      } else {
        resolve(response.body);
      }
    });
  });
}

app.listen(3000, () => console.log('Example app listening on port 3000!'));
