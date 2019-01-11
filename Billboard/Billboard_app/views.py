# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Billboard

def index(request):
    Billboards=Billboard.objects.all()
    return render(request, 'Billboard_app/index.html', {'Billboards':Billboards})