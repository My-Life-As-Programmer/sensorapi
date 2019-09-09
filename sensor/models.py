from django.db import models

class SensorData(models.Model):
    reading = models.DecimalField(max_digits=5, decimal_places=2)
    timestamp = models.CharField(max_length=50)
    sensorType = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "SensorData"
