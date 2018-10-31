import * as express from 'express';
import * as path from 'path';
import * as request from 'request';
import * as compression from 'compression';

import {treeviewData} from './treeview-data';
import {lamborghiniModels} from './car-data';

const app = express();

const backendBaseUrl = 'http://localhost:8080';

app.use(compression());

import {IPerson, ILog, ICar, IFriend} from '../models';

declare const __dirname: string;

const base = `${__dirname}/api.runfiles/angular_samples`;
const root = `${base}/src/apps/api`;
const dist = path.join(`${__dirname}`, '../demo-app/bundle/src/apps/demo-app');

const node_modules = `${__dirname}/api.runfiles/npm/node_modules`;

app.use(express.static('/'), express.static(dist));
app.use(express.static('/'), express.static(root));
app.use('/node_modules', express.static(node_modules));
app.use('/svelte', express.static(`${base}/src/apps/svelte-demo`));

app.get('/api/log', (_req, res) => {
  makeGetRequest(`${backendBaseUrl}/logs`)
    .then((response: {logs: Array<ILog>}) => {
      res.json({entries: response.logs});
    })
    .catch(() => res.status(500).send({error: 'there was an error'}));
});

app.get('/api/friends', (_req, res) => {
  makeGetRequest(`${backendBaseUrl}/friends`)
    .then((response: {friends: Array<IFriend>}) => {
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
  makeGetRequest(`${backendBaseUrl}/cars`)
    .then((response: {cars: Array<ICar>}) => {
      res.json(response.cars.find(l => l.key === req.params.model));
    })
    .catch(() => res.status(500).send({error: 'there was an error'}));
});

app.get('/api/people', (_req, res) => {
  makeGetRequest(`${backendBaseUrl}/persons`)
    .then((response: {persons: Array<IPerson>}) => {
      res.json(response.persons);
    })
    .catch(() => res.status(500).send({error: 'there was an error'}));
});

app.get('/api/customer', (req, res) => {
  res.json({
    name: 'Joe Smith',
    contractUrl: 'contract',
  });
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

function makeGetRequest(url: string) {
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
