from django.shortcuts import render

def index(request):
    return render(request, 'portfolio/index.html')

def home(request):
    return render(request, 'portfolio/home.html')

def projects(request):
    return render(request, 'portfolio/projects.html')

def project_detail(request, id):
    return render(request, 'portfolio/project_detail.html')

def skills(request):
    return render(request, 'portfolio/skills.html')

def contact(request):
    return render(request, 'portfolio/contact.html')
