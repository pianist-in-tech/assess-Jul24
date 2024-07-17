import json
from django.core.management.base import BaseCommand
from myapp.models import Recipe

class Command(BaseCommand):
    help = 'Fix invalid JSON in Recipe ingredients'

    def handle(self, *args, **kwargs):
        recipes = Recipe.objects.all()
        for recipe in recipes:
            try:
                # Try to parse the JSON field
                json.loads(recipe.ingredients)
            except json.JSONDecodeError:
                # If it's invalid, fix it (example: wrap in quotes)
                fixed_ingredients = f'"{recipe.ingredients}"'
                recipe.ingredients = fixed_ingredients
                recipe.save()
                self.stdout.write(self.style.SUCCESS(f'Fixed ingredients for recipe ID {recipe.id}'))