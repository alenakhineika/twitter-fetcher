# twitter-fetcher
> ⛔️ Starting 9 February 2023, Twitter no longer supports free access to the Twitter API, both v2 and v1.1. A paid basic tier will be available instead https://twitter.com/TwitterDev/status/1621026986784337922?s=20&t=O2S-kqvzREMlmNE_4BFNCg

Fetches tweets on schedule from the [Color of Berlin](https://twitter.com/colorofberlin) Twitter account.

## How to install

Clone the project and install dependencies:
```
> git clone git@github.com:alenakhineika/twitter-fetcher.git .
> npm i
```

Accessing the Twitter APIs requires a set of credentials that you must pass with each request. To generate these keys and tokens you should:

- [Apply for a Twitter developer account](https://developer.twitter.com/en/apply-for-access.html)
- [Create a new Twitter Project and App](https://developer.twitter.com/en/portal/projects-and-apps)

You will find the required secrets in the Twitter App settings. In the project root, create the `.env` file and assign these Twitter secrets to the following environment variables:

```
TWITTER_CONSUMER_API_KEY=
TWITTER_CONSUMER_API_KEY_SECRET=
TWITTER_AUTHENTICATION_ACCESS_TOKEN=
TWITTER_AUTHENTICATION_ACCESS_TOKEN_SECRET=
```

You also need MongoDB installed to run the project: https://docs.mongodb.com/manual/installation/

If you don't want to create a Twitter developer account, you can use `data/tweets-sample-dataset-200.json` to try the project. Connect to `mongodb://localhost`, create the `colorofberlin` database with the `tweets` collection, and import the sample JSON to MongoDB.

## How to fetch data

> Note that the [`statuses/user_timeline`](https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-user_timeline) method can only return up to 3,200 of a user's most recent tweets.

### Fetch tweets and save them to MongoDB

```
> npm run save-tweets-to-mongodb
```

### Fetch tweets and save them to the file system

```
> npm run save-tweets-to-file
```

## Features

- Twitter API
- OAuth 1.0a
