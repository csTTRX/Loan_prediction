from django.contrib import admin
from django.urls import path
from backend.views import load_prediction
from django.views.generic import TemplateView
urlpatterns = [
    path('',TemplateView.as_view(template_name = 'index.html')),
    path('loan_predict/', load_prediction)
]
