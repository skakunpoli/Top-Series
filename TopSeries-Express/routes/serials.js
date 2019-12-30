const express = require('express');
const router = express.Router();
var faker = require('faker');

router.get('/', (req, res) => {
	var someSerials = {
		serials:[
		{
			name: faker.lorem.word(),
			director: faker.name.findName(),
			actors:[
				{
					name: faker.name.firstName(),
					surname: faker.name.lastName(),
				},
				{
					name: faker.name.firstName(),
					surname: faker.name.lastName(),
				}
			],
			episodes:[
				{
					name: faker.lorem.word()
				},
				{
					name: faker.lorem.word()
				}
			]
		},
		{
			name: faker.lorem.word(),
			director: faker.name.findName(),
			actors:[
				{
					name: faker.name.firstName(),
					surname: faker.name.lastName(),
				}
			],
			episodes:[
				{
					name: faker.lorem.word()
				},
				{
					name: faker.lorem.word()
				}
			]
		}
	]};
  res.render('serials', {serials: someSerials});
});

module.exports = router;