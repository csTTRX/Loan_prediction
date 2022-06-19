from django.contrib import admin
from django.urls import path, re_path
from backend.views import load_prediction
from django.views.generic import TemplateView
urlpatterns = [
    #re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
    path('loan_predict/', load_prediction),
]
