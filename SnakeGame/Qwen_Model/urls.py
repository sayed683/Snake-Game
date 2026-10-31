
from django.urls import path

from .views import call_Qwen_service


urlpatterns = [
    path('Home',call_Qwen_service),
]



