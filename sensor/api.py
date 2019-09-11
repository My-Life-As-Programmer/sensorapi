from sensor.models import SensorData
from rest_framework import viewsets,permissions
from .serializers import SensorDataSerializer
from datetime import datetime

#viewset for the sensor data
class SensorDataViewSet(viewsets.ModelViewSet):
    #queryset = SensorData.objects.all()
    serializer_class = SensorDataSerializer
    permission_classes=[
                        permissions.AllowAny
                        ]
    print('hitting Viewset')
    def get_queryset(self):
        queryset = SensorData.objects.all()
        after = self.request.query_params.get('after', None)
        before = self.request.query_params.get('before',None)
        sensor = self.request.query_params.get('sensor',None)

        if sensor is not None:
            queryset = queryset.filter(sensorType__icontains=sensor)
        if after is not None:
            queryset = queryset.filter(timestamp__gte=after)
        if before is not None:
            queryset = queryset.filter(timestamp__lte=before)

        return queryset
