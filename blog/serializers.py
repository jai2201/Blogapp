from rest_framework import serializers
from .models import Blog
from django.contrib.auth.models import User
from taggit_serializer.serializers import TagListSerializerField 
from taggit_serializer.serializers import TaggitSerializer
                                           


class BlogSerializer(TaggitSerializer, serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    image_url = serializers.SerializerMethodField()
    tags = TagListSerializerField()
    class Meta:
        model = Blog
        fields = ('id','author','title','small_desc','full_content','image_url','tags','rank','published_on','edited_on')
    def get_image_url(self, blog):
        request = self.context.get('request')
        image_url = blog.image.url
        return request.build_absolute_uri(image_url)



class UserSerializer(serializers.ModelSerializer):
    blogs = serializers.PrimaryKeyRelatedField(many=True, queryset=Blog.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'blogs']