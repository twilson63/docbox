# Document Box

An application that enables users to store files and share files with 
specific users and groups.  Each file will create a unique link that
can only be accessed by authorized groups.

## Requirements

* NodeJS (http://nodejs.org)
* Grunt `npm install grunt-cli -g`
  - Tasks
    * grunt-contrib-jshint
    * grunt-contrib-concat
    * grunt-ngtemplates
    * grunt-ngmin
    * grunt-bump
  
* Bower `npm install bower -g`
  - Components
    * Bootstrap
    * Angular
    * ngUpload

## App File Layout

- docbox
  - api
    - config.js
    - routes.js
    - server.js
  - app
    - app.js
    - controllers
    - templates
    - directives
    - filters
  - public
    - img
    - js
    - components
  - test
  Gruntfile.js
  README.md
  CHANGELOG.md
  LICENSE
  package.json
  bower.json
  .bowerrc

## Development system Setup

``` sh
npm install
npm start
```

## Run Test Suite

``` sh
npm test
```

## Application Modules

- Administration
  - Account (appx)
    - Edit
  - Users (appx)
    List/Search Users
    Add User
    View User
    Edit User
    Delete Group
  - Public Groups (appx)
    List/Search Groups
    Create/Delete Group
    View Group/Add Members to Group
- My Documents
  - List/Search
  - Add/Remove
- Groups (appx)
  - List My Groups 
  - Create/Delete Group
  - Add Member to a group
- Members (appx)
  - List/Search Members
  - View Member Profile
- Profile (appx)
  - View/Edit
  - Change Password
- Session (appx)
  - SignIn
  - SignOut
  - Forgot Password
  