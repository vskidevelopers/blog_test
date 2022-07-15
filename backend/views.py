from django.shortcuts import get_object_or_404
from .models import BlogPost
from .serializers import BlogSerializer
from  rest_framework import viewsets
from rest_framework.response import Response
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

# Create your views here.

class BlogView(viewsets.ModelViewSet):
    serializer_class=BlogSerializer
    queryset = BlogPost.objects.all()

class FeaturesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogPost.objects.all().filter(featured=True)
    serializer_class=BlogSerializer
    lookup_field="slug"

class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), '/static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()