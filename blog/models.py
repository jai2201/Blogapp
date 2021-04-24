from django.db import models
from django.contrib.auth.models import User
from taggit.managers import TaggableManager
class Blog(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50,null=False, blank=False)
    small_desc = models.CharField(max_length=300, null=False, blank=False)
    full_content = models.CharField(max_length=3000, null=False, blank=False)
    image = models.ImageField(null=True,blank=True,upload_to="media/blogimage")
    rank = models.IntegerField()
    likes = models.ManyToManyField(User, blank=True, related_name="blog_likes")
    published_on=models.DateTimeField(auto_now=True)
    edited_on=models.DateTimeField(auto_now=True)
    tags = TaggableManager()
