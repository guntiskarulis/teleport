/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

module.exports.App = require('./app.jsx');
module.exports.Login = require('./user/login.jsx');
module.exports.NewUser = require('./user/newUser.jsx');
module.exports.Nodes = require('./nodes/main.jsx');
module.exports.Sessions = require('./sessions/main.jsx');
module.exports.CurrentSessionHost = require('./currentSession/main.jsx');
module.exports.ErrorPage = require('./msgPage.jsx').ErrorPage;
module.exports.NotFound = require('./msgPage.jsx').NotFound;
module.exports.MessagePage = require('./msgPage.jsx').MessagePage;
