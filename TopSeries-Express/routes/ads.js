const express = require('express');
const router = express.Router();
var faker = require('faker');

router.get('/', (req, res) => {
	var someAds = {
		ads:[
		{
			text: faker.lorem.text()
		},
		{
			text: faker.lorem.text()
		},
		{
			text: faker.lorem.text()
		}
	]};
  res.render('ads', {ads: someAds});
});

module.exports = router;