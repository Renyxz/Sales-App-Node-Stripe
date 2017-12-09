module.exports = (app) => {
    
    // Index route
    app.get('/', (req, res, next) => {
        res.send('Router works!');
    });

}