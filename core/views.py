from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings

from .models import Project, Skill, Experience, Message


def home(request):
    projects = Project.objects.all()
    skills = Skill.objects.all()
    experiences = Experience.objects.all()

    skill_categories = {}

    for skill in skills:
        cat = skill.get_category_display()
        skill_categories.setdefault(cat, []).append(skill)

    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message_text = request.POST.get('message')

        if name and email and subject and message_text:

            Message.objects.create(
                name=name,
                email=email,
                subject=subject,
                message=message_text
            )

            send_mail(
                subject=f"Portfolio Contact: {subject}",
                message=f"""
Name: {name}
Email: {email}

Message:
{message_text}
""",
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[settings.EMAIL_HOST_USER],
                fail_silently=True,
            )

            messages.success(request, 'Message sent successfully!')
            return redirect('home')

        else:
            messages.error(request, 'Please fill in all fields.')

    context = {
        'projects': projects,
        'skill_categories': skill_categories,
        'experiences': experiences,
    }

    return render(request, 'core/home.html', context)