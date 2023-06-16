import Twitter from 'twitter';
import { getUserTweets } from '../utils/twitter';
import writeToFile from '../utils/filesystem';

(async () => {
  console.log('Fetch all tweets');

  const data: Twitter.ResponseData[] = await getUserTweets();

  if (data.length > 0) {
    await writeToFile(data);
  }
})();
