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
1. api/data/ - to get all the data in a JSON format
2. api/summery/ - to get the Minimum, Maximum, Average values of a particular sensor or all sensors
3. api/sensors/ - to get a list of all the available sensors
