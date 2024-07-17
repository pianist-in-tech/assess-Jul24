from django.contrib import admin
from .models import Recipe

@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('name', 'ingredients', 'instructions', 'image_url')
    search_fields = ('name',)


