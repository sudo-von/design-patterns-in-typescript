import { IPostsService } from './iposts-service';


export class NewsFeed {
    constructor(private _service: IPostsService) {
    }

    show() {
        this._service.getAll().then(posts => {
            posts.forEach(post => {
                console.log(`${post.title} - ${post.body}`);
            });
        });
    }
}
