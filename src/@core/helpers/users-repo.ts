const fs = require('fs').promises

// users in JSON file for simplicity, store in a db for production applications
// let users = require('src/app/data/users.json');
// let  users = fs.readFile('src/app/data/users.json')

export const usersRepo = {
    // getAll: () => users,
    getById: (id:any) => users.find((x:any) => x.id.toString() === id.toString()),
    // find: (x:any) => users.find(x),
    create,
    update,
    delete: _delete
};

async function create(user:any) {
    let file = await fs.readFile('src/app/data/users.json');
    const users = JSON.parse(file)

    // generate new user id
    user.id = users.length ? Math.max(...users.map((x:any) => x.id)) + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save user
    users.push(user);
    saveData();
}

async function update(id:any, params:any) {
    let file_data = await fs.readFile('src/app/data/users.json');
    const users = JSON.parse(file_data)
    const user = users.find((x:any) => x.id.toString() === id.toString());

    // set date updated
    user.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(user, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
async function _delete(id:any) {
    let file_data = await fs.readFile('src/app/data/users.json');
    let users = JSON.parse(file_data)
    // filter out deleted user and save
    users = users.filter((x:any) => x   .id.toString() !== id.toString());
    saveData();
    
}

async function saveData() {
    let file_data = await fs.readFile('src/app/data/users.json');
    const users = JSON.parse(file_data)
    console.log(users)
    await fs.writeFile('src/app/data/users.json', JSON.stringify(users, null, 4));
}