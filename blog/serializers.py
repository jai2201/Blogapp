from rest_framework import serializers
from .models import Blog
from django.contrib.auth.models import User
from taggit_serializer.serializers import TagListSerializerField
from taggit_serializer.serializers import TaggitSerializer


class BlogSerializer(TaggitSerializer, serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    tags = TagListSerializerField()

    class Meta:
        model = Blog
        fields = ('id', 'author', 'title', 'small_desc', 'full_content',
                  'image', 'tags', 'rank', 'published_on', 'edited_on')
