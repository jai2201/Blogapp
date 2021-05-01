from django.db import models
from django.contrib.auth.models import User
from taggit.managers import TaggableManager


class Blog(models.Model):
    author = models.CharField(max_length=100, null=True, blank=True)
    title = models.CharField(max_length=50, null=True, blank=True)
    small_desc = models.CharField(max_length=300, null=True, blank=True)
    full_content = models.CharField(max_length=3000, null=True, blank=True)
    image = models.ImageField(null=True, blank=True,
                              upload_to="media/blogimage")
    rank = models.CharField(max_length=3)
    month = models.CharField(max_length=3, default='', null=True, blank=True)
    date = models.CharField(default='', null=True, blank=True, max_length=2)
    #tags = TaggableManager()
    tag1 = models.CharField(max_length=50, null=True, blank=True)
    tag2 = models.CharField(max_length=50, null=True, blank=True)
    tag3 = models.CharField(max_length=50, null=True, blank=True)
