# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-21 07:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('airport', models.BooleanField()),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=1000)),
                ('latitude', models.DecimalField(decimal_places=6, max_digits=12)),
                ('longitude', models.DecimalField(decimal_places=6, max_digits=12)),
            ],
        ),
    ]
