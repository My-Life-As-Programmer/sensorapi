from sensor.models import SensorData
from rest_framework import viewsets,permissions
from .serializers import SensorDataSerializer
from datetime import datetime

#viewset for the sensor data
class SensorDataViewSet(viewsets.ModelViewSet):
    queryset = SensorData.objects.all()
    serializer_class = SensorDataSerializer
    permission_classes=[
    permissions.AllowAny
    ]
