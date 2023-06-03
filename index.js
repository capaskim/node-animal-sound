const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!!!");
});

app.get("/sound/:name", (req, res) => {
	const {name} = req.params;

	if (name == "dog") {
		res.json({'sound': '멍멍'});
	} else if (name == "cat") {
		res.json({"sound": "야옹", 'img': 'https://pds.joins.com/news/component/htmlphoto_mmdata/201410/06/htm_20141006175655l400l401.jpg'});
	} else if (name == "pig") {
		res.json({"sound": "꿀꿀"});
	} else {
		res.json({"sound": "알수 없음"});
	}

	console.log(req.params);

});



app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});