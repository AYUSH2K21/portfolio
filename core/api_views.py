from rest_framework import generics
from .models import Project, Skill, Experience
from .serializers import (
    ProjectSerializer,
    SkillSerializer,
    ExperienceSerializer
)


class ProjectListAPIView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class SkillListAPIView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class ExperienceListAPIView(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer