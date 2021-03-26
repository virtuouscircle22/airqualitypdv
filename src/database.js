import MongoClient from 'mongodb';

export async function connect() {
	try{
		const client = await MongoClient.connect('mongodb+srv://javier:Q3gPSTEmE5yMw5pV@cluster0-mms5n.mongodb.net/DatosCalidadAire?retryWrites=true&w=majority', {
			useUnifiedTopology: true
		})
		const db = client.db('DatosCalidadAire')
		console.log('DB is connected!')
		return db;
	} catch(e) {
		console.log(e);
	}
	
}

