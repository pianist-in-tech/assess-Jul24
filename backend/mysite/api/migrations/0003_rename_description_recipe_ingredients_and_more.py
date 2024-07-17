# Generated by Django 5.0.7 on 2024-07-16 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_recipe_image_url'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recipe',
            old_name='description',
            new_name='ingredients',
        ),
        migrations.AddField(
            model_name='recipe',
            name='instructions',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
