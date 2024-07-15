from django.shortcuts import render
from rest_framework import serializers, viewsets  
from rest_framework.decorators import api_view  
from .models import Recipe
from .serializers import RecipeSerializer

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

