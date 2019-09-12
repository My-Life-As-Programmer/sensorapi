# API for a Sensor

This API stores the data provided to it through the JSON payload in the SQLite database for simplicity purpose(we can change the Database later if needed) and displays it in a meaningful Graph and Table

Incoming JSON payload format

```javascript
  {
      "reading": "25.0",
      "timestamp": "1511162679",
      "sensorType": "Temperature"
  }
```
## End points :
1. api/data/ - to get all the data in JSON format
2. api/summery/ - to get the Minimum, Maximum, Average values of a particular sensor or all sensors
3. api/sensors/ - to get a list of all the available sensors

all these endpoints have 3 query parameters
 * sensor - Type of Sensor (sensorType)
 * before - to get Data before a particular time (kept in UNIX Timestamp format for simplicity)
 * after - to get Data after a particular time (kept in UNIX Timestamp format for simplicity)

 Eg:
 ```javascript
  http:://192.168.10.1/api/data?sensor=Temperature&after=1511161256&before=1511161423&

 ```


## Components

This API is made up of 2 parts , Frontend is managed by React.js and Backend is managed by Python/Django
both these are divided into 2 separate Django apps as listed below

* Frontend - Frontend
* Backend - sensor
