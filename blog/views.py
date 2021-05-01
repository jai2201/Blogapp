from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.models import User
from . models import Blog
from .serializers import BlogSerializer
from taggit.models import Tag
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser


@api_view(['GET', 'DELETE', 'PUT'])
def get_update_delete_blog(request, pk):
    parser_classes = (MultiPartParser, FormParser)
    try:
        blog = Blog.objects.get(pk=pk)
    except Blog.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BlogSerializer(blog, context={'request': request})
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = BlogSerializer(
            blog, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        blog.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def get_post_blogs(request):
    parser_classes = (MultiPartParser, FormParser)
    if request.method == 'GET':
        blogs = Blog.objects.all()
        serializer = BlogSerializer(
            blogs, context={'request': request}, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = BlogSerializer(
            data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
