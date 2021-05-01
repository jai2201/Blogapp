from rest_framework import serializers
from .models import Blog
from django.contrib.auth.models import User
from taggit_serializer.serializers import TagListSerializerField
from taggit_serializer.serializers import TaggitSerializer
from rest_framework.parsers import MultiPartParser, FormParser


class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = '__all__'
