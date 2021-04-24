from django.contrib import admin

from .models import Blog 

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
	list_display = ['author','title','small_desc','full_content','image','rank','published_on','edited_on']



