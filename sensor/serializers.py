from rest_framework import serializers
from sensor.models import SensorData

#serializer for the SensonData model
class SensorDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ('reading', 'timestamp', 'sensorType')
