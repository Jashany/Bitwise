import bodyParser from 'body-parser';
// Create a middleware to parse the request body
const jsonParser = bodyParser.json();

// Middleware function for doctor authentication
const doctorAuthMiddleware = (req, res, next) => {
    const { username, password } = req.body;

    // Check if the request contains valid doctor credentials
    const isValidDoctor = doctors.some(doctor => {
        return doctor.username === username && doctor.password === password;
    });

    if (isValidDoctor) {
        // Doctor is authenticated, proceed to the next middleware or route handler
        next();
    } else {
        // Invalid doctor credentials, send an error response
        res.status(401).json({ error: 'Invalid doctor credentials' });
    }
};

export default [jsonParser, doctorAuthMiddleware];
