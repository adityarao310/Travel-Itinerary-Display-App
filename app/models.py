from django.db import models
from django.utils import timezone

class Location(models.Model):
    airport = models.BooleanField()
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)
    latitude = models.DecimalField(max_digits=12, decimal_places=9)
    longitude = models.DecimalField(max_digits=12, decimal_places=9)
    created_date = models.DateTimeField(
            default=timezone.now)
    # image =

    #used to show title in the admin panel list of locations
    def __str__(self):
        return self.title

'''jpeg and png images allowed, had to install Pillow, which requires two compulsory libraries
class Image(models.Model):
    title = models.CharField(max_length=60, blank=True)
    image_stored = models.ImageField(upload_to='documents/')
    upload_time = models.DateTimeField(auto_now_add=True)
'''

class Trip(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=600)
    description = models.TextField(max_length=1000)
    created_date = models.DateTimeField(
            default=timezone.now)
    def __str__(self):
        return self.title

class LocationTrip(models.Model):
    trip = models.ForeignKey('Trip', on_delete=models.CASCADE)
    location = models.ForeignKey('Location', on_delete=models.CASCADE)
    created_date = models.DateTimeField(
            default=timezone.now)
    def __str__(self):
        return self.trip
    '''
    name = str(Trip.title) + str(Location.title)

    def __str__(self):
        return self.name
    '''
