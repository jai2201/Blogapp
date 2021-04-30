from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.models import User
from . models import Blog
from .serializers import BlogSerializer
from taggit.models import Tag
from rest_framework import status


@api_view(['GET', 'DELETE', 'PUT'])
def get_update_delete_blog(request, pk):
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
            serializer.save(author=request.user)
            return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        blog.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def get_post_blogs(request, pk):
    if request.method == 'GET':
        user = User.objects.get(id=pk)
        blogs = Blog.objects.all()
        serializer = BlogSerializer(
            blogs, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET', 'POST'])
def get_post_blogs_user(request, pk):
    if request.method == 'GET':
        user = User.objects.get(id=pk)
        blogs = Blog.objects.filter(author=user)
        serializer = BlogSerializer(
            blogs, context={'request': request}, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        user = User.objects.get(id=pk)
        print(user.username)

        data = {
            'title': request.data.get('title'),
            'small_desc': request.data.get('small_desc'),
            'full_content': request.data.get('full_content'),
            'image': request.data.get('image'),
            'rank': int(request.data.get('rank')),
            'likes': request.data.get('likes'),
            'tags': request.data.get('tags'),
            'month': request.data.get('month'),
            'date': request.data.get('date'),
        }
        serializer = BlogSerializer(data=data, context={'request': request})
        if serializer.is_valid():
            serializer.save(author=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
