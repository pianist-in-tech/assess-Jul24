from django.contrib import admin
from .models import Recipe

# Register the Recipe model with the admin site using the RecipeAdmin configuration
@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('name', 'ingredients', 'instructions', 'image_url')
    search_fields = ('name',)


