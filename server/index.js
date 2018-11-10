// require('../client/header-sidebar-service/server/index.js');
// require('../client/instructors-service/server/index.js');
// require('../client/Student-Feedback/server/index.js');
// require('../client/students-also-bought-service/server/server.js');

const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');

const port = 3000;
const app = express();


app.use('/courses/:courseId', express.static(path.join(__dirname, '/../public')));


app.get('/courses/:courseId/header', proxy('http://ec2-54-219-155-194.us-west-1.compute.amazonaws.com/'));
app.get('/:Id/instructors', proxy('http://udemo-env.bhd58pxyfd.us-east-2.elasticbeanstalk.com/'));
app.get('/courses/:courseId/similarcourses', proxy('http://ec2-13-57-196-203.us-west-1.compute.amazonaws.com/'));
app.get('/:courseId/reviews', proxy('http://ec2-18-225-7-76.us-east-2.compute.amazonaws.com/'));

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});