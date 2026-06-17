from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views
from .api_views import (
    ProjectListAPIView,
    SkillListAPIView,
    ExperienceListAPIView
)

urlpatterns = [
    path('', views.home, name='home'),

    path('api/projects/', ProjectListAPIView.as_view()),
    path('api/skills/', SkillListAPIView.as_view()),
    path('api/experience/', ExperienceListAPIView.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)