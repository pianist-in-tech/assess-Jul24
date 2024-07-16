from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import RecipeViewSet

router = DefaultRouter()
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('recipes/<int:pk>/', views.recipe_detail),
]
