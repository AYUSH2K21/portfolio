# Ayush Kumar — Portfolio Website

A professional Django portfolio website with a sleek dark terminal theme.

## 🚀 Quick Start

```bash
# 1. Install dependencies
pip install django

# 2. Apply migrations
python manage.py migrate

# 3. Create superuser (for admin panel)
python manage.py createsuperuser

# 4. Run the server
python manage.py runserver
```

Visit: http://127.0.0.1:8000

## 🔧 Admin Panel

Go to http://127.0.0.1:8000/admin to manage:
- **Projects** — Add your projects with title, description, tech stack, GitHub & live links
- **Skills** — Add skills with categories (Languages, Frameworks, Databases, Tools) and proficiency %
- **Experience** — Add work history with roles, companies, and durations
- **Messages** — View contact form submissions

## 📁 Project Structure

```
ayush_portfolio/
├── core/               # Main app
│   ├── models.py       # Project, Skill, Experience, Message
│   ├── views.py        # Home view + contact form handler
│   ├── admin.py        # Admin registrations
│   └── urls.py
├── portfolio/          # Django settings & URL config
├── templates/core/     # HTML templates
│   └── home.html       # Single-page portfolio template
├── static/
│   ├── css/style.css   # Dark terminal theme styles
│   └── js/main.js      # Typed text, animations, nav
└── manage.py
```

## 🎨 Customisation

- Edit `templates/core/home.html` to update your name, bio, social links
- Edit `static/css/style.css` to change colours (`--green` variable for accent)
- Add data via admin panel — the template automatically uses DB data when available

## 🌍 Deployment

For production, update `settings.py`:
- Set `DEBUG = False`
- Set `SECRET_KEY` from environment variable
- Configure `ALLOWED_HOSTS`
- Use `python manage.py collectstatic`
