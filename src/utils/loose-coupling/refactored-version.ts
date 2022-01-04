import { MockPostsService } from './mock-posts-service';
import { NewsFeed } from './NewsFeed';
import { PostsService } from './posts-service';

let newsFeed = new NewsFeed(new PostsService());
newsFeed.show();

let newsFeedTwo = new NewsFeed(new MockPostsService());
newsFeedTwo.show();