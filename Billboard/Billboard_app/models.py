# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django import forms
import time

date_created = time.strftime("%Y/%m/%d")


class Billboard(models.Model):
    title = models.CharField(max_length=50, null=False)
    text = models.CharField(max_length=300, null=False)
    author = models.CharField(max_length=10, null=False)
    date = models.CharField(max_length=20, default=date_created)

    def __str__(self):
        return self.title
