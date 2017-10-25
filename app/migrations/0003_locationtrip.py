# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-21 08:22
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20171021_0812'),
    ]

    operations = [
        migrations.CreateModel(
            name='LocationTrip',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Location')),
                ('trip', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Trip')),
            ],
        ),
    ]