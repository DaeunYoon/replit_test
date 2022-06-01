const db = require('../config/db');

class Post {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }

    async save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `INSERT INTO posts(title, body, create_at) VALUES('${this.title}','${this.body}','${createdAtDate}')`

        const [newPost, _] = await db.execute(sql);

        return newPost;
    }

    static async findAll() {
        let sql = 'SELECT * from posts';

        const posts = await db.execute(sql)

        return posts;
    }

    static async findById(id) {
        let sql = `SELECT * from posts WHERE id=${id}`;

        const post = await db.execute(sql)

        return post;
    }

}

//class / instance
module.exports = Post;