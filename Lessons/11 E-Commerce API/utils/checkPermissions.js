const CustomError = require('../errors');

const checkPermissions = (requistUser, resourseUserId) => {
	if (requistUser.role === 'admin') return;
	if (requistUser.userId === resourseUserId.toString()) return;
	throw new CustomError.UnauthorizedError(
		'Not authorized to access this route'
	);
};

module.exports = checkPermissions;
