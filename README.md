# Ecommerce Application

Express/ts ecommerce application deployed to AWS Elastic Beanstalk using AWS CDK

Demo: http://ecommerce-app-eb-env-development.eba-tmwgesyf.us-east-1.elasticbeanstalk.com/

## Getting Started

### Adding Test Data From Dump

```sh
pg_restore -d postgres server/dump.sql
```

### Server

In the server/ directory:

```sh
npm install
```

```sh
npm run dev # Start dev server
npm run build # Build production bundle
npm run start # Start production server
npm run migrate # Build production bundle
```

### CDK

In the cdk/ directory:

```sh
npm install
```

```sh
npm run synth # Synth CDK stack
npm run bootstrap # Bootstrap account/region for CDK
npm run deploy # Deploy stack
npm run destroy # Destroy stack
```

## API Docs

### Customers

Customers belong to a Company

#### POST /customers

request body:

```js
{
  "name": "jeff",
  "CompanyId": 1
}
```

response body:

```js
{
  "status": "success",
  "data": {
    "customer": {
      // ...customer data
    }
  }
}
```

#### GET /customers

response body:

```js
{
  "status": "success",
  "data": {
    "customers": [{
      // ...customers data, includes company
    }]
  }
}
```

#### PUT /customers/:id

request body:

```js
{
  "name": "Joe Miller"
}
```

response body:

```js
{
  "status": "success",
  "data": {
    "customer": {
      // ...customer data
    }
  }
}
```

#### DELETE /customers/:id

response body:

```js
{
  "status": "success",
  "data": {
    "customer": {
      // ...customer data
    }
  }
}
```

### Companys

Companys can have many customers and products

#### POST /companys

request body:

```js
{
  "name": "bandai"
}
```

response body:

```js
{
  "status": "success",
  "data": {
    "company": {
      // ...company data
    }
  }
}
```

#### GET /companys

response body:

```js
{
  "status": "success",
  "data": {
    "companys": [{
      // ...companys data, includes products and customers
    }]
  }
}
```

#### PUT /companys/:id

request body:

```js
{
  "name": "The Belt"
}
```

response body:

```js
{
  "status": "success",
  "data": {
    "company": {
      // ...company data
    }
  }
}
```

#### DELETE /companys/:id

response body:

```js
{
  "status": "success",
  "data": {
    "company": {
      // ...company data
    }
  }
}
```

### Products

Products belong to one company

#### POST /products

request body:

```js
{
  "name": "furby",
  "CompanyId": 1
}
```

response body:

```js
{
  "status": "success",
  "data": {
    "product": {
      // ...product data
    }
  }
}
```

#### GET /products

response body:

```js
{
  "status": "success",
  "data": {
    "products": [{
      // ...products data, includes companys and sales
    }]
  }
}
```

#### PUT /products/:id

request body:

```js
{
  "name": "Warmbo"
}
```

response body:

```js
{
  "status": "success",
  "data": {
    "products": {
      // ...products data
    }
  }
}
```

#### DELETE /products/:id

response body:

```js
{
  "status": "success",
  "data": {
    "products": {
      // ...products data
    }
  }
}
```

### Sales

Sales belong to one product

#### POST /sales

request body:

```js
{
  "ProductId": 1
}
```

response body:

```js
{
  "status": "success",
  "data": {
    "sale": {
      // ...sale data
    }
  }
}
```

#### GET /sales

response body:

```js
{
  "status": "success",
  "data": {
    "sales": [{
      // ...sales data, includes products
    }]
  }
}
```

#### PUT /sales/:id

request body:

```js
{
  "ProductId": 2
}
```

response body:

```js
{
  "status": "success",
  "data": {
    "sales": {
      // ...sales data
    }
  }
}
```

#### DELETE /sales/:id

response body:

```js
{
  "status": "success",
  "data": {
    "sales": {
      // ...sales data
    }
  }
}
```
