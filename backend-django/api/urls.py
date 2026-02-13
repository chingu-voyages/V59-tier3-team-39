from django.urls import path
from .views import RolesListView

urlpatterns = [
    path('roles/', RolesListView.as_view(), name='roles-list'),
]