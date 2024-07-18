from django.db import models

# Define the Recipe model class
class Recipe(models.Model):
    name = models.CharField(max_length=100)
    ingredients = models.JSONField()
    instructions = models.JSONField()
    image_url = models.URLField(max_length=200, blank=True)

    def __str__(self):
        return self.name
