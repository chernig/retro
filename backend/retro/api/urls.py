from django.urls import path, include
from .views import (
    comment_list_view,
    comment_detail_view,
    comment_create_view, 
    comment_delete_view
    )

urlpatterns = [
    path('comments/', comment_list_view),
    path('comments/<int:comment_id>/', comment_detail_view),
    path('comments/<int:comment_id>/delete', comment_delete_view),
    path('comments/create/', comment_create_view)
]