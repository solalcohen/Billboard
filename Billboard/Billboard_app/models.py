# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Billboard(models.Model):
    title = models.CharField(max_length=50,default='')
    text = models.CharField(max_length=300,default='')
    author = models.CharField(max_length=10,default='')

    def __str__(self):
        return self.title