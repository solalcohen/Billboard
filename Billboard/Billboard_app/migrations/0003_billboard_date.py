# -*- coding: utf-8 -*-
# Generated by Django 1.11.18 on 2019-01-12 23:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Billboard_app', '0002_auto_20190112_2248'),
    ]

    operations = [
        migrations.AddField(
            model_name='billboard',
            name='date',
            field=models.CharField(default=b'2019/01/12', max_length=20),
        ),
    ]
