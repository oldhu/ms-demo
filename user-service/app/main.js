const express = require('express')
const http = require('http')
const winston = require('winston')

var app = express();
const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            winston.format.align(),
            winston.format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`)
        )
      }),
    ]
  });


app.get('/api/v1/users', function (req, res) {
    logger.info("process request in /api/v1/users")
    res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({
        users: [
            {
                name: "user1"
            },
            {
                name: "user2"
            }
        ]}));
})

http.createServer(app).listen('3000', function() {
	logger.info("server started at http://localhost:3000");
});