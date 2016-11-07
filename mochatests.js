/**
 * Test Cases for EbayJ app
 */
var assert = require('assert');
var http = require('http');
var supertest = require("supertest");
var should = require("should");
var server = supertest.agent("http://localhost:3000");
var app = require('./app');

describe('AdvertisementsList',function(){
	describe('#getAdvertisementsList()',function(){
		it('should return the list of advertisements',function(done){
			server
			.get("/getAdvertisementsList4")
			.expect("Content-type",/json/)
			.expect(200) 
			.end(function(err,res){
			 console.log("================================================");
				console.log('---- ',res.text);
			  should.exist(res.text);
       done();
			});
		});
	});
});

describe('BidsList',function(){
	describe('#getBidsList()',function(){
		it('should return the list of all the bids',function(done){
			server
			.get("/bidsList2")
			.expect("Content-type",/json/)
			.expect(200)
			.end(function(err,res){
				res.status.should.equal(200);
				var text = JSON.parse(res.text.length);
				console.log('ccccccccccccc',text);
        text.should.equal(1060);
				done();			
			});
		});
	});
});

describe('BidsListObject',function(){
	describe('#getBidsList()',function(){
		it('should return the list of objects all the bids',function(done){
			server
			.get("/bidsList2")
			.expect("Content-type",/json/)
			.expect(200)
			.end(function(err,res){
				console.log('nnnnnnnnnnnnnnnnnn',res.text
        );/*
				console.log('nnnnnnnnnnnnnnnnnn',res.text.length);/*
			  res.status.should.equal(200);
				var text = JSON.parse(res.text);
				text[1].id.should.equal(4);
				text[1].name.should.equal('Woodland Shoes');
				text[1].description.should.equal('pair of wood land shoes');
				text[1].seller.should.equal('qa@email.com');
				text[1].bidamount.should.equal(2);
				text[1].quantity.should.equal(1);
				text[1].bidder.should.equal("q");*/
				done();			
			});
		});
	});
});

/*describe('UserProfile',function(){
	describe('#getUserProfile()',function(){
		it('should return empty if the user is not logged in ',function(done){
			server
			.get("/getLoggedInUserProfile")
			.expect("Content-type",/json/)
			.expect(200) 
			.end(function(err,res){
				res.status.should.equal(200);
				var text = JSON.parse(res.text);
				var str = JSON.stringify(text);
				str.should.equal('{}');
				done();			
			});
		});
	});
});

describe('Login', function(){
	var agent = supertest.agent(app);
	it('should login',function(done){
		supertest(app)
		.post('/login')
		.send({
			email: 'q',
			password: 'q'
		})
		.end(function (err, res) {
			if (err) { return done(err); }
			var text = JSON.parse(res.text);
			text.Status.should.equal('OK');
			done();
		});

	});	
});
*/