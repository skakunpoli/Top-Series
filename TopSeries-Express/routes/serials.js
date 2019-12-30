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
			],
			days:[
				{
					day: 1,
					money: 10000
				},
				{
					day: 2,
					money: 1000
				},
				{
					day: 3,
					money: 900
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
			],
			days:[
				{
					day: 1,
					money: 60
				},
				{
					day: 2,
					money: 50
				},
				{
					day: 3,
					money: 40
				},
				{
					day: 4,
					money: 30
				}
			]
		}
	]};
  res.render('serials', {serials: someSerials});
});

module.exports = router;