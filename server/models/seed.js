const { db, User, Post, Role, Permission } = require("./index");
const chalk = require("chalk");

const posts = [
  {
    title: "Guest Post",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "First week at Fullstack Academy",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "IDK Post",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

const roles = [
  {
    name: "user"
  },
  {
    name: "admin"
  }
];

// PERMISSION CONSTANTS
const COMMENTADD = "comment_add";
const COMMENTEDIT = "comment_edit";
const COMMENTDELETE = "comment_delete";
const USERADD = "user_add";
const USEREDIT = "user_edit";
const USERDELETE = "user_delete";
const POSTADD = "post_add";
const POSTEDIT = "post_edit";
const POSTDELETE = "post_delete";

const permissions = [
  { name: COMMENTADD },
  { name: COMMENTEDIT },
  { name: COMMENTDELETE },
  { name: USERADD },
  { name: USEREDIT },
  { name: USERDELETE },
  { name: POSTADD },
  { name: POSTEDIT },
  { name: POSTDELETE }
];

db.sync({ force: true })
  .then(() => {
    console.log(chalk.blue("Dropped old data."));

    // CREATE POSTS
    return Post.bulkCreate(posts, { individualHooks: true });
  })
  .then(function(posts) {
    console.log(chalk.green("Successfully seeded posts table"));

    // CREATE ROLES
    return Role.bulkCreate(roles, { individualHooks: true });
  })
  .then(roles => {
    console.log(chalk.green("Successfully seeded roles table"));

    // CREATE PERMISSIONS
    return Permission.bulkCreate(permissions, { individualHooks: true });
  })
  .then(permissions => {
    console.log(chalk.green("Successfully seeded permissions table"));

    // console.log('permissions:\n');
    permissions.forEach(permission => {
      const roleIdArr = [];

      switch (permission.name) {
        case COMMENTADD:
          roleIdArr.push(1, 2);
          break;

        case COMMENTEDIT:
          roleIdArr.push(1, 2);
          break;

        case COMMENTDELETE:
          roleIdArr.push(1, 2);
          break;

        case USERADD:
          roleIdArr.push(1, 2);
          break;

        case USEREDIT:
          roleIdArr.push(1, 2);
          break;

        case USERDELETE:
          roleIdArr.push(2);
          break;

        case POSTADD:
          roleIdArr.push(2);
          break;

        case POSTEDIT:
          roleIdArr.push(2);
          break;

        case POSTDELETE:
          roleIdArr.push(2);
          break;
      }

      roleIdArr.forEach(roleId => {
        permission.addRole(roleId);
      });
    });
  })
  .catch(err => {
    console.error(chalk.red("There was totally a problem:"), err.message);
  });
