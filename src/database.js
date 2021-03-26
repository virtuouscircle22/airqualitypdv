import MongoClient from 'mongodb';

export async function connect() {
	try{
		const client = await MongoClient.connect('****************', {
			useUnifiedTopology: true
		})
		const db = client.db('DatosCalidadAire')
		console.log('DB is connected!')
		return db;
	} catch(e) {
		console.log(e);
	}
	
}

