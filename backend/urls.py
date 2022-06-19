from django.contrib import admin
from django.urls import path, re_path
from backend.views import load_prediction
from django.views.generic import TemplateView
urlpatterns = [
    path('', load_prediction),
]
