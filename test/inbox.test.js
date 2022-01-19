const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
//const web3

class Car {
	park(){
		return "stopped"
	}

	drive(){
		return "vrooom"
	}
}


describe ('Car', () => {
	it('can park', ()=> {
		const car=new Car();
		assert.equal(car.park(), 'stopped');
	});

	it('can drive',()=> {
		const car=new Car();
		assert.equal(car.drive(),'vrooom');
	});

});