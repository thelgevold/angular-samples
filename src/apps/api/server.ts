import * as express from 'express';
import * as path from 'path';
import * as request from 'request';
import * as compression from 'compression';

import {treeviewData} from './treeview-data';
import {lamborghiniModels} from './car-data';

import {AddService} from './add-service';
import {PersonService} from './person-service';

const app = express();

const backendBaseUrl = 'http://localhost:8080';
const appBundle = 'http://localhost:4000/bundle.min.js';

app.use(compression());

import {IFriend, ILog, ICar} from '../models';

const base = `${__dirname}/api.runfiles/angular_samples`;
const root = `${base}/src/apps/api`;
const node_modules = `${base}/node_modules`;
const vendor = `${base}/vendor`;
const dist = `${base}/dist`;
const bundles = path.join(__dirname, '..', 'bundler-comparison-app');
const ngUpgrade = path.join(__dirname, '..', 'ng-upgrade-app');

const addService = new AddService(`${base}/src/apps/add/libadd.so`);
const personService = new PersonService(`${base}/src/apps/person/libperson.so`);

const indexPage = `${root}/index.html`;
app.use(express.static('/'), express.static(root));
app.use('/node_modules', express.static(node_modules));
app.use('/dist', express.static(dist));
app.use('/bundles', express.static(bundles));
app.use('/ngUpgrade', express.static(ngUpgrade));
app.use('/vendor', express.static(vendor));

app.get('/', (_req, res) => {
  res.sendFile(indexPage);
});

app.get('/bundle', (_req, res) => {
  makeRequest(appBundle)
    .then((response: any) => {
      res.send(response);
    })
    .catch(() => res.status(500).send({error: 'there was an error'}));
});

app.get('/api/log', (req, res) => {
  makeRequest(`${backendBaseUrl}/logs`)
    .then((response: {logs: Array<ILog>}) => {
      res.json({entries: response.logs});
    })
    .catch(() => res.status(500).send({error: 'there was an error'}));
});

app.get('/api/friends', (_req, res) => {
  makeRequest(`${backendBaseUrl}/friends`)
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
  makeRequest(`${backendBaseUrl}/cars`)
    .then((response: {cars: Array<ICar>}) => {
      res.json(response.cars.find(l => l.key === req.params.model));
    })
    .catch(() => res.status(500).send({error: 'there was an error'}));
});

app.get('/api/people', (req, res) => {
  const result = personService.getPeople();
  res.json(result);
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

app.get('/api/add/:num1/:num2', (req, res) => {
  const sum = addService.add(req.params.num1, req.params.num2);
  res.json(sum);
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
