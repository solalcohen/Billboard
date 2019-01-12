# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django import forms


class Billboard(models.Model):
    title = models.CharField(max_length=50,null=False)
    text = models.CharField(max_length=300,null=False)
    author = models.CharField(max_length=10,null=False)

    def __str__(self):
        return self.title

