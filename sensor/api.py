from sensor.models import SensorData
from rest_framework import viewsets,permissions
from .serializers import SensorDataSerializer
from datetime import datetime
from rest_framework.response import Response
from django.http import JsonResponse
from django.db.models import Avg, Max, Min, Sum

#viewset for the sensor data
class SensorDataViewSet(viewsets.ModelViewSet):
    queryset = SensorData.objects.all()
    serializer_class = SensorDataSerializer
    permission_classes=[
                        permissions.AllowAny
                        ]

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


class SummaryView(viewsets.ModelViewSet):
    serializer_class = SensorDataSerializer
    def list(self, request):
        resp = []
        queryset = SensorData.objects.all() #.aggregate(Avg('reading'))
        after = self.request.query_params.get('after', None)
        before = self.request.query_params.get('before',None)
        if after:
            queryset = queryset.filter(timestamp__gte=after)
        if before is not None:
            queryset = queryset.filter(timestamp__lte=before)
        sensorList = set(SensorData.objects.values_list('sensorType',flat=True))
        for sensor in sensorList:
            data = queryset.filter(sensorType__icontains=sensor)
            min = str(data.aggregate(Min('reading'))["reading__min"])
            max = str(data.aggregate(Max('reading'))["reading__max"])
            avg = str(data.aggregate(Avg('reading'))["reading__avg"])
            resp.append({
                "Sensor":sensor,
                "Minimum":min,
                "Maximum":max,
                "Average":avg
            })
        resp_dict={}
        for i in range(len(resp)):
            resp_dict.update({i:resp[i]})
        return Response(resp_dict)

class ListSensors(viewsets.ModelViewSet):
    serializer_class = SensorDataSerializer
    def list(self, request):
        queryset = set(SensorData.objects.values_list('sensorType',flat=True))
        return Response(queryset)
