from django.shortcuts import render
from django.http import JsonResponse
from .models import SensorData

def minmax(request):
    context={
    "minmax":'this is a json'
    }

    return JsonResponse(context)
