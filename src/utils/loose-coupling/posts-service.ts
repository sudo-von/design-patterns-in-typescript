import * as fs from 'fs';
import { IExportPostService } from './iexport-posts-service';
import { IPostsService } from './iposts-service';
import { Post } from './post';


export class PostsService implements IPostsService {

    private _fileName: string = "posts.json";
    constructor() {
    }

    export(service: IExportPostService): Promise<string> {
        return this.getAll().then(posts => service.export(posts));
    }

    getAll(): Promise<Post[]> {
        return new Promise((resolve, reject) => {
            fs.readFile(this._fileName, "utf8", (err, data) => {
                if (err) {
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
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        });
    }
}
