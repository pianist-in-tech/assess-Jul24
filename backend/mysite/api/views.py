# from django.shortcuts import render
from rest_framework import viewsets, status, generics, permissions
from rest_framework.decorators import api_view 
from rest_framework.response import Response 
from .models import Recipe
from .serializers import RecipeSerializer

# ViewSet for handling CRUD operations on Recipe objects
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

# Generic view for handling Retrieve, Update, and Destroy operations on Recipe objects
class RecipeUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

# API view for handling GET (list) and POST (create) operations on Recipe objects
@api_view(['GET', 'POST'])
def recipe_list(request):
    if request.method == 'GET':
        recipes = Recipe.objects.all()
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# API view for handling GET (retrieve) operation on a specific Recipe object
@api_view(['GET'])
def recipe_detail(request, pk):
    try:
        recipe = Recipe.objects.get(pk=pk)
    except Recipe.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RecipeSerializer(recipe)
        return Response(serializer.data)
    
   
