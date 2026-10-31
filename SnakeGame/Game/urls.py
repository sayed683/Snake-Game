
from django.urls import  path
from .views import start_game

urlpatterns = [
    path('Home' , start_game),
]