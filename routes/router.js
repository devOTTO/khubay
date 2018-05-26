module.exports = function(app){

	const db = require('../db');
	const sha256 = require('sha256');
	const url = require('url');

	app.get('/', function (req, res) {
		res.render('main_index');
	});

	app.get('/blog_single', function (req, res) {
		res.render('blog_single');
	});

	app.get('/blog', function (req, res) {
		res.render('blog');
	});

	app.get('/cart', function (req, res) {
		res.render('cart');
	});

	app.get('/error;', function (req, res) {
		res.render('error');
	});

	app.get('/product', function (req, res) {
		res.render('product');
	});

	app.get('/regular', function (req, res) {
		res.render('regular');
	});

	app.get('/shop', function (req, res) {
		res.render('shop');
	});

	app.get('/signin', function (req, res) {
		res.render('signin');
	});

	app.get('/shop', function (req, res) {
		res.render('shop');
	});

	app.get('/registration', function (req, res) {
		res.render('registration');
	});

	app.get('/product_register', function (req, res) {
		res.render('product_register');
	});
	app.get('/category', function (req, res) {
		res.render('category');
	});
	app.get('/category/:id', function (req, res) {
		res.render('category');
	});

	app.post("/user_registration", function (req,res){
			console.log("user_registration connect");
			 var body = req.body;
			 var email = body.InputEmail;
			 var name = body.InputUserName;
			 var passwd = sha256(body.InputPassword1);
			 var nickname = body.InputUserNickname;
			 var phone = body.InputPhoneNum;
			 var birth = body.InputBirth;
			 var address = body.InputAddress
			console.log(email, name);

			/* var query = db.query('INSERT INTO user (user_email, user_pw, user_name, user_nickname, user_phone, user_birth, user_address, user_chk ) VALUES ("' + email + '","' + passwd + '","' + name + '","' + nickname + '","' + phone + '","'  + birth + '","'  + address + + '","' '")', function(err, rows) {
					 if(err) { console.log(err);}
					 console.log("err!");
			 })*/

			db.query('INSERT INTO user(user_email, user_pw, user_name, user_nickname, user_phone, user_birth, user_address, user_chk ) VALUES(?,?,?,?,?,?,?,?) ',
			[email, passwd, name, nickname, phone, birth, address, '1'], function(error,result){
				if(error) throw error;
				console.log('추가 완료. result: ',email, passwd, name, nickname, phone, birth, address);
				res.redirect(url.format({
							pathname: '/registration',
							query: {
									'success': true,
									'message': 'Sign up success'
							}
				}));
			});
	 	});

		app.post("/do_product_register", function (req,res){
				console.log("product_register connect");
				 var body = req.body;
				 var ItemTitle = body.ItemTitle;
				 var ItemCategory = body.ItemCategory;
				 var StartPrice = body.StartPrice;
				 var SellPrice = body.SellPrice;
				 var AuctionType = body.AuctionType;
				 var BidType = body.BidType;
				 var ItemCond = body.ItemCond;
				 var ItemDescrip = body.ItemDescrip;
				 var sell_start_date = body.sell_start_date;
				 var Duration = body.Duration;

				console.log(ItemTitle,ItemCategory,StartPrice,SellPrice,AuctionType,BidType,ItemCond,ItemDescrip,sell_start_date,Duration);

				res.redirect(url.format({
							pathname: '/product_register',
							query: {
									'success': true,
									'message': 'Item register success'
							}
				}));
		 	});

}