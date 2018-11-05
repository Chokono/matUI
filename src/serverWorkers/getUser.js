module.exports = function getUser(req, res) {
	res.end(JSON.stringify({
		email:req.body.emailValue,
		name: 'John',
		surname: 'Smith',
		gender: req.body.genderValue,
		imageUrl: 'https://www.thedailymash.co.uk/wp-content/uploads/man667-8.jpg',
		facebookImageUrl: 'https://www.thedailymash.co.uk/wp-content/uploads/man667-8.jpg',
		vkImageUrl: 'https://www.thedailymash.co.uk/wp-content/uploads/man667-8.jpg',
	}));
}