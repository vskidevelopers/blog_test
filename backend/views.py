from django.shortcuts import get_object_or_404
from .models import BlogPost
from .serializers import BlogSerializer
from  rest_framework import viewsets
from rest_framework.response import Response

# Create your views here.

class BlogView(viewsets.ModelViewSet):
    serializer_class=BlogSerializer
    queryset = BlogPost.objects.all()

    # def retrieve(self, request, *args, **kwargs):
    #     queryset = BlogPost.objects.all().filter(featured=True)
    #     blog=get_object_or_404(queryset)
    #     serializer =BlogSerializer(blog)
    #     return Response(serializer.data)

class FeaturesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogPost.objects.all().filter(featured=True)
    serializer_class=BlogSerializer
    lookup_field="slug"