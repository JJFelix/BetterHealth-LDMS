from django.urls import path, include
from . import views

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# router.register(r'cows', views.CowViewSet, basename='cow')
# router.register(r'cows/register/', views.add_cow, basename='register')

urlpatterns = [
    path('', include(router.urls)),
    # path('cows/', views.cow_list, name='list_cows'),
]