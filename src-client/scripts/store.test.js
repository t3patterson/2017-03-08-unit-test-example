//(1) import assertion library + module i'm testing
import {expect} from 'chai' // assertion library
import {STORE} from './store.js' //module

console.log(STORE)

describe( 'some basic math'  ,  function(){
	it('1 + 1 === 2', function(){
		expect( 1 + 1 ).to.equal(2)
	})
})

describe( 'the Array.prototype', function(){
	it(`[3,1,3,4].join('') should be a string`, function(){

		let output = [3,1,3,4].join('')
		expect(output).to.be.a('string')
	})
})

describe('const STORE', function(){
	it('should be an object', function(){
		expect(STORE).to.be.a('object')
	})

	describe('STORE._data', function(){
		it('should be an object', function(){
			expect(STORE._data).to.be.a('object')
		})

		it('should have shoutOutList (array), ratingType (string), and currentNavRoute (string)', function(){
			expect(STORE._data.shoutOutList).to.be.instanceof(Array)
			expect(STORE._data.shownRatingType).to.be.a('string')

		})
	})

	describe('STORE.getStoreData()', function(){
		it('STORE.getStoreData() should be equal to _data', function(){
			let storeOutput = STORE.getStoreData()
			expect(storeOutput).to.deep.equal( STORE._data )
		})
	})

	describe('STORE.setStore()', function(){
		it('should be a function', function(){
			expect(STORE.setStore).to.be.a('function')
		})
	
		it('should modify values on STORE._data when passed 2 args ', function(){
			STORE.setStore('shownRatingType', 'ALL')
			expect(STORE._data.shownRatingType).to.equal('ALL')
		})
		
		it('should throw an error if 1st arg is not defined on STORE._data ', function(){
			let storeSetFunc = function(){
				STORE.setStore('failMePls', 'wateverrrr')
			}
			expect(storeSetFunc).to.throw(Error)
		})
	})

	describe('STORE.onStoreChange()', function(){
		it('should be a function', function(){
			expect(STORE.onStoreChange).to.be.a('function')
		})

		it('should throw an error if arg is not a function ', function(){
			let storeChangeFn = function(){
				STORE.onStoreChange('clearly not a function...')
			}

			expect(storeChangeFn).to.throw(Error)
		})
		
		it('should throw an error if onStoreChange is executed twice', function(){
			let storeChangeFn2x = function(){
				STORE.onStoreChange(function(){ /* no op*/ })
				STORE.onStoreChange(function(){ /* no op, i should fail... */ })
			}
			
			expect(storeChangeFn2x).to.throw(Error)

		})
		
	})
})