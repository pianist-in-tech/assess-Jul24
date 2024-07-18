from rest_framework import serializers
from .models import Recipe

# Define the RecipeSerializer class, inheriting from serializers.ModelSerializer
class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'name', 'ingredients', 'instructions', 'image_url']
