from django.contrib import admin
from .models import Location, Trip, LocationTrip
# Register your models here.

admin.site.register(Location)
admin.site.register(Trip)
admin.site.register(LocationTrip)
