from rest_framework import routers
from .api import SensorDataViewSet,SummaryView,ListSensors



router = routers.DefaultRouter()
router.register('api/data', SensorDataViewSet, 'data')
router.register('api/summery', SummaryView, 'summery')
router.register('api/sensors', ListSensors, 'sensors')

urlpatterns = router.urls
