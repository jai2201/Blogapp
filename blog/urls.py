from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>', views.get_update_delete_blog,
         name='get_update_delete_blog'),
    path('user/myblogs/<int:pk>', views.get_post_blogs_user,
         name='get_post_blogs_user'),
    path('user/<int:pk>', views.get_post_blogs, name='get_post_blogs'),
]
