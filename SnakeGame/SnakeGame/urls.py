"""
URL configuration for SnakeGame project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path , include


# from Game.views import start_game
# isolate game app urls
from Game import urls

# isolate Qwen app urls
from Qwen_Model import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    # game app url's
    path("Game/" , include('Game.urls')),
    # qwen app url's
    path('Chat_App/' , include('Qwen_Model.urls')),
]
