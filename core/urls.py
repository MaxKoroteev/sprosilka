"""otvet URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^admin/',               admin.site.urls),
    url(r'^$',                    TemplateView.as_view(template_name='base.html'),               name='home'),
    url(r'^question/$',           TemplateView.as_view(template_name='question_detail.html'),    name='question'),
    url(r'^users/$',              TemplateView.as_view(template_name='user_list.html'),          name='users'),
    url(r'^user/$',               TemplateView.as_view(template_name='user_questions.html'),     name='user'),
    url(r'^user/answers/$',       TemplateView.as_view(template_name='user_answers.html'),       name='user_answers'),
    url(r'^user/notifications/$', TemplateView.as_view(template_name='user_notifications.html'), name='user_notifications'),
]

from django.conf.urls.static import static, settings

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,  document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
