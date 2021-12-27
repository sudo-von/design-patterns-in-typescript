import * as fs from 'fs';

export interface Post {
    id:number;
    title:string;
    body:string;
    postedBy:string;
}

export interface IPostsService {
    getAll():Promise<Post[]>;
    save(post:Post):Promise<void>;
}

export class PostsService implements IPostsService{

    private _fileName:string = "posts.json";
    constructor(){

    }

    getAll(): Promise<Post[]> {
        return new Promise((resolve, reject) => {
            fs.readFile(this._fileName, "utf8", (err,data) => {
                if(err){
                    reject(err);
                }
                resolve(JSON.parse(data));
            });
        });
    }
    save(post: Post): Promise<void> {
        return new Promise((resolve, reject) => {
            this.getAll().then(posts => {
                posts.push(post);
                fs.writeFile(this._fileName, JSON.parse(posts.toString()), err => {
                    if(err){
                        reject(err);
                    }else{
                        resolve();
                    }
                });
            });
        });
    }
}

export class MockPostsService implements IPostsService {

    posts:Post[] = [];
    constructor() {
        this.posts = [
            { "id" : 1, "title": "test", "body": "test", "postedBy": "Me" },
            { "id" : 2, "title": "test", "body": "test", "postedBy": "Me" },
            { "id" : 3, "title": "test", "body": "test", "postedBy": "Me" },
            { "id" : 4, "title": "test", "body": "test", "postedBy": "Me" }
        ]
    }

    getAll(): Promise<Post[]> {
        return Promise.resolve(this.posts);
    }
    save(post: Post): Promise<void> {
        this.posts.push(post);
        return Promise.resolve();
    }

}

export class NewsFeed {
    constructor(private _service:IPostsService){
    }

    show(){
        this._service.getAll().then(posts => {
            posts.forEach(post => {
                console.log(`${post.title} - ${post.body}`);
            })
        });
    }
}

let newsFeed = new NewsFeed(new PostsService());
newsFeed.show();

let newsFeedTwo = new NewsFeed(new MockPostsService());
newsFeedTwo.show();