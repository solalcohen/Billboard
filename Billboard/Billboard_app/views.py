# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from .models import Billboard
import time
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def index(request):
    date_post = time.strftime("%Y/%m/%d")
    Billboards = Billboard.objects.all()
    if request.method == 'POST':
        title = request.POST.get('title')
        text = request.POST.get('text')
        author = request.POST.get('author')
        model = Billboard(title=title, text=text, author=author,date=date_post)
        model.save()
    return render(request, 'Billboard_app/index.html', {'Billboards': Billboards,'date':date_post})
