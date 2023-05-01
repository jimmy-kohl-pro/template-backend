import app from './app';
import { db } from './database/mongodb';

db.once('open', () => {
    console.log('Launching server...');
    
    const port = process.env.PORT || 3000;
    
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
});
