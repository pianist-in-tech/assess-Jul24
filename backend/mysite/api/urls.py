from django.urls import path, include
from rest_framework import routers
#from rest_framework.routers import DefaultRouter
from . import views
from .views import RecipeViewSet, RecipeUpdateDeleteView

router = routers.DefaultRouter()
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('recipes/<int:pk>/', views.recipe_detail),
    path('recipes/update-delete/<int:pk>/', RecipeUpdateDeleteView.as_view(), name='recipe-update-delete'),
]
