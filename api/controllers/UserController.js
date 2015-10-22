/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

/**
	create: function  (req, res) {
		// body...

		var user = {
			name: req.param('name'),
			username: req.param('username'),
			password: req.param('password'),
			email : req.param('email')
		}

		User.create(user, function userCreated (err, user) {
			// body...
			if(err){
				res.status(err.status);
				return res.json(err);
			}

			res.status(201);
			return res.json(user);

		});
	}
	**/

	find: function  (req, res) {
		// body...

		User.find(function usersFound (err,user) {
			// body...
			if(err){
				console.log(err);
				return res.send(401,err);

			}
			res.json(user);


		});
	}


};

