import { IExportPostService } from './iexport-posts-service';
import { IPostsService } from './iposts-service';
import { Post } from './post';


export class MockPostsService implements IPostsService {

    posts: Post[] = [];
    constructor() {
        this.posts = [
            { "id": 1, "title": "test", "body": "test", "postedBy": "Me" },
            { "id": 2, "title": "test", "body": "test", "postedBy": "Me" },
            { "id": 3, "title": "test", "body": "test", "postedBy": "Me" },
            { "id": 4, "title": "test", "body": "test", "postedBy": "Me" }
        ];
    }
    export(service: IExportPostService): Promise<string> {
        return this.getAll().then(posts => service.export(posts));
    }

    getAll(): Promise<Post[]> {
        return Promise.resolve(this.posts);
    }
    save(post: Post): Promise<void> {
        this.posts.push(post);
        return Promise.resolve();
    }

}
