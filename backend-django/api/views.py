from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Role
from .serializers import RoleSerializer


class RolesListView(APIView):
    def get(self, request):
        roles = Role.objects.prefetch_related('questions__options').all()
        serializer = RoleSerializer(roles, many=True)
        return Response({'roles': serializer.data})
