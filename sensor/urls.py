from rest_framework import routers
from .api import SensorDataViewSet

router = routers.DefaultRouter()
router.register('api/data', SensorDataViewSet, 'data')

urlpatterns = router.urls
