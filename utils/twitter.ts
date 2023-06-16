const OAuth = require('oauth');
const { promisify } = require('util');
import ora from 'ora';

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config();
}

// This is the ID for @TwitterDev.
const screenName = 'colorofberlin';
const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${screenName}&count=2`;

const getUserTweets = async () => {
  async function getTwitterUserProfileWithOAuth1() {
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.TWITTER_CONSUMER_API_KEY,
      process.env.TWITTER_CONSUMER_API_KEY_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1',
    );
    const get = promisify(oauth.get.bind(oauth));

    const body = await get(
      url,
      process.env.TWITTER_AUTHENTICATION_ACCESS_TOKEN,
      process.env.TWITTER_AUTHENTICATION_ACCESS_TOKEN_SECRET,
    );

    return JSON.parse(body);
  }

  const ui = ora()
    .info('Fetching tweets from https://twitter.com/colorofberlin')
    .start();

  return getTwitterUserProfileWithOAuth1()
    .then((tweets) => {
      const t = tweets.length === 1 ? 'tweet' : 'tweets';
      ui.succeed(`Fetched ${tweets.length} ${t}`);
      return tweets;
    })
    .catch((error) => {
      ui.fail(
        `Fetch from twitter failed: ${error.message}. Starting 9 February 2023, Twitter no longer supports free access to the Twitter API, both v2 and v1.1. A paid basic tier will be available instead https://twitter.com/TwitterDev/status/1621026986784337922?s=20&t=O2S-kqvzREMlmNE_4BFNCg`,
      );
      console.log('');
      return [];
    });
};

export { getUserTweets };
